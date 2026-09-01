# Component — Composer

**Purpose**
Ask a question or continue the conversation.

**Used on**
Chat only.

**Variants**
None.

**States**
Empty (send disabled) · has text (send enabled) · sending (spinner).

**Interactions**
Enter sends. Shift-Enter adds a line. The 36px button sends. Disabled while empty or sending.

**Important visual rules**
- A single-line field that grows, inside a 1px `#D9D9D9` shell at radius 2px.
- Send button: 36px accent-filled square with an up arrow; `#F8F8F8` fill and `#E5E5E5` border when disabled.
- One centred footnote beneath: "Answers come only from pages you can read".
- Placeholder: "Ask the wiki…".

---

Tokens: `../../DESIGN_TOKENS.md` · Full component set: `../../COMPONENTS.md` ·
Interaction model: `../../INTERACTIONS.md`
