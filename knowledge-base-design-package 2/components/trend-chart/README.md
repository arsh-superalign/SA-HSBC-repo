# Component — Trend Chart

**Purpose**
Asked / answered / unanswered over the period.

**Used on**
Insights.

**Variants**
Daily · Weekly.

**States**
Granularity switches all three series and the axis labels.

**Interactions**
The granularity toggle swaps the data.

**Important visual rules**
- Inline SVG, 840×200, `preserveAspectRatio="none"`. **No chart library.**
- Three baseline rules: `#E5E5E5` at the base, `#F2F2F2` above.
- Series differ by **dash pattern as well as colour**: asked dashed `#1A1A1A`, answered solid `#1B6B3A`, no answer dotted `#B0132B`.
- The legend mirrors those patterns, so the chart is readable without colour.

---

Tokens: `../../DESIGN_TOKENS.md` · Full component set: `../../COMPONENTS.md` ·
Interaction model: `../../INTERACTIONS.md`
