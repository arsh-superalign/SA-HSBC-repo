# Design specification

The authoritative per-screen document. Every screen lists purpose, navigation context, layout,
components, content, interactions, states, navigation and visual details.

Measurements are the prototype's actual values. Where a value is expressed as a token, the
token name comes from `DESIGN_TOKENS.md`.

## Shared shell

Present on every authenticated screen. Absent on Sign in.

```
accent rule        4px, full width, #B0132B
header             60px, #FFFFFF, 1px bottom #D9D9D9, flex none, z 40
  padding          0 24px, items gap 20px
  [1] collapse     34px square, 1px #D9D9D9 — CHAT SCREEN ONLY
  [2] wordmark     20px #B0132B square + "KNOWLEDGE" 16px, letter-spacing .2em, uppercase
  [3] spacer       margin-left auto
  [4] account      avatar 28px + name 13px + chevron, 1px #D9D9D9, opens the dropdown
body               flex row, min-height 0
  sidebar          272px expanded / 70px rail — CHAT SCREEN ONLY
  main             flex 1, background #FFFFFF
```

The header carries nothing else. No route display, no environment badge, no search field, no
notes toggle — all were removed deliberately.

---
## Screen 1 · Sign in

**Route / identifier** `/login`
**Navigation context** None. Full-bleed two-panel layout, no shell.

**Purpose**
Authenticate with staff credentials or single sign-on, and set the expectation that the service reads the wiki with the user’s own session.

**Layout**
```
grid 1.1fr / 1fr, min-height 100vh          (single column below 1024px)
LEFT  brand panel   #1A1A1A, padding 56px, flex column space-between
        wordmark    26px accent square + "KNOWLEDGE" 19px, letter-spacing .2em
        centre      h1 42px/1.15 tracking -.015em, max-width 520px
                    lede 17px/1.6 #CCCCCC, max-width 52ch
                    3 stat columns above a 1px #4D4D4D rule
        footer      "Internal use only" / "Service desk ext. 4400", 13px #999999
RIGHT form panel    #FFFFFF, centred, padding 56px 44px
        column      max-width 400px, gap 24px
```

**Components**
- Brand panel (hidden below 1024px — the form takes the full width)
- Tab pair: Staff credentials / Single sign-on (segmented, 1px #D9D9D9 box, 42px)
- Field × 2 (Staff ID, Password) with inline error slots
- Checkbox: keep this machine registered
- Alert (danger) for the submission banner
- Primary button, full width, 48px, with spinner
- Text link: Forgotten your password?
- Auth success panel (replaces the form)

**Content**
Brand h1 "Ask the wiki. Get answers you are permitted to see." Lede "Permissions are resolved on every question. Pages are fetched with your own wiki session — the service never holds page text." Stats: 4 spaces readable · 1,284 questions asked · 71% answered.

Form h2 "Sign in", sub "Use your staff credentials. This machine is registered to DEV-LDN-4471." Staff ID placeholder "e.g. 4471820". Checkbox "Keep this machine registered for 30 days". SSO panel shows "D. Kaur · d.kaur@internal", the note "Detected from your desktop session. Continuing signs you in with the same wiki permissions.", and an info alert "Single sign-on adds no extra step — no page is fetched without your own session." Footer shows "kb.internal · localhost:7391" right-aligned.

**Interactions**
- Tabs swap the field set and clear the banner; values persist per tab.
- Staff ID: required, 6–8 digits. Password: required, 8+ characters. Errors clear on edit.
- Enter in either field submits.
- Invalid submit renders both inline errors and the banner "Check the highlighted fields and try again."
- Valid submit: ~900ms button loading ("Signing in…" / "Authenticating…"), then the success panel, then ~900ms later the chat screen.
- Forgotten your password? confirms via toast.

**States**
Staff credentials (default) · Single sign-on · Field validation error · Banner error · Authenticating (loading) · Signed in (success).

**Navigation**
Chat, on success. No other exit.

**Important visual details**
- The brand panel is the only large dark surface in the product; it is not repeated anywhere else.
- Fields are 46px, 1px #808080, radius 2px. Error state swaps the border to #B0132B and renders "! message" in 13px #B0132B.
- The success panel's progress bar is 4px, track #E5E5E5, fill #B0132B at 70%.

---

## Screen 2 · Chat

**Route / identifier** `/chat, /chat/:conversationId`
**Navigation context** Authenticated shell. The only screen with a sidebar. Header shows the collapse control here and nowhere else.

**Purpose**
Ask the wiki and read the answer, with every previous conversation one click away. This screen replaces what were separate Ask and History surfaces — the sidebar is the history.

**Layout**
```
SIDEBAR 272px, #FFFFFF, 1px right #D9D9D9
  top       padding 16px, gap 12px, 1px bottom #E5E5E5
              New conversation   42px primary, full width, "+" glyph
              Search             36px, 1px #D9D9D9, magnifier + clear
  list      scrolls; "CONVERSATIONS" overline 11px .08em #999999
              row  padding 11px 16px, 3px left border marker
                   6px outcome dot + truncated title (max 196px) + delete ✕
  footer    1px top #E5E5E5, padding 8px 16px 14px
              Browse by facet · Account and profile

RAIL 70px (collapsed), centred column, gap 8px, padding 16px 0
  +  ·  search  ·  divider  ·  5 conversation initials  ·  spacer  ·  browse  ·  insights
  every control 38px square with a tooltip

THREAD flex 1, overflow-y auto, padding 32px 32px 40px
  column    max-width 720px, centred, gap 32px between turns
  question  right-aligned, max-width 72%
  answer    full width behind a 22px accent mark, 14px gap

COMPOSER flex none, #FFFFFF, padding 8px 32px 24px
  column    max-width 720px, centred, gap 8px
  shell     1px #D9D9D9, radius 2px, padding 10px 10px 10px 16px
              textarea (grows) + 36px send button
  footnote  12px #999999, centred
```

**Components**
- Conversation sidebar / sidebar rail
- Conversation row (outcome dot + title + delete)
- Conversation search
- Chat thread: question turn, answer turn, loading turn
- Answer variants: Answered · No answer · Refused
- Source pills
- Trace disclosure
- Composer
- Empty conversation (three starters)
- No conversation selected

**Content**
Five seeded conversations: "How do I rotate a service credential?" (answered, with a follow-up "Does the change record have to come first?"), "Which team owns the fraud scoring service?" (answered), "How do I revoke a compromised signing key?" (no answer), "What is the payment retry policy?" (refused), "Where are the on-call runbooks for Pulse?" (answered).

Empty conversation: accent mark, h1 "Ask the wiki", and three starter buttons — the credential rotation question, the signing key question, and the retry policy question, so each outcome is one click away.

Answered turn: prose body with bracketed claim numbers, a source pill row (Credential rotation runbook · Secrets management standard · Service account lifecycle), a withheld count, and the trace trigger.

No answer: "No answer — the search returned 3 links and none could be fetched with your credentials." Then three rows: two "— title withheld —" marked Withheld, and "Signing key revocation" marked Empty page.

Refused: black block, "The search was refused, not run." / "Permissions could not be resolved, so the service failed closed. Nothing was searched." Then "Last successful check 47 min ago", Service status, Retry.

Trace: six steps — Question asked (0.0s) · Keyword variations added MODEL (0.6s) · Permissions resolved PERM (0.2s) · Index and graph searched (0.4s) · Pages retrieved PERM (0.9s) · Answer composed MODEL (0.3s). Then three removable terms and the line "The model can only add candidates — it can never remove your wording."

Composer placeholder "Ask the wiki…", footnote "Answers come only from pages you can read".

**Interactions**
See INTERACTIONS.md → Chat for the full table: sidebar create/select/delete/search, collapse to rail, send, truncation, source navigation, trace expansion, term removal, and the three per-outcome action sets.

**States**
Empty conversation · Populated · Searching (skeleton) · No conversation selected · Answered · No answer · Refused · Trace expanded · Answer truncated / expanded · Sidebar expanded · Sidebar collapsed · Sidebar search filtered · Sidebar search miss · No conversations.

**Navigation**
Page detail (source pill) · Browse by facet (sidebar footer, rail, No-answer action) · Insights (rail) · Account and profile (sidebar footer).

**Important visual details**
- **The question is a bubble; the answer is not.** Question: #F2F2F2 fill, 1px #E5E5E5, 12px 16px padding, right-aligned, max-width 72%. Answer: no container at all — 16px/1.7 prose at full column width behind a 22px solid accent square. No "You" or "Answer" caption anywhere.
- Answers clamp at 280 characters on a word boundary, then "Show more".
- Source pills: 1px #E5E5E5, max-width 230px, truncated, with a monospace index digit.
- The loading state is answer-shaped — three pulsing bars at 86% / 94% / 62% width behind the accent mark — so the arriving answer does not shift the layout.
- The main surface is #FFFFFF here, not the #F2F2F2 canvas used by the other screens. The chat column is the page.
- Turns are separated by 32px of rhythm, never by rules.

---

## Screen 3 · Browse by facet

**Route / identifier** `/browse`
**Navigation context** Authenticated shell, full width. No sidebar. Reached from the chat sidebar footer or the rail.

**Purpose**
The second way in, for when the user would rather look than ask. Only pages they can read are listed.

**Layout**
```
page      overflow-y auto, padding 32px; column max-width 1180px, gap 24px
header    h1 28px + sub 15px #666666
body      flex row gap 24px (stacks below 1024px)
  rail    252px, 1px #D9D9D9, #FFFFFF
            group   1px bottom #E5E5E5
                    name 11px .08em uppercase #666666, padding 14px 20px 8px
                    value 10px 20px, 3px left marker, hover #F8F8F8
  results flex 1, gap 20px
            filter bar  1px #D9D9D9, padding 16px 20px, chips + count
            card        1px #D9D9D9, padding 20px 24px, gap 12px
                        title 17px/500 + breadcrumb 12px #808080 + Open in wiki ↗
                        facet tags 12px, 1px #D9D9D9, #F8F8F8
```

**Components**
- Facet rail (three groups)
- Active filter chips
- Result card
- Empty results state

**Content**
h1 "Browse by facet", sub "For when you would rather look than ask. Only pages you can read are listed."

Groups: **Domain** (Payments · Fraud · Identity › Credentials · None of these), **Type** (Runbook · Standard · ADR · How-to · None of these), **Platform** (AWS · Kubernetes · On-prem · None of these).

Six pages: Credential rotation runbook · Service account lifecycle · Vault onboarding guide · Secrets management standard · Payment retry policy · Fraud scoring service ownership — each with a breadcrumb and facet tags.

Default filters: Domain "Identity › Credentials", Type "Runbook".

No match: "No pages match these facets" / "The active filters are the likely cause: {active filter list}" / Clear all filters.

**Interactions**
One value per group, toggling. Chips clear a single group. Result titles open Page detail. Open in wiki confirms via toast. See INTERACTIONS.md → Browse by facet.

**States**
Filtered (default) · No filters · No match · Facet selected / deselected.

**Navigation**
Page detail (result title).

**Important visual details**
- **"None of these" is a real, selectable value**, listed last in every group. It is not an empty state and must not be styled as one.
- Cards carry title, breadcrumb and facet tags — **no excerpt**, because no page body is stored.
- Selected facet: #F8F8F8 fill, 3px #B0132B left marker, #000000 text. Unselected: transparent marker, #4D4D4D text.
- The empty state names the active filters rather than offering a generic apology.

---

## Screen 4 · Page detail

**Route / identifier** `/page/:pageId`
**Navigation context** Authenticated shell, full width. Reached from a source pill or a Browse result.

**Purpose**
Show everything the shared service holds about a page — and make clear that the page text is not part of it.

**Layout**
```
page    overflow-y auto, padding 32px; column max-width 1180px, gap 22px
back    "← Browse", self-start
body    flex row gap 24px (stacks below 1024px)
  main  flex 1.8
          title 28px, max-width 36ch + breadcrumb 13px #808080
          primary panel  1px #D9D9D9, padding 22px, two actions right-aligned
          Facets table   1px #D9D9D9; row 13px 22px, label 140px min
  side  320px, gap 20px
          Parent pages · Read at ingest · Relationships
```

**Components**
- Facet table (with RULE / MODEL badges and confidence)
- Parent pages list
- Read-at-ingest list
- Relationship counters

**Content**
Title and breadcrumb from the page. Primary panel: "No page text is stored here." / "Reading happens in the wiki, under wiki permissions." Actions: Ask about this page (secondary), Open in wiki ↗ (primary).

Facets: Domain → Identity (RULE, 1.00) · Document type → Runbook (RULE, 1.00) · Platform → AWS (MODEL, 0.82) · Language → None of these (MODEL, 0.87).

Parent pages, indented 16px per level. Read at ingest: ✓ Title · ✓ Breadcrumb · ✓ Parent pages · ✕ Page body — never read. Relationships: links in / links out.

**Interactions**
← Browse returns to Browse. Ask about this page opens a new conversation and sends "What does the {page title} say?". Open in wiki confirms via toast. Everything else is read-only.

**States**
Default.

**Navigation**
Browse by facet (back) · Chat (Ask about this page) · the wiki (Open in wiki).

**Important visual details**
- The primary action **leaves the product**. That is correct — reading is the wiki's job.
- "Page body — never read" is rendered in #808080 with a ✕, deliberately unlike the three ✓ rows above it.
- RULE badges are neutral (1px #D9D9D9 on #F8F8F8); MODEL badges are info-toned (1px #C3D4E0 on #F3F7FA). Confidence is monospace, right-aligned.

---

## Screen 5 · Insights

**Route / identifier** `/insights`
**Navigation context** Authenticated shell, full width. Reached from the account dropdown, or the rail when the sidebar is collapsed.

**Purpose**
Show what people ask, what comes back, and what the wiki is missing.

**Layout**
```
page    overflow-y auto, padding 32px; column max-width 1280px, gap 24px
header  h1 28px + sub | right: scope toggle (42px) + period select (42px)
KPIs    6 tiles, grid gap 1px on a #D9D9D9 background inside a 1px border
chart   1px #D9D9D9, padding 24px, gap 20px
          title + legend + granularity toggle (34px)
          840×200 SVG, 3 series, then axis labels
lists   grid 3 columns, gap 24px (2 then 1 at narrower widths)
```

**Components**
- KPI strip (hairline grid)
- Trend chart (three series, inline SVG)
- Ranked list × 3
- Scope and granularity toggles, period select

**Content**
h1 "Insights", sub "What people ask, what comes back, and what the wiki is missing."

KPIs: Questions asked 1,284 (+14%) · Answered 71% (+3%) · No answer 22% (−2%) · Refused 7% (+1%) · Median time 2.4s (−0.3s) · People asking 96 (+8).

Chart "Asked, answered and unanswered", legend asked / answered / no answer. Daily axis 01–29 Aug; Weekly axis W27–W35.

**Most asked** ("Click to ask it yourself"): credential rotation 84 · fraud scoring ownership 61 · payment retry policy 47 · Pulse access 39.

**Coverage gaps** ("Asked repeatedly, never answered"): revoke a signing key 31 · SLA for inbound payments 24 · who approves a schema change 19 · where are the DR runbooks 12.

**Most cited pages** ("Answers drawn from"): Credential rotation runbook 112 · Secrets management standard 88 · Service account lifecycle 70 · Change record procedure 55.

**Interactions**
Scope toggles Organisation / You — layout identical either way. Granularity swaps the chart series and axis. Most asked and Coverage gaps rows open a new conversation and ask that question. Most cited rows are read-only.

**States**
Scope: Organisation / You · Period: 30 days / 7 days / quarter · Granularity: Daily / Weekly.

**Navigation**
Chat (asking a listed question).

**Important visual details**
- The KPI strip uses a hairline grid — `gap: 1px` over a #D9D9D9 background inside a 1px border — which gives exact 1px separators with no double borders. Reuse this pattern for every metric strip.
- The three chart series differ by **dash pattern as well as colour**: asked is dashed #1A1A1A, answered is solid #1B6B3A, no answer is dotted #B0132B.
- **Coverage gaps is the only list with accent emphasis** (3px #B0132B top border, #EBC3C9 body border, accent counts). It is the list that drives action.
- Deltas carry a trend arrow plus the value; up is #1B6B3A, down is #B0132B.

---

## Screen 6 · Account and profile

**Route / identifier** `/account`
**Navigation context** Authenticated shell, full width. Reached from the account dropdown or the chat sidebar footer.

**Purpose**
Show the session and permission facts, and offer the one destructive control the product has.

**Layout**
```
page    overflow-y auto, padding 32px; column max-width 940px, gap 24px
header  h1 28px + sub
body    flex row gap 24px (stacks below 1024px)
  main  flex 1, 1px #D9D9D9, padding 24px
          avatar 44px + name/email
          1px top #E5E5E5, then 4 definition rows (label 170px min)
  side  320px, gap 20px
          Readable spaces  — 2-up hairline grid + note
          This machine     — note + Clear all history
```

**Components**
- Profile card (avatar + definition rows)
- Readable-spaces counters
- Machine card with the destructive action

**Content**
h1 "Account and profile", sub "Session and permission facts. The product holds no profile beyond what your wiki session provides."

Rows: Sign-in method → Staff credentials · Machine → DEV-LDN-4471 · registered · Service → kb.internal · localhost:7391 (monospace) · Permissions refreshed → 4 min ago · every 15 min.

Readable spaces: 4 readable, 2 withheld, with the note "Withheld pages are counted, never named."

This machine: "Conversation history is stored locally and never leaves this machine." Then Clear all history.

**Interactions**
Clear all history empties every conversation and toasts; the chat screen then shows "no conversation selected". Every other row is read-only.

**States**
Default · History cleared.

**Navigation**
Chat · Insights (both via the account dropdown).

**Important visual details**
- The withheld counter is #8A5A00 against the readable counter's #000000 — the only colour on the screen besides the destructive action.
- Clear all history is a destructive secondary: #B0132B text on white, border darkening to #B0132B on hover. It is not a filled button; it is not the page's primary action.

---
