# Deployment Guide - GitHub Pages

This guide will help you deploy Step 1 Medical Explorers to GitHub Pages.

---

## ✅ Pre-Deployment Checklist

The project is now **GitHub Pages ready**! Here's what was configured:

- ✅ Main `index.html` landing page at root
- ✅ Relative URLs in navigation (no hardcoded localhost)
- ✅ Clean project structure
- ✅ `.gitignore` for unnecessary files
- ✅ Comprehensive README.md

---

## 🚀 Deployment Steps

### 1. Initialize Git Repository (if not already done)

```bash
cd /Users/rivir/Documents/GitHub/step1-conditions

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Step 1 Medical Explorers

- Conditions Explorer (blue theme, 50+ conditions)
- Medications Explorer (purple theme, 385 drugs)
- Shared design system with unified navigation
- GitHub Pages ready with relative URLs"
```

### 2. Push to Existing GitHub Repository

**Note**: You already have a `step1` repository at https://github.com/rivirside/step1

```bash
# Navigate to the step1 directory
cd /Users/rivir/Documents/GitHub/step1

# Check current status
git status

# Add all new files
git add .

# Create commit
git commit -m "Major update: Add Conditions Explorer and unified design system

- Added Conditions Explorer (blue theme, 50+ conditions)
- Refactored Medications Explorer (purple theme, 385 drugs)
- Unified navigation header across explorers
- Shared design system with color-coded themes
- New landing page with explorer selection
- GitHub Pages ready with proper routing"

# Push to GitHub
git push origin main
```

### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section (in left sidebar)
4. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### 5. Wait for Deployment

- GitHub will build your site (takes 1-2 minutes)
- You'll see a message: "Your site is ready to be published at..."
- After deployment, it will change to: "Your site is live at..."

### 6. Update URLs in Project

Once deployed, update these files with your actual URL:

**README.md**:
```markdown
**Live Demo**: https://YOUR_USERNAME.github.io/step1-conditions
```

**Optional: Add custom domain** (if you have one):
- Create `CNAME` file in root with your domain
- Configure DNS settings at your domain provider

---

## 🔗 Your URLs After Deployment

- **Landing Page**: `https://rivirside.github.io/step1/`
- **Conditions**: `https://rivirside.github.io/step1/conditions/`
- **Medications**: `https://rivirside.github.io/step1/medications/index-v2.html`

---

## 🧪 Testing After Deployment

Visit each URL and verify:

1. **Landing Page**
   - [ ] Page loads with gradient background
   - [ ] Three explorer cards visible
   - [ ] Links work when clicked

2. **Conditions Explorer**
   - [ ] Tree sidebar loads on left
   - [ ] Blue theme applied
   - [ ] Can expand systems
   - [ ] Search works
   - [ ] Header navigation to medications works

3. **Medications Explorer**
   - [ ] Tree sidebar loads on left
   - [ ] Purple theme applied
   - [ ] Can expand systems → classes → drugs
   - [ ] Search works
   - [ ] Header navigation to conditions works

4. **Navigation Between Explorers**
   - [ ] Click "Medications" button in Conditions → Goes to Medications
   - [ ] Click "Conditions" button in Medications → Goes to Conditions
   - [ ] Active button highlights correctly

---

## 🐛 Troubleshooting

### Issue: 404 Error on GitHub Pages

**Solution**: Make sure you:
- Selected `main` branch (not `master`)
- Selected `/ (root)` folder
- Waited 1-2 minutes after enabling Pages

### Issue: CSS/JS Not Loading

**Problem**: Hardcoded absolute paths
**Solution**: Already fixed! All paths are relative (e.g., `./conditions/`, `../shared/`)

### Issue: Navigation Between Explorers Not Working

**Problem**: Wrong URLs in explorer-navigation.js
**Solution**: Already fixed! URLs use `getBasePath()` for relative navigation

### Issue: Links Point to Wrong Place

**Check**:
```bash
# Make sure all links are relative
grep -r "http://localhost" .
# Should return nothing (or only in documentation)
```

---

## 📝 Future Updates

### To Update Content:

```bash
# Make changes to files
# Then:
git add .
git commit -m "Add new conditions/medications"
git push

# GitHub Pages will auto-redeploy in 1-2 minutes
```

### To Add Phase 4 Features:

After implementing cross-platform linking:
```bash
git add .
git commit -m "Phase 4: Add cross-platform linking with tooltips"
git push
```

---

## 🔒 Security Notes

### Safe to Commit:
- ✅ All HTML/CSS/JS files
- ✅ JSON data files
- ✅ Documentation (README, etc.)
- ✅ Images/assets

### Never Commit:
- ❌ `.env` files (if you add any)
- ❌ API keys or secrets
- ❌ Large binary files (>100MB)
- ❌ Personal information

**Note**: Our `.gitignore` already covers macOS files, IDE settings, and common temporary files.

---

## 📊 GitHub Pages Limits

- **Storage**: 1 GB
- **Bandwidth**: 100 GB/month
- **Build Time**: 10 minutes max

**Current Project Size**: ~2MB (well within limits)

---

## 🎉 Success!

Once deployed, share your link:
- **Reddit**: r/medicalschool, r/step1
- **Discord**: Medical student servers
- **Twitter/X**: #MedTwitter, #USMLE
- **Ko-fi**: https://ko-fi.com/rivir

---

## ⚡ Performance Optimization (Optional)

Already implemented:
- ✅ Minified CSS (via design tokens)
- ✅ ES6 modules (lazy loading)
- ✅ No external dependencies

Future improvements:
- [ ] Service worker for offline access
- [ ] Compress images (if added)
- [ ] CDN for fonts (already using Google Fonts CDN)

---

## 📞 Need Help?

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Issues**: Open an issue on your repo
- **Troubleshooting**: Check browser console (F12)

---

**Ready to deploy!** 🚀

Just follow steps 1-6 above and your project will be live!
