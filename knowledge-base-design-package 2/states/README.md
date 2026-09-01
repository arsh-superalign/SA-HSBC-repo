# UI states

Every state the prototype renders, how it is reached, and whether it changes layout.
States marked **layout-changing** must exist as explicit branches or components, not as CSS
variants.

## Authentication states

| State | Layout-changing | How it is reached | Rendering |
|---|---|---|---|
| Staff credentials | — | Default | Staff ID + Password + registration checkbox |
| Single sign-on | yes | Second tab | Detected-identity panel + info alert. No fields to validate |
| Field validation error | — | Submit with an invalid field | Border swaps to `#B0132B`; "! message" below in 13px `#B0132B`; `role="alert"` |
| Banner error | yes | Submit with any invalid field | Danger alert above the tabs: "Check the highlighted fields and try again." |
| Authenticating | — | Valid submit | Button spinner; label becomes "Signing in…" or "Authenticating…"; ~900ms |
| Signed in (success) | yes | Authentication resolves | The form is **replaced** by the success panel: green alert, "Opening the knowledge base", "Resolving the spaces you can read…", 4px progress bar at 70%. ~900ms, then the chat screen |

The success beat is not optional. Removing it makes the transition read as an unexplained flash.

### Validation rules

| Field | Rule | Message |
|---|---|---|
| Staff ID | Required | "Enter your staff ID." |
| Staff ID | 6–8 digits | "A staff ID is 6 to 8 digits." |
| Password | Required | "Enter your password." |
| Password | ≥ 8 characters | "Password must be at least 8 characters." |

Errors clear on edit. Entered values survive a failed submit.

## Conversation states

| State | Layout-changing | How it is reached | Rendering |
|---|---|---|---|
| Empty conversation | yes | New conversation | Centred: accent mark, "Ask the wiki", three starter buttons. No composer change |
| Populated | — | Any question asked | The turn column |
| Searching | yes | Send a question | Answer-shaped skeleton: three pulsing bars at 86% / 94% / 62% behind the accent mark. `role="status"` |
| No conversation selected | yes | Clear all history | Centred empty square, "No conversation selected", explanation, one "New conversation" action. **The composer is not rendered** |

## Answer states

The three outcomes are the product's core distinction. They must not converge.

| State | How it is reached | Rendering |
|---|---|---|
| **Answered** | Any question not matching the two rules below | Unboxed 16px/1.7 prose behind the accent mark, then the source pill row, withheld count and trace trigger. No card, no caption, no chip |
| **No answer** | Question contains "signing key" or "revoke" | Warning-glyphed sentence, then a hairline list of returned links (withheld rows show "— title withheld —"), then Request access / Browse by facet / trace trigger |
| **Refused** | Question contains "retry policy" | Filled `#1A1A1A` block, 19px white headline "The search was refused, not run.", `#CCCCCC` body, then "Last successful check 47 min ago" with Service status / Retry. **No list — nothing was searched** |

| Sub-state | Layout-changing | Notes |
|---|---|---|
| Truncated | — | Answers over 280 characters clamp on a word boundary with "Show more" |
| Expanded | — | Full text, "Show less". Per-message and independent |
| Trace closed | — | Default. Trigger reads "How this answer was found +" |
| Trace open | yes | Six-step panel, term chips, closing line. Trigger reads "Hide how this was found −" |
| Term removed | — | Chip disappears; the overline count decrements. Per-message |

## Sidebar states

| State | Layout-changing | Rendering |
|---|---|---|
| Expanded | yes | 272px: New conversation, search, list, footer links |
| Collapsed (rail) | yes | 70px: +, search (re-expands), 5 conversation initials, Browse, Insights. Every control tooltipped |
| Sheet | yes | Below 1024px: the same expanded content in a left slide-over, dismissed by Escape / outside click / close |
| Search filtered | — | List narrows by title, case-insensitive; a clear button appears |
| Search miss | yes | "Nothing matches your search" / "Clear the search to see every conversation." |
| No conversations | yes | "No conversations yet" / "Start one with New conversation. History stays on this machine." |
| Row active | — | 3px `#B0132B` left marker, `#F8F8F8` fill, `#000000` title |
| Row hover | — | `#F8F8F8` fill |

**The sidebar is absent entirely on Browse, Page detail, Insights and Account** — and the
header's collapse control is hidden with it, so it is never a dead control.

## Browse states

| State | Layout-changing | Rendering |
|---|---|---|
| Filtered (default) | — | Domain "Identity › Credentials" + Type "Runbook"; matching cards |
| Facet selected | — | `#F8F8F8` fill, 3px `#B0132B` marker, `aria-pressed="true"` |
| No filters | — | Every readable page; the filter bar shows only the count |
| No match | yes | Centred panel naming the active filters as the likely cause, plus Clear all filters |

## Insights states

| State | Layout-changing | Rendering |
|---|---|---|
| Scope: Organisation | — | Default. Toggle filled `#1A1A1A` |
| Scope: You | — | Identical layout, user-scoped figures |
| Granularity: Daily | — | Default. Axis 01–29 Aug |
| Granularity: Weekly | — | All three series and the axis swap. Axis W27–W35 |
| Period | — | Last 30 days / Last 7 days / Last quarter |

## Account states

| State | Layout-changing | Rendering |
|---|---|---|
| Default | — | Profile rows, readable-spaces counters, machine card |
| History cleared | — | Toast fires; the chat screen behind now shows "no conversation selected" |

## Control states

| Control | States |
|---|---|
| Primary button | Default · hover (`#8C0F22`) · active · focus ring · disabled (`#F2F2F2` / `#CCCCCC` / `#808080`) · loading (spinner + progressive label) |
| Secondary button | Default · hover (border → `#1A1A1A`) · focus · disabled |
| Destructive button | Default (`#B0132B` text on white) · hover (border → `#B0132B`) |
| Link action | Default (accent) · hover (underline) · disabled (`#999999`, no underline) |
| Quiet action | `#808080` → accent on hover |
| Send button | Disabled (empty or sending) · enabled (accent) · sending (spinner) |
| Field | Default · hover (border → `#1A1A1A`) · focus (ring) · filled · error · disabled |
| Checkbox | Unchecked · checked (accent fill) · focus |
| Tab / toggle | Unselected (white / `#333333`) · selected (`#1A1A1A` / white) |
| Facet value | Unselected · selected · hover |
| Account menu | Closed · open (trigger border and fill darken) |
| Toast | Entering (rise) · visible · dismissed (auto ~3.2s or close) |

## Responsive states

**Desktop-first commission.** The ≥1024px column is the designed layout; the rows below are
the intended reflow and were **not** visually designed. Treat them as implementation decisions
and verify on real devices.

| Breakpoint | Behaviour |
|---|---|
| ≥1280px | Full layout. Insights lists 3-up, KPI strip 6-up |
| 1024–1279px | Inline sidebar retained. Insights lists 3-up, KPI strip wraps to 3-up |
| 768–1023px | **Sidebar becomes a slide-over sheet.** Login drops the brand panel. Browse facets stack above results. Page detail and Account stack to one column. Insights lists 2-up, KPI strip 2-up |
| <768px | Single column throughout. Chat column fills the width. KPI strip 2-up. Interactive targets stay ≥36px |

The chat column's 720px maximum holds at every width — it is a reading measure, not a
breakpoint artefact.

## Accessibility contract

- One `h1` per screen, then `h2` per section. No level skipping.
- `role="alert"` on field errors, the login banner, and the No-answer and Refused states.
  `role="status"` on the success alert, the loading skeleton and toasts.
- `aria-expanded` on the sidebar collapse control, the account menu trigger and both trace
  triggers. `aria-pressed` on facet values. `aria-current` on the active conversation row.
- Every icon-only control carries an `aria-label`; decorative glyphs are `aria-hidden="true"`.
- Focus ring: `2px solid #B0132B`, `2px` offset, defined once and never removed.
- Escape closes the account menu and the sidebar sheet; focus returns to the trigger.
- **Status is never colour alone** — every outcome pairs a glyph with a word.
- Contrast: body text ≥4.5:1 on its background; `#B0132B` on white is 6.2:1.
