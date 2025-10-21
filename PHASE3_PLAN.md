# PHASE 3: Shared Design System & Cross-Platform Integration

**Status**: Ready to Begin
**Prerequisites**: Phase 1 & 2 Complete ✅
**Estimated Time**: 2-3 days
**Goal**: Create unified visual experience and enable cross-linking between explorers

---

## Executive Summary

Phase 3 will extract common design patterns from both platforms into a shared design system, create a unified navigation header, and establish the foundation for cross-linking. This phase focuses on **visual consistency** and **navigation integration** without breaking any existing functionality.

---

## Objectives

1. ✅ **Extract CSS Variables** - Create shared design tokens (colors, typography, spacing)
2. ✅ **Unified Navigation Header** - Common header across all explorers with toggle buttons
3. ✅ **Visual Consistency** - Apply shared styles to both platforms
4. ✅ **Cross-Link Foundation** - Prepare for Phase 4 cross-referencing
5. ✅ **Zero Breaking Changes** - Maintain 100% feature parity

---

## Current State Analysis

### Conditions Platform
- **URL**: `http://localhost:8000`
- **Header**: Dark (#2c3e50) with search box
- **Layout**: Sidebar + detail panel
- **Style**: Tree-based navigation with nodes
- **Colors**: Blue primary (#3498db), severity indicators (red/orange/green)

### Medications Platform
- **URL**: `http://localhost:8765/index-v2.html`
- **Header**: White (#ffffff) with navigation + search + buttons
- **Layout**: Multi-column cascade OR search view
- **Style**: Card-based with tags
- **Colors**: Blue primary (#3498db), tag colors (system/class/indication/side-effect)

### Common Patterns Identified

Both platforms share:
- ✅ Same primary blue (#3498db)
- ✅ Similar font families (system fonts)
- ✅ Card-based detail displays
- ✅ Tag/badge systems
- ✅ Modal dialogs
- ✅ Responsive design principles
- ✅ Transition animations

### Differences to Reconcile

| Aspect | Conditions | Medications | Resolution |
|--------|-----------|-------------|------------|
| Header background | Dark (#2c3e50) | White (#ffffff) | → Unified white header with explorer toggle |
| Navigation style | Tree/sidebar | Multi-column cascade | → Keep both, add platform switcher |
| Font family | System fonts | Inter + system fonts | → Standardize on Inter with system fallback |
| Spacing | Moderate | Generous | → Create consistent spacing scale |
| Border radius | 4px/8px | 5px/6px/8px/10px/12px | → Standardize: 4px/8px/12px |

---

## Implementation Plan

### Step 1: Create Shared Design System (1 day)

#### 1.1 Create `shared/design-tokens.css`

Extract all common CSS variables:
- Color palette (primary, system colors, severity, acuity)
- Typography (font families, sizes, weights, line heights)
- Spacing scale (xs, sm, md, lg, xl, 2xl)
- Border radius (sm, md, lg, full)
- Shadows (sm, md, lg, xl)
- Transitions (fast, base, slow)
- Z-index layers (base, dropdown, sticky, modal, tooltip)

**File location**: `/Users/rivir/Documents/GitHub/step1-conditions/shared/design-tokens.css`

#### 1.2 Create `shared/navigation.css`

Unified navigation component:
```html
<header class="unified-header">
    <div class="explorer-toggle">
        <button class="toggle-btn active" data-explorer="conditions">Conditions</button>
        <button class="toggle-btn" data-explorer="medications">Medications</button>
        <button class="toggle-btn disabled" data-explorer="bugs">Bugs <span class="badge">Soon</span></button>
    </div>

    <div class="search-global">
        <input type="text" placeholder="Search...">
    </div>

    <div class="header-actions">
        <button class="icon-button" id="info-button">?</button>
        <a href="https://ko-fi.com/rivir" class="support-button">Support</a>
    </div>
</header>
```

**File location**: `/Users/rivir/Documents/GitHub/step1-conditions/shared/navigation.css`

#### 1.3 Create `shared/components.css`

Common component styles:
- Cards (drug-card, disease-card, category-card)
- Tags/badges (indication, side-effect, contraindication, severity, acuity)
- Buttons (primary, secondary, icon-button)
- Modals/dialogs
- Tooltips (for Phase 4)
- Loading states

**File location**: `/Users/rivir/Documents/GitHub/step1-conditions/shared/components.css`

---

### Step 2: Apply Shared Styles to Conditions (0.5 days)

#### 2.1 Update `conditions/index.html`

Add imports:
```html
<link rel="stylesheet" href="../shared/design-tokens.css">
<link rel="stylesheet" href="../shared/navigation.css">
<link rel="stylesheet" href="../shared/components.css">
<link rel="stylesheet" href="styles.css">
```

#### 2.2 Update `conditions/styles.css`

- Remove duplicate CSS variables (use shared tokens)
- Remove duplicate component styles (use shared components)
- Keep platform-specific styles (tree navigation, sidebar layout)
- Replace hardcoded colors with CSS variables

#### 2.3 Update `conditions/script.js`

- No breaking changes
- Maintain all functionality
- Add explorer toggle button handlers

---

### Step 3: Apply Shared Styles to Medications (0.5 days)

#### 3.1 Update `medications/index-v2.html`

Add imports:
```html
<link rel="stylesheet" href="../shared/design-tokens.css">
<link rel="stylesheet" href="../shared/navigation.css">
<link rel="stylesheet" href="../shared/components.css">
<link rel="stylesheet" href="styles.css">
```

#### 3.2 Update `medications/styles.css`

- Remove duplicate CSS variables (use shared tokens)
- Remove duplicate component styles (use shared components)
- Keep platform-specific styles (cascade navigation, multi-column layout)
- Replace hardcoded colors with CSS variables

#### 3.3 Update `medications/script-v2.js`

- No breaking changes
- Maintain all functionality
- Add explorer toggle button handlers

---

### Step 4: Create Navigation Integration (0.5 days)

#### 4.1 Create `shared/explorer-navigation.js`

Handles switching between explorers:
```javascript
class ExplorerNavigation {
    constructor(currentExplorer) {
        this.current = currentExplorer; // 'conditions' | 'medications' | 'bugs'
        this.baseUrls = {
            conditions: 'http://localhost:8000',
            medications: 'http://localhost:8765/index-v2.html',
            bugs: '#' // future
        };
        this.init();
    }

    init() {
        this.updateActiveButton();
        this.attachListeners();
    }

    updateActiveButton() {
        document.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.explorer === this.current);
        });
    }

    attachListeners() {
        document.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const explorer = e.target.dataset.explorer;
                if (explorer !== this.current && !e.target.classList.contains('disabled')) {
                    this.navigate(explorer);
                }
            });
        });
    }

    navigate(explorer) {
        window.location.href = this.baseUrls[explorer];
    }
}

// Export for ES6 modules
export default ExplorerNavigation;
```

**File location**: `/Users/rivir/Documents/GitHub/step1-conditions/shared/explorer-navigation.js`

#### 4.2 Integrate into Both Platforms

Conditions platform (`conditions/script.js`):
```javascript
import ExplorerNavigation from '../shared/explorer-navigation.js';

// Initialize explorer navigation
const explorerNav = new ExplorerNavigation('conditions');
```

Medications platform (`medications/script-v2.js`):
```javascript
import ExplorerNavigation from '../shared/explorer-navigation.js';

// Initialize explorer navigation
const explorerNav = new ExplorerNavigation('medications');
```

---

### Step 5: Testing & Validation (0.5 days)

#### 5.1 Visual Consistency Check
- [ ] Both platforms use same header design
- [ ] Colors are consistent across platforms
- [ ] Typography matches (fonts, sizes, weights)
- [ ] Spacing is uniform
- [ ] Buttons and tags have same styling
- [ ] Modals have same appearance
- [ ] Transitions/animations are consistent

#### 5.2 Functionality Testing
- [ ] All conditions features still work
- [ ] All medications features still work
- [ ] Explorer toggle buttons work
- [ ] Navigation between platforms works
- [ ] Search functionality intact on both
- [ ] No console errors
- [ ] Mobile responsive on both

#### 5.3 Performance Testing
- [ ] No degradation in load times
- [ ] CSS file sizes reasonable
- [ ] No duplicate CSS being loaded

---

## File Structure After Phase 3

```
step1-conditions/
├── shared/
│   ├── design-tokens.css         ✅ NEW - CSS variables
│   ├── navigation.css            ✅ NEW - Unified header
│   ├── components.css            ✅ NEW - Shared components
│   └── explorer-navigation.js    ✅ NEW - Platform switching logic
│
├── conditions/
│   ├── index.html                🔄 UPDATED - Import shared CSS
│   ├── styles.css                🔄 UPDATED - Remove duplicates
│   ├── script.js                 🔄 UPDATED - Add explorer nav
│   ├── data-loader.js            ✅ No changes
│   └── data/                     ✅ No changes
│
├── medications/
│   ├── index-v2.html             🔄 UPDATED - Import shared CSS
│   ├── styles.css                🔄 UPDATED - Remove duplicates
│   ├── script-v2.js              🔄 UPDATED - Add explorer nav
│   ├── data-loader.js            ✅ No changes
│   └── data/                     ✅ No changes
│
└── bugs/                         ⏸️  Future (Phase 6)
```

---

## Design Token Specification

### Color Palette

```css
:root {
    /* Primary */
    --color-primary: #3498db;
    --color-primary-dark: #2980b9;
    --color-primary-light: #5dade2;

    /* Neutrals */
    --color-bg-primary: #ffffff;
    --color-bg-secondary: #f4f7f9;
    --color-bg-tertiary: #ecf0f1;
    --color-text-primary: #2c3e50;
    --color-text-secondary: #34495e;
    --color-text-tertiary: #7f8c8d;
    --color-border: #e0e0e0;

    /* System Colors */
    --system-cardiovascular: #e74c3c;
    --system-respiratory: #3498db;
    --system-gastrointestinal: #f39c12;
    --system-nervous: #9b59b6;
    --system-renal: #1abc9c;
    --system-endocrine: #e91e63;
    --system-psychiatry: #27ae60;

    /* Severity */
    --severity-high: #e74c3c;
    --severity-medium: #f39c12;
    --severity-low: #27ae60;

    /* Acuity */
    --acuity-acute: #e74c3c;
    --acuity-chronic: #9b59b6;

    /* Tag Colors */
    --tag-indication: #fdf2e9;
    --tag-indication-text: #e67e22;
    --tag-contraindication: #fff3cd;
    --tag-contraindication-text: #856404;
    --tag-side-effect: #fdedec;
    --tag-side-effect-text: #e74c3c;
    --tag-mechanism: #fef9e7;
    --tag-mechanism-text: #f39c12;
    --tag-class: #f0f9e8;
    --tag-class-text: #27ae60;
    --tag-system: #e8f4fd;
    --tag-system-text: #2980b9;

    /* Status */
    --status-success: #27ae60;
    --status-warning: #f39c12;
    --status-error: #e74c3c;
    --status-info: #3498db;
}
```

### Typography

```css
:root {
    /* Font Families */
    --font-family-base: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    --font-family-mono: 'Consolas', 'Monaco', 'Courier New', monospace;

    /* Font Sizes */
    --font-size-xs: 0.75rem;    /* 12px */
    --font-size-sm: 0.875rem;   /* 14px */
    --font-size-base: 1rem;     /* 16px */
    --font-size-lg: 1.125rem;   /* 18px */
    --font-size-xl: 1.25rem;    /* 20px */
    --font-size-2xl: 1.5rem;    /* 24px */
    --font-size-3xl: 1.875rem;  /* 30px */
    --font-size-4xl: 2rem;      /* 32px */

    /* Font Weights */
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;

    /* Line Heights */
    --line-height-tight: 1.4;
    --line-height-base: 1.6;
    --line-height-relaxed: 1.8;
}
```

### Spacing

```css
:root {
    --space-xs: 0.25rem;   /* 4px */
    --space-sm: 0.5rem;    /* 8px */
    --space-md: 1rem;      /* 16px */
    --space-lg: 1.5rem;    /* 24px */
    --space-xl: 2rem;      /* 32px */
    --space-2xl: 3rem;     /* 48px */
}
```

### Layout

```css
:root {
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-full: 9999px;

    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 2px 8px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 4px 16px rgba(0, 0, 0, 0.12);
    --shadow-xl: 0 8px 24px rgba(0, 0, 0, 0.15);

    /* Transitions */
    --transition-fast: 150ms ease;
    --transition-base: 200ms ease;
    --transition-slow: 300ms ease;

    /* Z-index Layers */
    --z-base: 1;
    --z-dropdown: 100;
    --z-sticky: 200;
    --z-modal: 1000;
    --z-tooltip: 2000;
}
```

---

## Migration Strategy

### Principle: Zero Breaking Changes

Every change must preserve existing functionality. The shared design system is **additive**, not **replacement**.

### Approach

1. **Extract** common patterns into shared files
2. **Import** shared files into both platforms
3. **Replace** hardcoded values with CSS variables
4. **Remove** duplicate styles
5. **Test** each platform independently
6. **Validate** visual consistency

### Rollback Plan

If any issues arise:
- Keep original CSS files as backups (`styles-old.css`)
- Easy to restore by removing shared imports
- No data changes, only styling

---

## Success Criteria

### Visual Unity ✅
- [ ] Both platforms have identical header design
- [ ] Color palette is consistent
- [ ] Typography matches across platforms
- [ ] Buttons, tags, and badges look the same
- [ ] Spacing and layout feel unified

### Functional Integrity ✅
- [ ] All conditions features work unchanged
- [ ] All medications features work unchanged
- [ ] Explorer toggle switches platforms correctly
- [ ] No console errors
- [ ] No performance degradation

### Code Quality ✅
- [ ] CSS is DRY (no duplication)
- [ ] Shared files are well-organized
- [ ] Variable names are semantic
- [ ] Comments explain design decisions
- [ ] Code is maintainable

---

## Phase 4 Preview: Cross-Linking

Phase 3 sets the foundation for Phase 4, which will add:

1. **Preview JSONs**: Generate medication-previews.json and condition-previews.json
2. **Tooltip System**: Hover over drug/condition names to see preview
3. **Bidirectional Links**:
   - Conditions → Medications (treatment links)
   - Medications → Conditions (indication links)
4. **Context Preservation**: URL parameters track navigation path
5. **Breadcrumbs**: Show full cross-explorer journey

Phase 4 depends on Phase 3's unified navigation and design system.

---

## Timeline

| Task | Duration | Deliverable |
|------|----------|-------------|
| Create shared design tokens | 2 hours | `shared/design-tokens.css` |
| Create shared navigation | 2 hours | `shared/navigation.css` |
| Create shared components | 2 hours | `shared/components.css` |
| Create navigation JS | 1 hour | `shared/explorer-navigation.js` |
| Apply to conditions platform | 3 hours | Updated conditions files |
| Apply to medications platform | 3 hours | Updated medications files |
| Testing & validation | 4 hours | Test checklist complete |
| Documentation | 1 hour | Phase 3 summary doc |
| **Total** | **18 hours** | **~2-3 days** |

---

## Next Steps

1. **User approval** - Review this plan and approve to proceed
2. **Create shared files** - Build design-tokens.css, navigation.css, components.css
3. **Apply to conditions** - Update conditions platform with shared styles
4. **Apply to medications** - Update medications platform with shared styles
5. **Test thoroughly** - Ensure zero breaking changes
6. **Document results** - Create Phase 3 completion summary

---

## Questions for User

Before proceeding, please confirm:

1. ✅ **Header design**: Should we use white header (medications style) or dark header (conditions style)?
   - **Recommendation**: White header for modern, clean look

2. ✅ **Font**: Should we standardize on Inter or keep system fonts?
   - **Recommendation**: Inter with system font fallback

3. ✅ **Explorer URLs**: Are current localhost URLs correct for production?
   - **Recommendation**: Keep as-is for now, update for production deployment

4. ✅ **Breaking changes tolerance**: Confirm zero tolerance for breaking changes?
   - **Recommendation**: Maintain 100% feature parity

---

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| CSS conflicts | Medium | Medium | Test incrementally, use specific selectors |
| Performance degradation | Low | Medium | Minimize CSS size, lazy load if needed |
| Browser compatibility | Low | Low | Use standard CSS, test in major browsers |
| Breaking functionality | Low | High | Extensive testing, easy rollback |

---

**Status**: ✅ READY TO BEGIN
**Next Phase**: Phase 4 - Cross-Linking & Integration

Built with Claude Code
Date: October 20, 2025
