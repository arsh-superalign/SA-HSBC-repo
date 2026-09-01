# Knowledge Base — design handoff package

A structured, screen-by-screen interpretation of the **Knowledge Dashboard v2** prototype,
prepared so Claude Code can implement it inside an existing application.

Hand this whole folder to Claude Code and say:

> "Use this design package as the source of truth and implement these screens in the
> existing application."

---

## Source of truth

`assets/Knowledge Dashboard v2.html` — the working prototype — is the visual and behavioural
source of truth. Open it in a browser and click through it before implementing anything.
`assets/Knowledge Dashboard v2.dc.html` is its source.

Where this package and the prototype disagree, **the prototype wins**. Where this package and
your instinct disagree, **this package wins**.

A second, already-built reference implementation exists at `../knowledge-base/` — React +
TypeScript + Vite + Tailwind + shadcn/ui. If your stack matches, read that alongside these
documents; it is a worked example of the same spec, not a competing design.

## Implementation principle

Implement these screens **in the developer's existing application architecture and technology
stack**. Do not rebuild the application around this export. Map the components described here
onto the primitives the codebase already has — its Button, its table, its router, its data
layer. The documents describe structure, content and behaviour; they do not mandate a stack.

## Priority order

When a trade-off is unavoidable, resolve it in this order:

1. **Existing product terminology** — the words in `TERMINOLOGY.md` are not negotiable
2. **Existing information architecture** — the two navigation levels in `SCREENS.md`
3. **Screen structure** — layout order and grouping per `DESIGN_SPEC.md`
4. **Visual design** — the treatments in `DESIGN_SPEC.md`
5. **Component behaviour** — `COMPONENTS.md`
6. **UI states** — `states/README.md`
7. **Interactions** — `INTERACTIONS.md`
8. **Design tokens** — `DESIGN_TOKENS.md`

## Important instruction

**Do not redesign the product while implementing it.**

If an implementation decision is necessary but is not defined by the prototype, mark it
explicitly as an implementation decision — in a comment, a commit message, or a note back to
the designer. Do not present it as an intentional design decision. `states/README.md` and
this file's "Open implementation decisions" section list the ones already known.

## Reading order

1. `TERMINOLOGY.md` — the product's vocabulary
2. `SCREENS.md` — the inventory and the navigation hierarchy
3. `DESIGN_SPEC.md` — the screen you are about to build; build one screen at a time
4. `COMPONENTS.md` + `DESIGN_TOKENS.md` — the parts and the values
5. `INTERACTIONS.md` — the interaction model end to end
6. `states/README.md` — before you call any screen done

## Package structure

```
knowledge-base-design-package/
  README.md                    this file
  DESIGN_SPEC.md               per-screen specification (authoritative)
  SCREENS.md                   screen inventory + IA hierarchy
  COMPONENTS.md                reusable component contracts
  INTERACTIONS.md              the interaction model
  DESIGN_TOKENS.md             extracted visual system
  TERMINOLOGY.md               required product vocabulary

  screens/
    sign-in/
    chat/
    browse-by-facet/
    page-detail/
    insights/
    account-and-profile/       one README.md per screen, self-contained

  components/
    app-shell/ conversation-sidebar/ sidebar-rail/ chat-thread/
    composer/ source-pills/ trace-disclosure/ facet-rail/
    kpi-strip/ trend-chart/ ranked-list/ account-menu/

  states/
    README.md                  every UI state and how it is reached

  tokens/
    tokens.css                 CSS custom properties
    tokens.ts                  typed tokens
    tailwind.tokens.ts         Tailwind theme extension

  assets/
    Knowledge Dashboard v2.html      the prototype (open this first)
    Knowledge Dashboard v2.dc.html   prototype source
```

## Non-negotiables

These are the decisions the product is built on. Losing any of them changes what the product
means.

1. **There is no top-level tab bar.** The account dropdown is the only global navigation.
   Insights lives inside it. Do not reintroduce tabs for Ask / History / Browse / Insights.
2. **Ask and History are one surface.** The sidebar *is* the history. There is no separate
   history screen. Selecting a conversation restores it; the composer continues it.
3. **The sidebar renders only on the chat screen.** Browse, Page detail, Insights and Account
   are full width. The header's collapse control is hidden on those screens so it is never a
   dead control.
4. **Prompt and answer differ by form, not by caption.** The question is a contained, tinted,
   right-aligned bubble. The answer is unboxed body text at full width behind a small accent
   mark. There are no "You" / "Answer" labels.
5. **The three answer outcomes must not look alike.** Answered is plain prose; No answer is
   one sentence plus a hairline list; Refused is a filled inverse block. Merging their styling
   destroys the distinction the product exists to make.
6. **Withheld pages are counted, never named.** A page the user may not read renders as
   `— title withheld —` plus a count. Never leak a title, breadcrumb or excerpt.
7. **The model can only add search terms.** It can never remove the user's wording. The trace
   panel pins the user's phrasing and lists added terms as individually removable.
8. **History stores questions and outcomes only** — never the pages that came back. Retained
   titles would outlive the permission check that allowed them.
9. **"None of these" is a real, selectable facet value** in every group, not an empty state.
10. **No page text is ever stored.** Reading happens in the wiki. Every exit says
    "Open in wiki ↗".
11. **One accent colour.** `#B0132B` marks actions, active states and failure. Nothing else
    is coloured for decoration.
12. **Every control resolves.** No dead buttons. Anything that would hit a backend confirms
    with a toast.

## Open implementation decisions

Not defined by the prototype. Decide these deliberately and record the choice.

| Decision | Note |
|---|---|
| History persistence | The prototype keeps conversations in memory. It states history is machine-local — pick local storage or a per-machine store, not a server-side account record |
| Message list virtualisation | No decision at prototype volumes. Needed past a few hundred turns |
| Relative timestamps | The prototype uses static strings ("2 min ago"). Replace with real dates formatted at render |
| Header search | The prototype has no header search field and no results surface was designed. Do not add one without design input |
| Tablet / mobile layout | Desktop-first commission. `states/README.md` documents the intended reflow; it was not visually designed |
| Insights scope data | `Organisation` and `You` share one fixture set. The real endpoint must vary by scope |

## Assets

None to bundle. There are no image files, icon fonts or webfonts. Typography is
Arial / Helvetica with a monospace fallback stack for identifiers. Icons are a small set of
line glyphs (search, panel, plus, arrow-up, chevron, close, trend arrows) — see
`COMPONENTS.md` → Iconography.
