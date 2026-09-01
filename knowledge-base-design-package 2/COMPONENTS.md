# Components

Patterns that repeat across the prototype. A component is listed here only because it is
genuinely reused or represents a clear product rule — not for the sake of abstraction.

Screen-specific pieces are marked **screen-specific**; everything else is shared.

---

## App shell — shared

**Purpose** Wraps every authenticated screen: the accent rule, the header, the conditional
sidebar, and the main region.

**Used on** Chat, Browse by facet, Page detail, Insights, Account and profile.

**Variants** With sidebar (Chat only) · without sidebar (everything else).

**States** Sidebar expanded · sidebar collapsed to rail · sidebar as sheet (below 1024px).

**Interactions** The collapse control toggles the sidebar; it is hidden entirely when there is
no sidebar to toggle.

**Visual rules**
- 4px accent rule sits above the header, full width, always.
- Header is 60px, white, 1px bottom hairline, and holds only the collapse control, the
  wordmark and the account button.
- Main region is #FFFFFF on Chat and #FFFFFF elsewhere; the surrounding canvas is #F2F2F2.
- **Never render a top-level tab bar.** The account dropdown is the only global navigation.

---

## Wordmark — shared

**Purpose** Product mark and home link.

**Used on** App header (20px square), Sign in brand panel (26px square), Chat empty state
(26px square, decorative).

**Visual rules** A solid #B0132B square plus "KNOWLEDGE" in uppercase at 0.2em letter-spacing.
No logo asset — nothing to load, nothing to license.

---

## Account menu — shared

**Purpose** The product's only global navigation.

**Used on** Every authenticated screen, via the header.

**States** Closed · open.

**Interactions** Opens on click. Escape, an outside click, or selecting an item closes it.
Focus returns to the trigger.

**Visual rules**
- Trigger: 28px initials square, the user's name at 13px, a small chevron, inside a 1px
  hairline box that darkens on hover and while open.
- Content: 250px, 1px hairline, menu shadow, a header block with name / email / spaces, then
  three items separated by 1px #F2F2F2.
- Log out is the only accent-coloured item.

---

## Conversation sidebar — screen-specific (Chat)

**Purpose** The history. There is no separate history screen.

**Variants** Expanded 272px · collapsed rail 70px · sheet (below 1024px).

**States** Populated · search filtered · search miss · no conversations.

**Interactions** New conversation · search-as-you-type · select · delete · footer navigation.

**Visual rules**
- Three regions: a fixed top block, a scrolling list, a fixed footer.
- Section overline "CONVERSATIONS" at 11px, 0.08em, #999999.
- Footer holds Browse by facet and Account and profile. **Clear all history does not live
  here** — it is on the Account screen, so a destructive action is never one stray click from
  the conversation list.

---

## Conversation row — screen-specific (Chat sidebar)

**Purpose** One conversation in the list.

**States** Default · active · hover.

**Interactions** Click selects and restores the thread; the ✕ deletes with a toast.

**Visual rules**
- A 6px outcome dot, then a single truncated title (max 196px). **No timestamp, no second
  line** — both were removed as noise.
- Active: 3px #B0132B left marker, #F8F8F8 fill, #000000 title.
- Dot colours: answered #1B6B3A · no answer #8A5A00 · refused #B0132B · not asked #CCCCCC.

---

## Sidebar rail — screen-specific (Chat)

**Purpose** The collapsed sidebar. Keeps the same capabilities in 70px.

**Interactions** New conversation · search (re-expands the sidebar, since there is no room to
type) · the five most recent conversations as initials · Browse by facet · Insights.

**Visual rules** Every control is a 38px square and **every control has a tooltip** — the
label is the only thing the collapse removed, so it must be recoverable.

---

## Chat thread — screen-specific (Chat)

**Purpose** The conversation itself.

**Variants** Empty conversation · populated · sending.

**Visual rules** One centred 720px column. Turns are separated by 32px of rhythm, never by
rules. Scrolls to the newest turn on change.

---

## Question turn — screen-specific (Chat)

**Purpose** What the user asked.

**Visual rules** Right-aligned, max-width 72%, #F2F2F2 fill, 1px #E5E5E5 border, 12px 16px
padding, 16px/1.5 text. **No "You" caption.** The containment and alignment are what
distinguish it.

---

## Answer turn — screen-specific (Chat)

**Purpose** What came back. Three variants that must not look alike.

**Variants**

| Variant | Treatment |
|---|---|
| **Answered** | Unboxed 16px/1.7 prose at full column width, behind a 22px accent square. Then source pills. |
| **No answer** | One warning-glyphed sentence, then a hairline list of returned links, then Request access / Browse by facet. |
| **Refused** | A filled #1A1A1A block with a 19px white headline and a #CCCCCC sub, then a meta line with Service status / Retry. |

**States** Truncated (≤280 chars shown) · expanded · trace open · trace closed.

**Interactions** Show more / Show less; per-variant actions; trace disclosure.

**Visual rules**
- **No card, no border, no "Answer" caption, no status chip** on the answered variant. The
  accent mark is the only decoration.
- Withheld links render "— title withheld —" in #808080. Never a title, breadcrumb or excerpt.
- The refused block states what did *not* happen; there is no list, because nothing was
  searched. That absence is the message.

---

## Source pills — screen-specific (Chat)

**Purpose** Citations, compactly.

**Interactions** Each pill navigates to that page's detail view. The full title is a native
tooltip. The trace trigger sits at the right end of the same row.

**Visual rules** 1px #E5E5E5, max-width 230px, truncated, with a 10px monospace index digit.
The withheld count is plain amber text, not a badge.

---

## Trace disclosure — screen-specific (Chat)

**Purpose** Provenance: how the answer was found, and what the model added.

**States** Collapsed · expanded.

**Interactions** The trigger toggles. Each added term has a removable ✕.

**Visual rules** Six numbered steps with optional MODEL / PERM badges and durations, then the
term chips, then the closing line "The model can only add candidates — it can never remove
your wording." **That line is the point of the panel** — keep it last and keep it verbatim.

---

## Composer — screen-specific (Chat)

**Purpose** Ask a question or continue the conversation.

**States** Empty (send disabled) · has text (send enabled) · sending (spinner).

**Interactions** Enter sends; shift-Enter adds a line; the 36px button sends.

**Visual rules** A single-line field that grows inside a 1px hairline shell. The send button is
an accent-filled 36px square with an up arrow, greying to #F8F8F8 / #E5E5E5 when disabled. One
centred footnote beneath: "Answers come only from pages you can read".

---

## Loading turn — screen-specific (Chat)

**Purpose** The wait between question and answer.

**Visual rules** Answer-shaped: three pulsing bars at 86% / 94% / 62% width behind the accent
mark, so the arriving answer does not shift the layout. `role="status"`.

---

## Facet rail — screen-specific (Browse)

**Purpose** Choose one value per classification axis.

**States** Value selected · unselected · hover.

**Interactions** Toggling; selecting a second value in a group replaces the first.
`aria-pressed` reflects state.

**Visual rules** Group name as an 11px uppercase overline. Selected: #F8F8F8 fill, 3px
#B0132B left marker, #000000 text. **"None of these" is a real value, listed last** — never
styled as an empty state.

---

## Active filter chips — screen-specific (Browse)

**Purpose** Show and clear what is filtering the results.

**Interactions** The ✕ clears that group only. The live result count sits at the right end.

---

## Result card — screen-specific (Browse)

**Purpose** One readable page.

**Visual rules** Title 17px/500 (opens Page detail), breadcrumb 12px #808080, then facet tags.
**No excerpt** — no page body is stored, so there is nothing to excerpt. Open in wiki ↗ is
right-aligned on the title row.

---

## Page meta panels — screen-specific (Page detail)

**Purpose** Everything the service holds about a page.

**Parts** Facet table (value + RULE/MODEL badge + confidence) · parent pages (indented 16px
per level) · read-at-ingest list · relationship counters.

**Visual rules** RULE badges are neutral; MODEL badges are info-toned. "Page body — never
read" carries a ✕ in #808080, deliberately unlike the three ✓ rows above it.

---

## KPI strip — shared pattern

**Purpose** A row of metric tiles.

**Used on** Insights (6 tiles). The same hairline-grid technique is reused for the
readable-spaces counters on Account and the relationship counters on Page detail.

**Visual rules** `gap: 1px` over a #D9D9D9 background inside a 1px #D9D9D9 border — exact 1px
separators with no double borders. Label 12px uppercase 0.06em #666666; value 29px/1; delta
13px with a trend arrow, #1B6B3A up or #B0132B down.

---

## Trend chart — screen-specific (Insights)

**Purpose** Asked / answered / unanswered over the period.

**Interactions** The granularity toggle swaps all three series and the axis labels.

**Visual rules** Inline SVG, 840×200, no chart library. Three baseline rules. Series differ by
**dash pattern as well as colour**: asked dashed #1A1A1A, answered solid #1B6B3A, no answer
dotted #B0132B. The legend mirrors those patterns.

---

## Ranked list — shared

**Purpose** A short ordered list of questions or pages with counts.

**Used on** Insights ×3 (Most asked, Coverage gaps, Most cited pages).

**Variants** Interactive (rows ask the question) · read-only (Most cited pages) ·
**emphasis** (Coverage gaps).

**Visual rules** Monospace rank digit, question text, right-aligned count. The emphasis
variant takes a 3px #B0132B top border, an #EBC3C9 body border and accent-coloured counts —
**only Coverage gaps uses it**, because it is the list that drives action.

---

## Status text — shared

**Purpose** Communicate outcome.

**Visual rules** Every status pairs a **glyph and a word**: ✓ Answered · ! No answer ·
✕ Refused · – Not asked yet. Colour reinforces but never carries the meaning alone. In the
compact chat surfaces status is plain coloured text rather than a bordered chip; the bordered
chip form is reserved for the login alerts and the badge tones below.

| Tone | Text | Surface | Border | Glyph |
|---|---|---|---|---|
| success | #1B6B3A | #F2F8F4 | #BFD9C6 | ✓ |
| warning | #8A5A00 | #FBF7EE | #E6D3AE | ! |
| danger | #B0132B | #FCF3F4 | #EBC3C9 | ✕ |
| info | #0B3B60 | #F3F7FA | #C3D4E0 | i |
| neutral | #4D4D4D | #F8F8F8 | #D9D9D9 | – |

---

## Alert — shared

**Purpose** Form-level and panel-level messaging.

**Used on** Sign in (danger banner, success confirmation, SSO info).

**Visual rules** 1px tinted border with a 3px left edge in the tone colour, tinted background,
glyph plus copy at 14px. `role="alert"` for danger and warning; `role="status"` for success
and info.

---

## Button — shared

**Purpose** Actions.

**Variants**

| Variant | Treatment |
|---|---|
| primary | #B0132B fill and border, white text; #8C0F22 on hover |
| secondary | White fill, 1px #808080, #1A1A1A text; border darkens to #1A1A1A |
| outline | White fill, 1px #D9D9D9 — used for the header collapse control and rail buttons |
| destructive | White fill, #B0132B text, border darkens to #B0132B |
| link | Accent text, no chrome, underline on hover — the row-level action style |
| quiet | #808080 text becoming accent on hover — the trace trigger |

**Sizes** 36px (in-panel) · 42px (sidebar, toggles) · 44px (page actions) · 48px (login) ·
36px square (icon).

**States** Default · hover · active · focus (2px accent ring, 2px offset) · disabled ·
loading (spinner plus a progressive label).

**Visual rules** Radius 2px. **One primary per view.** Row-level actions are always `link`,
never buttons — a list of twelve buttons reads as noise.

---

## Field — shared

**Purpose** Text input with a visible label.

**States** Default · hover · focus · filled · error · disabled.

**Visual rules** 46px tall, 14px horizontal padding, 1px #808080, radius 2px. The label is
**never** replaced by a placeholder. Errors render below as "! message" in 13px #B0132B with
`role="alert"`, and swap the border to #B0132B.

---

## Toast — shared

**Purpose** Confirm any action that would reach a backend.

**Visual rules** Fixed bottom-centre, #1A1A1A, white 14px text, overlay shadow,
`role="status"`. Auto-dismisses after ~3.2s with a manual close. One at a time — a new toast
replaces the current one.

---

## Iconography

The interface is deliberately almost icon-free. Status is a word plus a typographic glyph,
which removes an icon dependency entirely and keeps the surface calm.

| Mark | Form | Meaning |
|---|---|---|
| magnifier | line icon, 13–17px, 1.5px stroke | search (header of sidebar, rail, composer) |
| panel | line icon, 15px | sidebar collapse |
| plus | glyph or line icon | new conversation |
| arrow up | 16px | send |
| chevron down | 12px | account menu, select |
| ✕ | glyph | close, delete, remove term, clear filter |
| ✓ | glyph | answered, valid, read at ingest |
| ! | glyph, bold | warning, error |
| i | glyph, bold | information |
| ↗ | glyph | leaves the product (Open in wiki) |
| ← | glyph | back |
| ▲ ▼ / trend arrows | 13px | metric delta direction |
| + / − | 16px | trace disclosure open / closed |

Resource and facet types use **text tags**, not vendor logos. Do not introduce an icon library;
if a new icon is genuinely required, draw it at 16px on a 1.5px stroke and add it to this table.
