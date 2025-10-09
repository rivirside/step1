# Step 1 Drug Review

An interactive pharmacology navigator for USMLE Step 1 prep. This single-page app turns a dense drug database into a guided learning experience with layered navigation, rich search, and compare tooling.

## Why it exists
- Organizes high-yield drugs by the way they’re learned: body system → therapeutic goal → pharmacologic class → individual agent.
- Couples textual knowledge (mechanisms, indications, contraindications, interactions) with interface affordances that accelerate lookups.
- Provides quick context shifts—search, reference drill-down, tag-triggered filters—without losing your place.

## Features
- **Reference & Learning views:** Start in Reference View (outline + detail pane) or swap to Learning View (three-column progression) to study in the order you encounter material.
- **Deep search with tag shortcuts:** Search by drug, indication, contraindication, side effect, mechanism, class, or system. Clicking any tag in cards triggers the appropriate filtered search.
- **Compare workspace:** Queue drugs from anywhere and open a side-by-side detail layout with shared structure for rapid differentiation.
- **Context-aware cards:** Each card surfaces the agent’s choice pearls, indications, contraindications, side effects, and interaction highlights. Expand icons toggle granular details.
- **UX polish:** Fade-in animations smooth card rendering across navigation, search, both views, and compare mode. Tag highlights, accessible button labels, and pointer-driven column resizing improve usability.
- **Analytics-ready:** Queued Google Analytics events fire once the `gtag` helper is ready, covering navigation flow, search usage, comparison toggles, and tag filters.

## Getting started
1. Open `index.html` in any modern browser. No build steps required.
2. Use the header buttons to:
   - Toggle between Reference and Learning layouts (the button label shows the view you’ll switch into).
   - Launch the full-text/search-driven interface (`Search` button).
   - Open the comparison workspace once at least one drug is queued (`Compare Items` button).
   - Read project context from the info modal (`?` button).
3. Explore—from the default Reference View, tap systems on the left and drill into cards on the right. When you need a stepwise walkthrough, switch to Learning View and move across the columns to reinforce sequencing.
4. **Study drill:** Use Learning View as a blank outline—hide the app, rebuild a system → therapeutic class → pharmacologic class → drug path from memory, then flip back to Reference View to check your work.

## Working with search & filters
- The search view offers radio toggles for drug name, indication, contraindication, side effect, mechanism, class, and system queries.
- The “Show Indication Browser” button reveals an alphabetized tag wall for quick browsing of common indications.
- Any tag rendered in cards (system, class, indication, contraindication, side effect, interaction, mechanism) is clickable and routes through the appropriate `searchBy*` helper.
- Results undergo fade-in animations for readability; clicking a result card restores the navigation layout and focuses the selected drug.

## Compare workflow
- Add drugs using the `Compare` button in Learning View navigation, Reference View detail cards, or search/grid results.
- The header tracks the queue size; opening compare view lays out each drug in a dedicated column with consistent sectioning (mechanism, key features, clinical choice, indications, contraindications, side effects, interactions).
- Click any tag inside compare view to jump back into filtered search without clearing the comparison list.

## Data model
Drug content is defined entirely in `script.js` as a nested object:

```javascript
const drugData = [
  {
    system: 'Autonomic Nervous System',
    therapeutic_classes: [
      {
        name: 'Cholinergic Agonists',
        pharma_classes: [
          {
            name: 'Direct Muscarinic Agonists',
            mechanism: '...',
            side_effects: ['Bradycardia', 'Bronchoconstriction'],
            interactions: 'Anticholinergics antagonize effects.',
            interaction_explanation: 'Optional, richer context.',
            drugs: [
              {
                name: 'Bethanechol',
                features: 'Selective for M3 receptors.',
                choice: 'Postoperative urinary retention.',
                indications: ['Urinary Retention'],
                contraindications: ['Asthma']
              }
            ]
          }
        ]
      }
    ]
  }
];
```

Adjusting copy or adding agents involves editing these nested arrays. After changes, reload the page—no compilation step needed.

## Project structure
- `index.html` — Shell markup, header controls, modal copy, analytics bootstrap.
- `styles.css` — Layout, typography, modal styling, learning/reference view rules, card aesthetics, fade-in animations, compare layout.
- `script.js` — Data source plus the full interactive layer (navigation rendering, search, compare logic, analytics queue).
- `STEP1_DRUG_MIND_MAP.md` — Pedagogical outline that guided the interface structure.

## Analytics notes
- Google Analytics is wired via `G-KF6YN63LWH`.
- Events are buffered until `gtag` becomes available (`analyticsQueue` + `flushAnalyticsQueue` helpers).
- To disable analytics during local hacking, remove the `<script async …>` in `index.html` or override `window.Step1Analytics`.

## Roadmap ideas
Borrowed from the in-app info modal:
- 🧭 Bugs Navigator for pathogen/antimicrobial cross-referencing.
- 🧪 Mechanism-first pathways layered on the existing data.
- 📊 Smarter comparisons, including adverse-effect clustering.

## Contributing & feedback
- This repo has no build tooling—open `index.html` directly and iterate.
- Keep changes ASCII unless the UI already calls for special characters.
- Drop feedback or requests via Ko-fi (`Support` button) or open issues once the repository is public.

Happy studying!
