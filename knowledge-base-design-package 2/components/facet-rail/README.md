# Component — Facet Rail

**Purpose**
Choose one value per classification axis.

**Used on**
Browse by facet.

**Variants**
None.

**States**
Value selected · unselected · hover.

**Interactions**
Toggling; selecting a second value in a group replaces the first. `aria-pressed` reflects state.

**Important visual rules**
- Group name as an 11px uppercase overline, `#666666`.
- Selected: `#F8F8F8` fill, 3px `#B0132B` left marker, `#000000` text. Unselected: transparent marker, `#4D4D4D` text.
- **"None of these" is a real value, listed last in every group.** It is not an empty state and must not be styled as one.
- Paired with active filter chips above the results: each chip's ✕ clears that group only, and the live result count sits at the right end.

---

Tokens: `../../DESIGN_TOKENS.md` · Full component set: `../../COMPONENTS.md` ·
Interaction model: `../../INTERACTIONS.md`
