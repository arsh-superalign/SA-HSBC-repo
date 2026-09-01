# Component — Conversation Sidebar

**Purpose**
The history. There is no separate history screen.

**Used on**
Chat only.

**Variants**
Expanded 272px · collapsed rail 70px (see `../sidebar-rail/`) · sheet 288px below 1024px.

**States**
Populated · search filtered · search miss · no conversations.

**Interactions**
New conversation · search-as-you-type · select (restores the thread) · delete (toasts) · footer navigation.

**Important visual rules**
- Three regions: fixed top block, scrolling list, fixed footer.
- Section overline "CONVERSATIONS" at 11px, 0.08em, `#999999`.
- Footer holds Browse by facet and Account and profile. **Clear all history does not live here** — it is on the Account screen, so a destructive action is never one stray click from the list.
- Row: 6px outcome dot + a single truncated title (max 196px) + delete ✕. **No timestamp, no second line.**
- Active row: 3px `#B0132B` left marker, `#F8F8F8` fill, `#000000` title.
- Outcome dots: answered `#1B6B3A` · no answer `#8A5A00` · refused `#B0132B` · not asked `#CCCCCC`.

---

Tokens: `../../DESIGN_TOKENS.md` · Full component set: `../../COMPONENTS.md` ·
Interaction model: `../../INTERACTIONS.md`
