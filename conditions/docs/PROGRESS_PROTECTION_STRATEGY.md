# Progress Loss Prevention Strategy

## Problem Statement

Premium users paying $49-79 for a question bank could lose significant progress (hundreds of answered questions, performance data) if:
- Browser data is cleared
- localStorage is accidentally wiped
- Device is lost/stolen/replaced
- They forget to export before switching browsers/devices

**This is unacceptable for a paid product.** We need multi-layer protection.

---

## Multi-Layer Safety Net

### Layer 1: Auto-Save to localStorage (Primary, Instant)

Every single answer automatically saves to localStorage immediately.

```javascript
class QuizStateManager {
  recordAnswer(pageId, questionId, isCorrect) {
    // Update state
    if (!this.state.p[pageId]) {
      this.state.p[pageId] = { q: {} };
    }

    const stats = this.state.p[pageId].q[questionId] || [0, 0, 0, 0];
    stats[0]++; // seen
    stats[isCorrect ? 1 : 2]++; // correct/incorrect
    stats[3] = Math.floor(Date.now() / 1000); // timestamp

    this.state.p[pageId].q[questionId] = stats;
    this.state.ts = Math.floor(Date.now() / 1000);

    // INSTANT save to localStorage
    this.saveToLocalStorage();

    // INSTANT save to browser sync (if available)
    this.syncToBrowserStorage();
  }
}
```

---

### Layer 2: Browser Sync Storage (Chrome/Firefox Sync, Automatic)

Uses Chrome's `chrome.storage.sync` or Firefox's `browser.storage.sync` API - syncs across devices automatically if user is logged into browser.

```javascript
async syncToBrowserStorage() {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync) {
    try {
      // Chrome/Edge sync storage (max 100KB per item)
      // Compress state if needed
      const stateString = JSON.stringify(this.state);

      if (stateString.length < 100000) {
        await chrome.storage.sync.set({ medQuizProgress: stateString });
        console.log('✓ Synced to Chrome');
      } else {
        // Split into chunks if >100KB
        await this.syncLargeState();
      }
    } catch (err) {
      console.warn('Browser sync failed (quota exceeded?)', err);
    }
  }
}

async loadFromBrowserStorage() {
  if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.sync) {
    const data = await chrome.storage.sync.get('medQuizProgress');
    if (data.medQuizProgress) {
      return JSON.parse(data.medQuizProgress);
    }
  }
  return null;
}
```

**Benefits:**
- Automatic sync across Chrome/Edge/Firefox (if user logged in)
- No backend needed
- Works offline
- User doesn't have to do anything

**Limitations:**
- Only works if user logged into browser
- 100KB limit (can handle ~2000-3000 questions worth of progress)
- Not all browsers support

---

### Layer 3: Cloud Backup (Premium Users, Every 5 Minutes)

For paid users, automatically backup to Cloudflare KV every 5 minutes.

#### Cloudflare Worker (Free Tier)

```javascript
// worker.js
export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // POST /backup - Save state
    if (request.method === 'POST' && url.pathname === '/backup') {
      const { licenseKey, state, timestamp } = await request.json();

      // Validate license (already validated on client, but double-check)
      const valid = await this.validateLicense(licenseKey, env);
      if (!valid) {
        return new Response('Unauthorized', { status: 401 });
      }

      // Store in KV with 90-day expiration
      await env.PROGRESS_STORE.put(
        `progress:${licenseKey}`,
        JSON.stringify({ state, timestamp }),
        { expirationTtl: 90 * 24 * 60 * 60 }
      );

      // Also keep last 5 backups for version history
      await this.saveBackupHistory(licenseKey, state, timestamp, env);

      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // GET /backup/:licenseKey - Restore state
    if (request.method === 'GET' && url.pathname.startsWith('/backup/')) {
      const licenseKey = url.pathname.split('/')[2];

      const backup = await env.PROGRESS_STORE.get(`progress:${licenseKey}`);
      if (!backup) {
        return new Response('No backup found', { status: 404 });
      }

      return new Response(backup, {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // GET /backup/:licenseKey/history - Get backup history
    if (request.method === 'GET' && url.pathname.includes('/history')) {
      const licenseKey = url.pathname.split('/')[2];
      const history = await env.PROGRESS_STORE.get(`history:${licenseKey}`);

      return new Response(history || '[]', {
        headers: { 'Content-Type': 'application/json' }
      });
    }
  },

  async saveBackupHistory(licenseKey, state, timestamp, env) {
    // Keep last 5 backups
    const historyKey = `history:${licenseKey}`;
    const existing = await env.PROGRESS_STORE.get(historyKey);
    let history = existing ? JSON.parse(existing) : [];

    // Add new backup
    history.unshift({
      timestamp,
      stateSnapshot: state,
      questionCount: this.countQuestions(state)
    });

    // Keep only last 5
    history = history.slice(0, 5);

    await env.PROGRESS_STORE.put(historyKey, JSON.stringify(history), {
      expirationTtl: 90 * 24 * 60 * 60
    });
  },

  countQuestions(state) {
    let count = 0;
    for (const page in state.p) {
      count += Object.keys(state.p[page].q || {}).length;
    }
    return count;
  },

  async validateLicense(licenseKey, env) {
    // Cache validation results for 1 hour
    const cached = await env.PROGRESS_STORE.get(`valid:${licenseKey}`);
    if (cached) return true;

    // Validate against Gumroad
    const response = await fetch('https://api.gumroad.com/v2/licenses/verify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        product_id: env.GUMROAD_PRODUCT_ID,
        license_key: licenseKey
      })
    });

    const data = await response.json();
    if (data.success) {
      // Cache for 1 hour
      await env.PROGRESS_STORE.put(`valid:${licenseKey}`, 'true', {
        expirationTtl: 3600
      });
      return true;
    }
    return false;
  }
};
```

#### Client-Side Auto-Backup

```javascript
class QuizStateManager {
  constructor() {
    this.state = this.loadState();

    // For premium users, start auto-backup
    if (this.state.lic?.key) {
      this.startAutoBackup();
    }
  }

  startAutoBackup() {
    // Backup every 5 minutes
    setInterval(() => {
      this.cloudBackup();
    }, 5 * 60 * 1000);

    // Also backup on page unload
    window.addEventListener('beforeunload', () => {
      this.cloudBackup();
    });
  }

  async cloudBackup() {
    if (!this.state.lic?.key) return;

    try {
      const response = await fetch('https://worker.yourapp.workers.dev/backup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          licenseKey: this.state.lic.key,
          state: this.state,
          timestamp: Date.now()
        })
      });

      if (response.ok) {
        this.lastCloudBackup = Date.now();
        console.log('✓ Cloud backup successful');
      }
    } catch (err) {
      console.warn('Cloud backup failed (offline?)', err);
      // Fail silently - localStorage is primary
    }
  }

  async restoreFromCloud() {
    if (!this.state.lic?.key) {
      alert('Enter your license key first to restore from cloud');
      return;
    }

    try {
      const response = await fetch(
        `https://worker.yourapp.workers.dev/backup/${this.state.lic.key}`
      );

      if (!response.ok) {
        alert('No cloud backup found');
        return;
      }

      const { state, timestamp } = await response.json();

      // Compare timestamps
      const cloudDate = new Date(timestamp).toLocaleString();
      const localDate = new Date(this.state.ts * 1000).toLocaleString();

      const message = `
        Cloud backup: ${cloudDate}
        Local state: ${localDate}

        Restore from cloud backup?
      `;

      if (confirm(message)) {
        this.state = state;
        this.saveToLocalStorage();
        location.reload();
      }
    } catch (err) {
      alert('Failed to restore from cloud: ' + err.message);
    }
  }

  async showBackupHistory() {
    const response = await fetch(
      `https://worker.yourapp.workers.dev/backup/${this.state.lic.key}/history`
    );
    const history = await response.json();

    // Show modal with backup versions
    const modal = document.createElement('div');
    modal.innerHTML = `
      <div class="backup-history-modal">
        <h2>Backup History</h2>
        <p>Select a backup to restore:</p>
        <ul>
          ${history.map((backup, i) => `
            <li>
              <strong>${new Date(backup.timestamp).toLocaleString()}</strong>
              <br>
              ${backup.questionCount} questions answered
              <button onclick="quizManager.restoreFromVersion(${i})">
                Restore
              </button>
            </li>
          `).join('')}
        </ul>
        <button onclick="this.parentElement.parentElement.remove()">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
  }
}
```

**Cost:** $0 (Cloudflare KV free tier: 100K reads/day, 1K writes/day, 1GB storage)

---

### Layer 4: Manual Export Reminders (Safety Net)

Even with auto-backup, remind users to manually export as a final safety net.

```javascript
class QuizStateManager {
  checkExportReminder() {
    const totalAnswered = this.getTotalAnswered();

    // Show reminder at milestones: 50, 100, 250, 500, 1000 questions
    const milestones = [50, 100, 250, 500, 1000];
    if (milestones.includes(totalAnswered)) {
      this.showMilestoneExport(totalAnswered);
    }

    // Also remind every 7 days
    const lastReminder = localStorage.getItem('lastExportReminder');
    const sevenDaysAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;

    if (!lastReminder || parseInt(lastReminder) < sevenDaysAgo) {
      this.showPeriodicExport();
      localStorage.setItem('lastExportReminder', Date.now().toString());
    }
  }

  showMilestoneExport(count) {
    const toast = document.createElement('div');
    toast.className = 'milestone-toast';
    toast.innerHTML = `
      <div class="toast-content">
        <div class="milestone-badge">🎉 ${count} Questions!</div>
        <p>Great progress! Take a moment to back up your work.</p>
        <div class="toast-buttons">
          <button onclick="quizManager.exportState()">
            💾 Export Progress
          </button>
          <button onclick="this.parentElement.parentElement.parentElement.remove()">
            Later
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(toast);

    // Auto-dismiss after 15 seconds
    setTimeout(() => toast.remove(), 15000);
  }

  showPeriodicExport() {
    // Less intrusive than milestone
    const notification = document.createElement('div');
    notification.className = 'export-notification';
    notification.innerHTML = `
      <div class="notification-content">
        📦 Backup reminder: You've answered ${this.getTotalAnswered()} questions.
        <a href="#" onclick="quizManager.exportState(); return false;">Export now</a>
      </div>
    `;
    document.body.appendChild(notification);

    setTimeout(() => notification.remove(), 10000);
  }
}
```

---

### Layer 5: Export Options (Multiple Formats)

Make it dead simple to export in multiple ways:

```javascript
exportState() {
  const saveString = btoa(JSON.stringify(this.state));

  const modal = document.createElement('div');
  modal.className = 'export-modal';
  modal.innerHTML = `
    <div class="modal-content">
      <h2>Export Your Progress</h2>
      <p>Save this code somewhere safe. You can restore it on any device.</p>

      <div class="save-code-container">
        <textarea
          id="save-code"
          readonly
          onclick="this.select()"
          rows="6"
        >${saveString}</textarea>
      </div>

      <div class="export-options">
        <button class="primary" onclick="navigator.clipboard.writeText('${saveString}').then(() => alert('Copied!'))">
          📋 Copy to Clipboard
        </button>

        <button onclick="quizManager.downloadAsFile()">
          💾 Download as File
        </button>

        <button onclick="quizManager.emailToSelf()">
          📧 Email to Myself
        </button>

        ${this.state.lic?.key ? `
          <button onclick="quizManager.cloudBackup().then(() => alert('Backed up to cloud!'))">
            ☁️ Backup to Cloud
          </button>
        ` : ''}
      </div>

      <div class="export-tips">
        <h3>💡 Tips:</h3>
        <ul>
          <li>Save this in your password manager (LastPass, 1Password, etc.)</li>
          <li>Email it to yourself</li>
          <li>Store in Dropbox/Google Drive</li>
          <li>Take a screenshot and save to your phone</li>
        </ul>
      </div>

      <button onclick="this.parentElement.parentElement.remove()">Close</button>
    </div>
  `;

  document.body.appendChild(modal);
}

downloadAsFile() {
  const saveString = btoa(JSON.stringify(this.state));
  const date = new Date().toISOString().split('T')[0];
  const filename = `step1-progress-${date}.txt`;

  const blob = new Blob([saveString], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

emailToSelf() {
  const saveString = btoa(JSON.stringify(this.state));
  const subject = 'Step 1 Question Bank Progress Backup';
  const body = `Your progress backup (${this.getTotalAnswered()} questions answered):\n\n${saveString}\n\nTo restore: Go to Settings > Import Progress`;

  window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
```

---

### Layer 6: Warning Before Data Loss

Detect potential data loss scenarios:

```javascript
setupWarnings() {
  // Warn before closing browser if unsaved changes
  window.addEventListener('beforeunload', (e) => {
    if (this.hasRecentActivity()) {
      e.preventDefault();
      e.returnValue = 'You have recent progress. Make sure it saved!';
    }
  });

  // Detect localStorage clearing
  window.addEventListener('storage', (e) => {
    if (e.key === 'medQuizProgress' && e.newValue === null) {
      alert('⚠️ Your progress was deleted! Attempting to restore from backup...');
      this.handleProgressLoss();
    }
  });

  // Check for quota exceeded errors
  window.addEventListener('error', (e) => {
    if (e.message.includes('QuotaExceededError')) {
      alert('Browser storage full! Export your progress now.');
      this.exportState();
    }
  });
}

hasRecentActivity() {
  // Check if user answered questions in last 5 minutes
  const fiveMinutesAgo = Date.now() / 1000 - 5 * 60;
  return this.state.ts > fiveMinutesAgo;
}

async handleProgressLoss() {
  // Try to restore from cloud
  if (this.state.lic?.key) {
    try {
      await this.restoreFromCloud();
      return;
    } catch (err) {
      console.error('Cloud restore failed', err);
    }
  }

  // Try to restore from browser sync
  const browserState = await this.loadFromBrowserStorage();
  if (browserState) {
    if (confirm('Found backup in browser sync. Restore?')) {
      this.state = browserState;
      this.saveToLocalStorage();
      location.reload();
      return;
    }
  }

  // Last resort: check if user has an export
  alert('Could not auto-restore. Please import your last export from Settings.');
  window.location.href = '/settings.html#import';
}
```

---

## Progress Dashboard UI

Show users their backup status prominently:

```html
<div class="progress-dashboard">
  <h2>Your Progress</h2>

  <div class="stats">
    <div class="stat">
      <strong>456</strong>
      <span>Questions Answered</span>
    </div>
    <div class="stat">
      <strong>78%</strong>
      <span>Accuracy</span>
    </div>
    <div class="stat">
      <strong>32h</strong>
      <span>Study Time</span>
    </div>
  </div>

  <div class="backup-status">
    <h3>Backup Status</h3>

    <div class="backup-item">
      <span class="backup-type">💾 Local Storage</span>
      <span class="backup-status-badge good">✓ Saved</span>
      <span class="backup-time">Just now</span>
    </div>

    <div class="backup-item">
      <span class="backup-type">🔄 Browser Sync</span>
      <span class="backup-status-badge good">✓ Synced</span>
      <span class="backup-time">2 minutes ago</span>
    </div>

    <div class="backup-item">
      <span class="backup-type">☁️ Cloud Backup</span>
      <span class="backup-status-badge good">✓ Backed up</span>
      <span class="backup-time">5 minutes ago</span>
      <button onclick="quizManager.showBackupHistory()">View History</button>
    </div>

    <div class="backup-item">
      <span class="backup-type">📦 Manual Export</span>
      <span class="backup-status-badge warning">⚠ 8 days ago</span>
      <button onclick="quizManager.exportState()">Export Now</button>
    </div>
  </div>

  <div class="backup-actions">
    <button class="primary" onclick="quizManager.exportState()">
      Export Progress
    </button>
    <button onclick="quizManager.importState()">
      Import Progress
    </button>
    ${userIsPremium ? `
      <button onclick="quizManager.restoreFromCloud()">
        Restore from Cloud
      </button>
    ` : ''}
  </div>
</div>
```

---

## Summary: 6-Layer Protection

| Layer | Method | Automatic? | Premium Only? | Reliability |
|-------|--------|------------|---------------|-------------|
| 1 | localStorage | Yes | No | High (unless browser data cleared) |
| 2 | Browser Sync | Yes | No | Medium (requires browser login) |
| 3 | Cloud Backup (KV) | Yes | **Yes** | Very High (persistent server) |
| 4 | Export Reminders | Semi (prompts user) | No | High (user action required) |
| 5 | Multiple Export Options | No (user-initiated) | No | Very High (user controls) |
| 6 | Warning Systems | Yes | No | Medium (can prevent, not restore) |

---

## Premium vs Free User Experience

### Free Users Get:
- ✓ Auto-save to localStorage (every answer)
- ✓ Browser sync (if logged into Chrome/Firefox)
- ✓ Export reminders at milestones (50, 100, 250 questions)
- ✓ Manual export (copy/download/email)
- ✓ Data loss warnings

### Premium Users Get (Additional):
- ✓ **Cloud backup every 5 minutes** (Cloudflare KV)
- ✓ **Restore from cloud** (from any device)
- ✓ **Backup history** (last 5 versions, up to 90 days)
- ✓ **One-click restore** if data lost
- ✓ **Email alerts** if cloud backup fails

---

## Implementation Cost

**Backend (Cloudflare Worker + KV):**
- Free tier: 100K requests/day, 1GB storage
- Expected usage: ~100 premium users × 288 backups/day = 28,800 writes/day (well under limit)
- **Cost: $0/month**

**Development Time:**
- Layer 1-2 (localStorage + browser sync): 2-4 hours
- Layer 3 (cloud backup): 6-8 hours
- Layer 4-6 (UI + warnings): 4-6 hours
- **Total: 12-18 hours**

**Ongoing Maintenance:**
- ~0 hours (stateless, auto-scaling)
- Monitor Cloudflare dashboard for quota issues

---

## User Communication

Add to purchase confirmation email:

> **Your progress is protected:**
> - Every answer auto-saves to your browser
> - Cloud backup every 5 minutes (premium feature)
> - Export your progress anytime from Settings
> - Restore from cloud on any device with your license key
>
> **Tip:** Export your progress after major study sessions and save the code in your password manager or email.

Add to app footer:

> 💾 Last saved: 2 minutes ago • ☁️ Cloud backup: 5 minutes ago • [Export Progress]

---

## Testing Scenarios

Before launch, test:
1. ✓ Answer 100 questions, clear localStorage, restore from cloud
2. ✓ Answer questions on Device A, login on Device B, verify browser sync worked
3. ✓ Simulate quota exceeded error, verify export prompt
4. ✓ Close browser mid-session, verify warning shown
5. ✓ Test all export methods (clipboard, download, email)
6. ✓ Restore from 1-week-old backup, verify question progress intact
7. ✓ Test with invalid license key, verify cloud backup rejected

---

## Conclusion

With this 6-layer approach, the risk of permanent data loss is **near zero** for premium users:

- Auto-save protects against crashes
- Browser sync protects against device switching
- Cloud backup protects against browser data clearing
- Export reminders protect against forgetting to backup
- Multiple export options ensure users can always get their data out
- Warnings prevent accidental deletion

**User confidence = willingness to pay.** This level of protection justifies the premium price and reduces refund requests.
