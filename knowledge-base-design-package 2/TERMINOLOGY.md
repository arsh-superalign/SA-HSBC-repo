# Terminology

The prototype's exact vocabulary. Use these words in UI copy, component names, routes, types
and commit messages. Do not normalise them into generic developer terminology.

## Screen names

| Use this | Not this |
|---|---|
| **Sign in** | Login, Auth |
| **Chat** (the unified Ask + History surface) | Conversation view, Assistant, Ask |
| **Browse by facet** | Search, Explore, Directory |
| **Page detail** | Document view, Article |
| **Insights** | Analytics, Dashboard, Reports |
| **Account and profile** | Settings, Preferences, Profile |

Note the prototype's own heading text: the chat screen's empty state reads **"Ask the wiki"**,
which is the invitation — not the screen name.

## Navigation labels

Account dropdown, in this order: **Account and profile** · **Insights** · **Log out**

Sidebar footer links: **Browse by facet** · **Account and profile**

Sidebar controls: **New conversation** · **Search conversations** · **Conversations** (section
overline) · **Clear all history** (on Account and profile)

Header controls: **Collapse sidebar** / **Expand sidebar** (tooltip text, chat screen only)

## Entities

| Term | Meaning | Never call it |
|---|---|---|
| **Conversation** | One thread of questions and answers, machine-local | Chat, session, thread |
| **Question** | What the user asks | Query, prompt, message |
| **Answer** | The composed response, when one exists | Response, result, completion |
| **Source** | A page a claim is numbered to | Citation, reference, link |
| **Withheld page** | A returned link the user may not read | Blocked, restricted, denied |
| **Space** | A permissioned area of the wiki | Workspace, folder, collection |
| **Facet** | A classification axis (Domain, Type, Platform) | Filter, tag, category |
| **Page** | A wiki page the service holds metadata about | Document, article, entry |
| **Trace** | The provenance panel behind "How this answer was found" | Log, debug, audit |

## Status labels

| Domain | Values |
|---|---|
| Conversation outcome | **Answered** · **No answer** · **Refused** · **Not asked yet** |
| Returned link | **Withheld** · **Empty page** |
| Facet assignment | **RULE** · **MODEL** |

## Copy that must be preserved verbatim

These lines carry product meaning, not decoration.

| Where | Copy |
|---|---|
| Sign in, brand panel h1 | "Ask the wiki. Get answers you are permitted to see." |
| Sign in, brand panel lede | "Permissions are resolved on every question. Pages are fetched with your own wiki session — the service never holds page text." |
| Sign in, form sub | "Use your staff credentials. This machine is registered to DEV-LDN-4471." |
| Sign in, SSO note | "Single sign-on adds no extra step — no page is fetched without your own session." |
| Auth success | "Signed in as D. Kaur" / "Opening the knowledge base" / "Resolving the spaces you can read…" |
| Chat, empty state h1 | "Ask the wiki" |
| Composer placeholder | "Ask the wiki…" |
| Composer footnote | "Answers come only from pages you can read" |
| No answer | "No answer — the search returned 3 links and none could be fetched with your credentials." |
| Withheld title | "— title withheld —" |
| Refused, headline | "The search was refused, not run." |
| Refused, body | "Permissions could not be resolved, so the service failed closed. Nothing was searched." |
| Refused, meta | "Last successful check 47 min ago" |
| Trace, terms overline | "Added by the model — 3, each removable" |
| Trace, closing line | "The model can only add candidates — it can never remove your wording." |
| Trace disclosure trigger | "How this answer was found +" / "Hide how this was found −" |
| Sidebar empty (no conversations) | "No conversations yet" / "Start one with New conversation. History stays on this machine." |
| Sidebar empty (search miss) | "Nothing matches your search" / "Clear the search to see every conversation." |
| No conversation selected | "No conversation selected" / "History is local to this machine and you have cleared it. Start a new conversation to ask the wiki again." |
| Browse, sub | "For when you would rather look than ask. Only pages you can read are listed." |
| Browse, no match | "No pages match these facets" / "The active filters are the likely cause: {list}" |
| Page detail, primary panel | "No page text is stored here." / "Reading happens in the wiki, under wiki permissions." |
| Page detail, ingest | "Page body — never read" |
| Insights, sub | "What people ask, what comes back, and what the wiki is missing." |
| Insights, gaps description | "Asked repeatedly, never answered" |
| Account, sub | "Session and permission facts. The product holds no profile beyond what your wiki session provides." |
| Account, withheld note | "Withheld pages are counted, never named." |
| Account, machine note | "Conversation history is stored locally and never leaves this machine." |

## Actions

**New conversation** · **Send** · **Show more** / **Show less** · **Request access** ·
**Retry** · **Service status** · **Browse by facet** · **Open in wiki ↗** ·
**Ask about this page** · **Clear all filters** · **Clear all history** · **Log out** ·
**Sign in** · **Continue with single sign-on** · **Forgotten your password?**

## Field names

**Staff ID** · **Password** · "Keep this machine registered for 30 days" ·
**Search conversations** · **Domain** · **Type** · **Platform** · **Document type** ·
**Language** · **Sign-in method** · **Machine** · **Service** · **Permissions refreshed** ·
**Readable spaces**

## Column and label names

Page detail facet rows: **Domain** · **Document type** · **Platform** · **Language**, each
with a **RULE**/**MODEL** badge and a confidence value.

Insights KPI labels: **Questions asked** · **Answered** · **No answer** · **Refused** ·
**Median time** · **People asking**

Insights columns: **Most asked** ("Click to ask it yourself") · **Coverage gaps** ("Asked
repeatedly, never answered") · **Most cited pages** ("Answers drawn from")

Trend legend: **asked** · **answered** · **no answer**

Page detail panels: **Facets** ("How the page was classified, and by what") ·
**Parent pages** · **Read at ingest** · **Relationships** (**links in** / **links out**)
