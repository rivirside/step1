# Step 1 Medical Explorers

Interactive navigation tools for medical students preparing for USMLE Step 1. Explore conditions, medications, and microbiology through an intuitive, hierarchical interface.

**Live Demo**: [https://rivirside.github.io/step1](https://rivirside.github.io/step1)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub Pages](https://img.shields.io/badge/GitHub-Pages-blue)](https://rivirside.github.io/step1)

---

## 🎯 Features

### Three Integrated Explorers

1. **Conditions Explorer** 🏥 (Blue Theme)
   - Browse diseases by body system
   - Pathophysiology, presentation, diagnostics, management
   - **16 systems, 50+ conditions**

2. **Medications Explorer** 💊 (Purple Theme)
   - Navigate drugs by system → therapeutic → pharmacologic class
   - Mechanism, indications, contraindications, side effects
   - **16 systems, 385 drugs**

3. **Bugs Explorer** 🦠 (Green Theme)
   - *Coming Soon*
   - Pathogens and antimicrobials

---

## 🚀 Quick Start

### View Live (GitHub Pages)
Visit the deployed site: *[Add your URL here]*

### Run Locally

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/step1-conditions.git
cd step1-conditions

# Start local server (choose one):
python3 -m http.server 8765        # Python 3
python -m SimpleHTTPServer 8765    # Python 2
npx http-server -p 8765            # Node.js

# Open in browser
open http://localhost:8765
```

---

## 📂 Project Structure

```
step1-conditions/
├── index.html                    # Landing page
├── conditions/                   # Conditions Explorer
│   ├── index.html
│   ├── script.js                # Tree-based UI
│   ├── data-loader.js           # Data management
│   └── data/
│       ├── systems/
│       ├── categories/
│       └── diseases/
├── medications/                  # Medications Explorer
│   ├── index-v2.html
│   ├── script-v3.js             # Simplified tree UI
│   ├── data-loader.js
│   └── data/
│       ├── systems/
│       ├── classes/
│       └── drugs/
└── shared/                      # Shared Design System
    ├── design-tokens.css
    ├── navigation.css
    ├── components.css
    ├── themes.css
    └── explorer-navigation.js
```

---

## 🎨 Design System

### Color Themes
- **Conditions**: Blue `#2563eb` / Teal `#0891b2`
- **Medications**: Purple `#7c3aed` / Violet `#a855f7`
- **Bugs**: Green `#16a34a` / Lime `#65a30d`

### Key Features
- ✅ Unified navigation header
- ✅ Hierarchical tree sidebar
- ✅ Responsive design
- ✅ Color-coded cross-references
- ✅ Fast search functionality
- ✅ Mobile-friendly

---

## 🗺️ Roadmap

### ✅ Phase 1-3: Foundation (Complete)
- [x] Modular architecture
- [x] Shared design system
- [x] Unified navigation
- [x] Tree-based UI for both platforms
- [x] GitHub Pages ready

### 🔄 Phase 4: Cross-Platform Integration (Next)
- [ ] Generate preview JSONs
- [ ] Implement cross-reference links
- [ ] Hover tooltips (condition ↔ medication)
- [ ] Context-preserving navigation

### ⏳ Phase 5: Content Expansion
- [ ] Add 100+ high-yield conditions
- [ ] Expand medications coverage
- [ ] Clinical pearls and mnemonics

### 🔮 Phase 6: Bugs Explorer
- [ ] Microbiology platform
- [ ] Pathogen database
- [ ] Antimicrobial linking

---

## 🛠️ Technology Stack

- **Frontend**: Vanilla JavaScript (ES6 modules)
- **Styling**: CSS3 (custom properties, grid, flexbox)
- **Data**: JSON modules
- **Architecture**: Federated explorers, modular design
- **Hosting**: GitHub Pages (static site)
- **Build**: None! No webpack, no npm, just pure code

---

## 📊 Current Coverage

### Conditions Explorer
```
16 Body Systems
├── Cardiovascular (STEMI, CHF, HTN, etc.)
├── Respiratory (COPD, Asthma, Pneumonia, etc.)
├── Gastrointestinal (GERD, IBD, Hepatitis, etc.)
├── Psychiatry (Depression, Schizophrenia, etc.)
└── ... (12 more systems)

Total: 50+ conditions
```

### Medications Explorer
```
16 Body Systems
├── 60 Therapeutic Classes
├── 167 Pharmacologic Classes
└── 385 Individual Drugs

Example: Cardiovascular
  ├── Antihypertensives
  │   ├── ACE Inhibitors (Lisinopril, Enalapril, ...)
  │   ├── Beta Blockers (Metoprolol, Atenolol, ...)
  │   └── ...
  └── ...
```

---

## 🤝 Contributing

Contributions welcome! This is a tool built for medical students, by medical students.

### How to Contribute

1. **Fork** the repository
2. **Create a branch**: `git checkout -b feature/add-condition-xyz`
3. **Follow existing structure**: Use templates in `data/` folders
4. **Test locally**: Ensure navigation works
5. **Submit PR**: Describe your changes

### Content Guidelines
- ✅ High-yield for USMLE Step 1
- ✅ Accurate medical information (cite sources if needed)
- ✅ Concise and clear
- ✅ Follow existing JSON structure
- ❌ No copyrighted content
- ❌ No personal opinions/biases

---

## 📝 Development

### Adding a Condition
```javascript
// conditions/data/diseases/cardiovascular/stemi.js
export default {
    id: 'stemi',
    name: 'ST-Elevation Myocardial Infarction (STEMI)',
    categories: ['acute-coronary-syndrome'],
    severity: 'high',
    acuity: 'acute',
    detail: {
        definition: '...',
        pathophysiology: '...',
        presentation: '...',
        // ... more fields
    }
};
```

### Adding a Medication
```javascript
// medications/data/drugs/cardiovascular/aspirin.js
export default {
    id: 'aspirin',
    name: 'Aspirin',
    system: 'cardiovascular',
    therapeuticClass: 'antiplatelets',
    pharmacologicClass: 'nsaids',
    indications: ['MI', 'Stroke prevention', 'Fever'],
    contraindications: ['Bleeding disorders', 'Peptic ulcer'],
    // ... more fields
};
```

---

## 🎓 For Medical Students

### Study Strategies

1. **Systems-Based Review**
   - Navigate by body system
   - Group related content mentally

2. **Hierarchical Learning**
   - Start broad (system) → narrow (class) → specific (drug/disease)
   - Use tree structure to test recall

3. **Cross-Reference** (Phase 4)
   - Link conditions to treatments
   - Understand drug indications in context

4. **Active Recall**
   - Hide detail panel, try to remember from tree
   - Use search to quiz yourself

5. **Quick Reference**
   - Fast lookup during practice questions
   - Clarify mechanism/presentation confusion

---

## 📚 Documentation

- **[INTEGRATION_ARCHITECTURE.md](./INTEGRATION_ARCHITECTURE.md)** - Technical architecture
- **[THEME_SYSTEM.md](./THEME_SYSTEM.md)** - Color-coding and themes
- **[UI_SIMPLIFICATION.md](./UI_SIMPLIFICATION.md)** - UI improvements
- **[QUICK_START.md](./QUICK_START.md)** - Testing guide

---

## 🙏 Acknowledgments

- Built with [Claude Code](https://claude.com/claude-code)
- Inspired by medical students' need for better study tools
- Community feedback and contributions

---

## 📞 Support

- **Bug Reports**: [GitHub Issues](https://github.com/YOUR_USERNAME/step1-conditions/issues)
- **Feature Requests**: [GitHub Discussions](https://github.com/YOUR_USERNAME/step1-conditions/discussions)
- **Support Development**: [Ko-fi](https://ko-fi.com/rivir)

---

## 📄 License

This project is open source and available for educational purposes.

**Built for medical students preparing for USMLE Step 1**

---

## ⚡ Performance

- **Load Time**: <2s on 4G
- **Bundle Size**: ~500KB total (all data included)
- **No Backend**: Entirely client-side
- **Offline Capable**: Works with service workers (future)

---

**Good luck on Step 1!** 📚💊🏥

*Last Updated: October 20, 2025*
