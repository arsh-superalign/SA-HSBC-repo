# Component — App Shell

**Purpose**
Wraps every authenticated screen: the accent rule, the header, the conditional sidebar and the main region.

**Used on**
Chat, Browse by facet, Page detail, Insights, Account and profile.

**Variants**
With sidebar (Chat only) · without sidebar (every other screen).

**States**
Sidebar expanded · collapsed to rail · presented as a sheet (below 1024px).

**Interactions**
The collapse control toggles the sidebar and is **hidden entirely** when there is no sidebar to toggle, so it is never a dead control.

**Important visual rules**
- 4px accent rule above the header, full width, always.
- Header 60px, `#FFFFFF`, 1px bottom `#D9D9D9`. It holds only the collapse control, the wordmark and the account button.
- **Never render a top-level tab bar.** The account dropdown is the only global navigation.
- Surrounding canvas is `#F2F2F2`; the main region is `#FFFFFF`.

---

Tokens: `../../DESIGN_TOKENS.md` · Full component set: `../../COMPONENTS.md` ·
Interaction model: `../../INTERACTIONS.md`
