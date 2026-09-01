# Component — Account Menu

**Purpose**
The product's only global navigation.

**Used on**
Every authenticated screen, via the header.

**Variants**
None.

**States**
Closed · open.

**Interactions**
Opens on click. Escape, an outside click, or selecting an item closes it. Focus returns to the trigger. Items: Account and profile → `/account`; Insights → `/insights` (hint "Org and you"); Log out → session cleared, back to Sign in.

**Important visual rules**
- Trigger: 28px initials square, name at 13px, small chevron, inside a 1px hairline box that darkens on hover and while open.
- Content: 250px, 1px hairline, menu shadow, header block (name / email / spaces), then three items separated by 1px `#F2F2F2`.
- Log out is the only accent-coloured item.

---

Tokens: `../../DESIGN_TOKENS.md` · Full component set: `../../COMPONENTS.md` ·
Interaction model: `../../INTERACTIONS.md`
