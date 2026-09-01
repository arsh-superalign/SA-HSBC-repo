# Component — Chat Thread

**Purpose**
The conversation: question turns, answer turns and the loading turn.

**Used on**
Chat only.

**Variants**
Empty conversation · populated · sending.

**States**
See `../../states/README.md` → Conversation states and Answer states.

**Interactions**
Scrolls to the newest turn on change. Answer sub-interactions are Show more / Show less and the trace disclosure.

**Important visual rules**
- One centred 720px column. Turns separated by **32px of rhythm, never by rules**.
- **Question turn:** right-aligned, max-width 72%, `#F2F2F2` fill, 1px `#E5E5E5`, 12px 16px padding, 16px/1.5. **No "You" caption** — containment and alignment carry the distinction.
- **Answer turn:** no container. 16px/1.7 prose at full column width behind a 22px solid accent square. **No card, no border, no "Answer" caption, no status chip.**
- The three answer variants must not look alike:
  - **Answered** — plain prose, then source pills.
  - **No answer** — one warning-glyphed sentence, then a hairline list of returned links, then actions.
  - **Refused** — a filled `#1A1A1A` block. No list: nothing was searched, and that absence is the message.
- Withheld links render "— title withheld —" in `#808080`. **Never** a title, breadcrumb or excerpt.
- **Loading turn** is answer-shaped: three pulsing bars at 86% / 94% / 62% behind the accent mark, so the arriving answer does not shift the layout. `role="status"`.

---

Tokens: `../../DESIGN_TOKENS.md` · Full component set: `../../COMPONENTS.md` ·
Interaction model: `../../INTERACTIONS.md`
