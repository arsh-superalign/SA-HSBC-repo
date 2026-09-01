# Component — Kpi Strip

**Purpose**
A row of metric tiles.

**Used on**
Insights (6 tiles). The same hairline-grid technique is reused for the readable-spaces counters on Account and the relationship counters on Page detail.

**Variants**
6-up (Insights) · 2-up (counters).

**States**
Delta up · delta down · no delta.

**Interactions**
None — read-only.

**Important visual rules**
- **The hairline grid:** `gap: 1px` over a `#D9D9D9` background inside a 1px `#D9D9D9` border. This gives exact 1px separators with no double borders. Reuse it for every metric strip.
- Label 12px uppercase 0.06em `#666666`; value 29px/1; delta 13px with a trend arrow — `#1B6B3A` up, `#B0132B` down.

---

Tokens: `../../DESIGN_TOKENS.md` · Full component set: `../../COMPONENTS.md` ·
Interaction model: `../../INTERACTIONS.md`
