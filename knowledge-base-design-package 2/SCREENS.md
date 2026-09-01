# Screen inventory

Six addressable screens, plus the states and overlays that materially change layout, content
or behaviour. "Level" is the navigation context that must be rendered around the screen.

| Screen | Route / identifier | Level | States | Related screens |
|---|---|---|---|---|
| Sign in | `/login` | Unauthenticated (no shell) | Staff credentials · Single sign-on · Field validation error · Banner error · Authenticating · Signed in (success) | → Chat |
| Chat | `/chat`, `/chat/:conversationId` | Authenticated · sidebar present | Empty conversation · Populated · Searching (loading) · No conversation selected · Answered · No answer · Refused · Trace expanded · Answer truncated / expanded · Sidebar expanded · Sidebar collapsed (rail) · Sidebar search filtered · Sidebar search miss · No conversations | → Page detail · Browse by facet · Insights · Account and profile |
| Browse by facet | `/browse` | Authenticated · full width | Filtered (default: Domain + Type) · No filters · No match · Facet selected / deselected | → Page detail · ← Chat |
| Page detail | `/page/:pageId` | Authenticated · full width | Default | ← Browse by facet · → Chat (Ask about this page) |
| Insights | `/insights` | Authenticated · full width | Scope: Organisation / You · Period: 30 days / 7 days / quarter · Granularity: Daily / Weekly | → Chat (asking a listed question) |
| Account and profile | `/account` | Authenticated · full width | Default · History cleared | → Chat · → Insights (via account menu) |

## Overlays and transient surfaces

Not routes. Rendered above whichever screen invoked them.

| Surface | Invoked from | Kind | Dismissal |
|---|---|---|---|
| Account menu | App header, avatar button | Dropdown, 250px | Escape · outside click · selecting an item |
| Trace panel | Any assistant turn, "How this answer was found" | Inline disclosure | Same trigger |
| Toast | Any confirmed action | Fixed bottom-centre | Auto after ~3.2s · close button |
| Sidebar sheet | Header collapse control below 1024px | Slide-over from left | Escape · outside click · close button |

## Information architecture

The prototype has **two navigation levels and no tab bar**. Global navigation lives in the
account dropdown; contextual navigation lives in the chat sidebar. Do not flatten these.

```
Knowledge Base
│
├── Sign in                              (no shell — full-bleed two-panel)
│   ├── Staff credentials
│   ├── Single sign-on
│   └── Signed in (success)  ──────────►  Chat
│
└── Authenticated shell (accent rule + header)
    │
    ├── Account dropdown  ── global navigation, the only top-level nav
    │   ├── Account and profile
    │   ├── Insights
    │   └── Log out  ─────────────────►  Sign in
    │
    ├── Chat                             ── the only screen with a sidebar
    │   ├── Conversation sidebar  ── this IS the history
    │   │   ├── New conversation
    │   │   ├── Search conversations
    │   │   ├── Conversations (list, newest first)
    │   │   └── Footer: Browse by facet · Account and profile
    │   ├── Sidebar rail (collapsed)
    │   │   ├── New conversation
    │   │   ├── Search (re-expands the sidebar)
    │   │   ├── 5 most recent conversations, as initials
    │   │   └── Browse by facet · Insights
    │   └── Chat thread
    │       ├── Empty conversation (three starter questions)
    │       ├── Question turn
    │       ├── Answer turn ── Answered | No answer | Refused
    │       │   └── Trace panel (expandable)
    │       └── Composer
    │
    ├── Browse by facet                  (full width)
    │   ├── Facet rail: Domain · Type · Platform
    │   ├── Active filters
    │   └── Results  ─────────────────►  Page detail
    │
    ├── Page detail                      (full width)
    │   ├── Ask about this page  ─────►  Chat
    │   └── Open in wiki ↗              (leaves the product)
    │
    ├── Insights                         (full width)
    │   ├── Scope: Organisation | You
    │   ├── Trend chart
    │   ├── Most asked  ──────────────►  Chat (asks it)
    │   ├── Coverage gaps  ───────────►  Chat (asks it)
    │   └── Most cited pages
    │
    └── Account and profile              (full width)
        └── Clear all history  ────────►  Chat (no conversation selected)
```

## Screen relationships

| From | Control | To |
|---|---|---|
| Sign in | Sign in / Continue with single sign-on (valid) | Chat |
| Chat | Source pill on an answer | Page detail |
| Chat | Browse by facet (sidebar footer, rail, or No-answer action) | Browse by facet |
| Chat | Account and profile (sidebar footer) | Account and profile |
| Chat | Insights (rail only) | Insights |
| Chat sidebar | Conversation row | Chat, that conversation restored |
| Chat sidebar | New conversation | Chat, empty conversation |
| Browse by facet | Result title | Page detail |
| Page detail | ← Browse | Browse by facet |
| Page detail | Ask about this page | Chat, new conversation, question sent |
| Insights | Most asked row | Chat, new conversation, that question asked |
| Insights | Coverage gaps row | Chat, new conversation, that question asked |
| Account and profile | Clear all history | Chat, no conversation selected |
| Header avatar | Account and profile | Account and profile |
| Header avatar | Insights | Insights |
| Header avatar | Log out | Sign in |

## Back relationships

Only two screens carry an explicit back affordance, because only they are reached from a
single parent:

- **Page detail** → "← Browse" returns to Browse by facet
- **Sign in** is terminal in the unauthenticated direction

Everything else is reached from the sidebar or the account menu, both of which persist — so
no back control is needed and none should be added.
