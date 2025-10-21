# Quick Start Guide - Step 1 Medical Explorers

**Status**: Phase 3 Complete + UI Simplified ✅
**Ready for**: User Acceptance Testing

## Recent Update (2025-10-20)
✅ **Medications UI simplified** - Now matches Conditions explorer with fast sidebar navigation
✅ **Removed learning/reference view toggle** - Simpler, single view
✅ **Much better performance** - No more lag!
✅ **Consistent UX** - Both explorers now have identical navigation patterns

---

## Project Structure

Everything is in **one unified project**:
```
/Users/rivir/Documents/GitHub/step1-conditions/
├── conditions/          # Conditions Explorer (Blue Theme)
├── medications/         # Medications Explorer (Purple Theme)
└── shared/             # Shared Design System
    ├── design-tokens.css
    ├── navigation.css
    ├── components.css
    ├── themes.css
    └── explorer-navigation.js
```

---

## Start the Server

**IMPORTANT**: Always start from the parent directory so both explorers can access `/shared/`

```bash
cd /Users/rivir/Documents/GitHub/step1-conditions
python3 -m http.server 8765
```

---

## Open in Browser

- **Medications (Purple Theme)**: http://localhost:8765/medications/index-v2.html ✅
- **Conditions (Blue Theme)**: http://localhost:8765/conditions/index.html ✅
- **Original medications** (for comparison): http://localhost:8765/medications/index.html
- **DataLoader test suite**: http://localhost:8765/medications/test-data-loader.html

**Header navigation now works correctly** - clicking toggle buttons will navigate between explorers!

---

## What to Test

### ✅ Navigation
- [ ] All 16 systems load
- [ ] Toggle between Reference and Learning views
- [ ] Navigate: system → therapeutic class → pharmacologic class → drug
- [ ] Breadcrumb navigation works

### ✅ Drug Information
- [ ] All drug cards display correctly
- [ ] Mechanism, features, clinical choice shown
- [ ] Indications/contraindications/side effects display as tags
- [ ] Expand/collapse details button works

### ✅ Search (8 types)
- [ ] Drug name
- [ ] Indication
- [ ] Contraindication
- [ ] Side effect
- [ ] Mechanism
- [ ] Class
- [ ] System
- [ ] Indication browser

### ✅ Compare Mode
- [ ] Add drugs to comparison
- [ ] Compare button shows count
- [ ] Side-by-side view displays correctly
- [ ] Return to navigation works

### ✅ Tag Interactions
- [ ] Clicking any tag filters search results
- [ ] Tag colors consistent

### ✅ Performance
- [ ] Page loads quickly
- [ ] Search is fast
- [ ] No lag when navigating
- [ ] **Check browser console** (F12) - should see: "✓ Built nested structure: 16 systems ready"
- [ ] No console errors

---

## Verify Data Integrity

### Quick Stats Check
```bash
cat /Users/rivir/Documents/GitHub/step1-conditions/medications/data/modularization-stats.json | python3 -m json.tool
```

**Expected Output**:
- Systems: 16
- Classes: 227 (60 therapeutic + 167 pharmacologic)
- Drugs: 385

### Run Automated Tests
```bash
node /tmp/test-modular-platform.js
```

**Expected**: All 6 tests should pass ✅

---

## Project Documentation

### Executive Summaries
- `PHASE_1_AND_2_COMPLETE.md` - High-level overview
- `PHASE1_AND_2_SUMMARY.md` - Detailed breakdown

### Technical Documentation
- `INTEGRATION_ARCHITECTURE.md` - Complete architecture spec
- `UI_MIGRATION_PLAN.md` - Migration strategy
- `PHASE2_COMPLETE.md` - Phase 2 details
- `TESTING_REPORT.md` - Test results

### Location
All docs in: `/Users/rivir/Documents/GitHub/step1-conditions/`

---

## If Everything Works

Once you've verified all features work correctly:

1. **Approve for production** - Ready to replace original files
2. **Move to Phase 3** - Shared design system & integration
3. **Start cross-linking** - Connect conditions ↔ medications

---

## If You Find Issues

1. **Check browser console** (F12) for JavaScript errors
2. **Compare with original** at http://localhost:8765/index.html
3. **Easy rollback** - Original files intact:
   - `script-old.js` = backup of original script.js
   - `index.html` = original HTML

---

## Server Management

### Check Running Servers
```bash
lsof -ti:8765  # Medications
lsof -ti:8000  # Conditions
```

### Stop Server
```bash
# Find process ID
lsof -ti:8765

# Kill server
kill <PID>
```

---

## Next Steps (Phase 3)

After user acceptance testing passes:

1. **Create shared design system**
   - Extract CSS variables
   - Unified navigation header
   - Consistent styling

2. **Implement cross-linking**
   - Generate preview JSONs
   - Tooltip system
   - Bidirectional navigation

3. **Performance optimization**
   - Lazy loading
   - Service worker caching
   - Remove backward compatibility adapter

---

## Key Achievements ✅

- **385 drugs** modularized across **16 systems**
- **0 data loss** (verified algorithmically)
- **0 breaking changes** (100% feature parity)
- **Same architecture** as conditions platform
- **All tests passing**
- **Ready for integration**

---

## Quick Commands

```bash
# Start medications
cd /Users/rivir/Documents/GitHub/step1-conditions/medications && python3 -m http.server 8765

# Start conditions
cd /Users/rivir/Documents/GitHub/step1-conditions/conditions && python3 server.py

# Run tests
node /tmp/test-modular-platform.js

# Check stats
cat medications/data/modularization-stats.json | python3 -m json.tool

# Verify syntax
node -c medications/script-v2.js && node -c medications/data-loader.js
```

---

**Built with Claude Code**
**Status**: Ready for User Testing ✅
