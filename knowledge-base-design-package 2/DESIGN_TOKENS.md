# Design tokens

Every visual value in the prototype. Nothing outside this list. Machine-readable versions are
in `tokens/` — `tokens.css` (custom properties), `tokens.ts` (typed), and
`tailwind.tokens.ts` (theme extension).

## Colour

### Accent — actions, active states, failure. Used sparingly.

| Token | Value | Use |
|---|---|---|
| `accent` | `#B0132B` | Primary buttons, active markers, links, the accent rule, the answer mark, failure |
| `accent-pressed` | `#8C0F22` | Primary hover / active |
| `accent-surface` | `#FCF3F4` | Selected radio-card fill, destructive hover |
| `accent-border` | `#EBC3C9` | Emphasis card border (Coverage gaps), danger alert border |

### Text

| Token | Value | Use |
|---|---|---|
| `ink` | `#000000` | Screen titles, active labels |
| `body` | `#1A1A1A` | Body copy, table values |
| `subtle` | `#4D4D4D` | Secondary copy, sidebar links |
| `muted` | `#666666` | Sub-headings, field labels, overlines |
| `faint` | `#808080` | Metadata, timestamps, withheld titles, quiet triggers |
| `ghost` | `#999999` | Placeholders, disabled text, sidebar overline |
| `on-dark` | `#FFFFFF` | Text on the inverse surface |
| `on-dark-muted` | `#CCCCCC` | Secondary text on the inverse surface |

### Surfaces

| Token | Value | Use |
|---|---|---|
| `surface` | `#FFFFFF` | Cards, header, sidebar, main region |
| `canvas` | `#F2F2F2` | Page background, question bubble fill |
| `sunken` | `#F8F8F8` | Row hover, active sidebar row, tags, badges |
| `inverse` | `#1A1A1A` | Login brand panel, refused block, toast |

### Lines

| Token | Value | Use |
|---|---|---|
| `line-strong` | `#808080` | Input borders, secondary button borders |
| `hairline` | `#D9D9D9` | Cards, panels, nav separators, KPI grid |
| `divider` | `#E5E5E5` | Section separators, question bubble border |
| `divider-light` | `#F2F2F2` | In-panel row separators |
| `line-disabled` | `#CCCCCC` | Disabled borders, avatar borders, skip bars |

### Status

Each tone is a triple: text, surface, border.

| Tone | Text | Surface | Border |
|---|---|---|---|
| success | `#1B6B3A` | `#F2F8F4` | `#BFD9C6` |
| warning | `#8A5A00` | `#FBF7EE` | `#E6D3AE` |
| danger | `#B0132B` | `#FCF3F4` | `#EBC3C9` |
| info | `#0B3B60` | `#F3F7FA` | `#C3D4E0` |

### Data visualisation

| Token | Value | Use |
|---|---|---|
| `chart-primary` | `#1A1A1A` | "Asked" series (dashed) |
| `chart-answered` | `#1B6B3A` | "Answered" series (solid) |
| `chart-none` | `#B0132B` | "No answer" series (dotted) |
| `chart-grid` | `#E5E5E5` | Baseline rule |
| `chart-grid-light` | `#F2F2F2` | Secondary rules |

## Typography

**Families** `Arial, Helvetica, sans-serif` for everything; `ui-monospace, Menlo, monospace`
for identifiers, index digits, confidence values and the service host.

Only weights **400** and **500** are used. There is no bold body copy anywhere.

| Token | Size | Line height | Weight | Tracking | Use |
|---|---|---|---|---|---|
| `display` | 42px | 1.15 | 400 | −0.015em | Login brand h1 |
| `h1` | 28px | 1.25 | 400 | −0.01em | Screen titles |
| `h2` | 21px | 1.3 | 400 | — | "No conversation selected" |
| `h3` | 19px | 1.35 | 400 | — | Refused headline |
| `section` | 19–20px | 1.3 | 500 | — | Card / section headings |
| `card-title` | 17px | 1.3 | 500 | — | Ranked list and result titles |
| `lead` | 17px | 1.6 | 400 | — | Login lede, page-detail lead |
| `prose` | 16px | 1.7 | 400 | — | **Answer body** |
| `input` | 16px | 1.5 | 400 | — | Field text, question bubble, composer |
| `base` | 15px | 1.55 | 400 | — | Sub-headings, list copy |
| `sm` | 14px | 1.5 | 400 | — | Table cells, definition rows, menu items |
| `caption` | 13px | 1.4 | 400 | — | Metadata, field labels, quiet actions |
| `overline` | 12px | 1.4 | 400 | 0.08em | Section overlines (uppercase) |
| `kpi-label` | 12px | 1.4 | 400 | 0.06em | KPI labels (uppercase) |
| `micro` | 11px | 1.4 | 400 | 0.08em | Sidebar overline, small badges |
| `badge` | 10px | 1.5 | 400 | 0.06em | RULE / MODEL / PERM badges |
| `metric` | 29px | 1 | 400 | — | KPI values |
| `metric-sm` | 24–26px | 1 | 400 | — | Counter values |
| `wordmark` | 16–19px | 1 | 400 | 0.2em | "KNOWLEDGE" (uppercase) |

## Spacing

An 8px-derived scale with the half-steps the design actually uses.

`4 · 8 · 10 · 12 · 14 · 16 · 20 · 22 · 24 · 32 · 40 · 56`

| Context | Value |
|---|---|
| Chip / badge padding | 4px 8px |
| Row padding (sidebar) | 11px 16px |
| Row padding (list, panel) | 13–14px 20–22px |
| Card padding | 20–24px |
| Panel padding | 22px |
| Login panel padding | 56px |
| Page padding | 32px |
| Composer padding | 8px 32px 24px |
| Gap between turns | 32px |
| Gap between cards | 24px |
| Gap within a card | 12–16px |
| Gap in a control row | 8–12px |

## Layout

| Token | Value |
|---|---|
| Accent rule | 4px |
| Header height | 60px |
| Sidebar (expanded) | 272px |
| Sidebar (rail) | 70px |
| Sidebar (sheet, <1024px) | 288px |
| Chat column | 720px max |
| Content column | 1180px max |
| Insights column | 1280px max |
| Account column | 940px max |
| Login form column | 400px max |
| Browse facet rail | 252px |
| Page-detail side column | 320px |
| Login grid | 1.1fr / 1fr |
| Page-detail body | 1.8fr / 320px |

**Breakpoints** ≥1280px, ≥1024px (sidebar becomes a sheet below this), ≥768px, <768px.

## Border radius

| Token | Value | Use |
|---|---|---|
| `radius-none` | 0 | Cards, panels, tables, badges, chips, tags |
| `radius-sm` | 2px | Buttons, inputs, pills, the send button |

Nothing in the product is more rounded than 2px. There are no circles except the loading
spinner.

## Borders

| Weight | Colour | Use |
|---|---|---|
| 1px | `#D9D9D9` | Cards, panels, header, sidebar, KPI grid |
| 1px | `#E5E5E5` | Section separators, question bubble, source pills |
| 1px | `#F2F2F2` | In-panel row separators |
| 1px | `#808080` | Inputs, secondary buttons |
| 3px | `#B0132B` | Active markers (sidebar row, facet value), alert left edge, emphasis card top |
| 4px | `#B0132B` | The accent rule above the header |

Hierarchy comes from hairlines and whitespace, not shadows.

## Shadows

Used sparingly — only overlays get one.

| Token | Value | Use |
|---|---|---|
| `shadow-card-hover` | `0 1px 4px rgba(0,0,0,.08)` | Hoverable cards |
| `shadow-menu` | `0 4px 12px rgba(0,0,0,.10)` | Account dropdown, select |
| `shadow-dialog` | `0 8px 24px rgba(0,0,0,.12)` | Modals (none in this prototype; reserved) |
| `shadow-overlay` | `0 4px 12px rgba(0,0,0,.18)` | Toast |

## Control dimensions

| Control | Height |
|---|---|
| Filter chip / granularity toggle | 34px |
| Icon button, in-panel action, send button, sidebar search | 36px |
| Filter-bar input | 40px |
| Sidebar primary, scope toggle, period select, login tab | 42px |
| Page action | 44px |
| Login field | 46px |
| Login primary | 48px |

Avatars: 28px (header), 44px (account page). Outcome dot: 6px. Accent answer mark: 22px.
Rail button: 38px.

## Motion

| Token | Duration | Use |
|---|---|---|
| `fast` | 120ms ease | Dropdown open |
| `base` | 150ms ease | Fades, colour transitions |
| `panel` | 200ms ease | Sidebar width, trace expansion, message fade-in |
| `progress` | 250ms ease | Progress bar width |
| `spin` | 0.7s linear infinite | Loading spinner |
| `breathe` | 1.4s ease-in-out infinite | Skeleton pulse |

**Keyframes** `fade` (opacity) · `rise` (6px up + fade, toast) · `drop` (4px down + fade,
dropdown) · `breathe` (0.35 → 0.85 → 0.35 opacity).

## Focus

`outline: 2px solid #B0132B; outline-offset: 2px` — defined once, applied to
`:focus-visible` globally, never removed.

## Translation notes

- **CSS variables** — use `tokens/tokens.css` directly.
- **Tailwind** — merge `tokens/tailwind.tokens.ts` into `theme.extend`.
- **shadcn/ui** — `tokens.css` also defines the `--primary`, `--border`, `--input` and `--ring`
  variables shadcn components read, so vendored components inherit the palette automatically.
- **Existing design system** — map by role, not by name: `accent` → your primary action colour,
  `hairline` → your default border, `canvas` → your page background. Do not import these names
  on top of an existing scale.
