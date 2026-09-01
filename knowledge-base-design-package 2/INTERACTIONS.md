# Interaction model

What the prototype actually does. Every control listed here resolves — there are no
decorative buttons.

## Global

### Account dropdown
- Trigger: avatar button in the header, showing initials and the user's name
- Opens on click; `aria-expanded` on the trigger, `role="menu"` on the content
- Header shows the user's name, email and "4 spaces readable"
- Items: **Account and profile** → `/account`; **Insights** → `/insights` (with the hint
  "Org and you" right-aligned); **Log out** → clears the session and returns to Sign in
- Dismissal: Escape, a click outside the trigger and menu, or selecting an item
- Focus returns to the trigger on close

### Sidebar collapse
- Trigger: panel button, leftmost in the header. **Rendered only on the chat screen**
- Tooltip reads "Collapse sidebar" or "Expand sidebar" to match the current state
- Expanded (272px) ⇄ collapsed rail (70px)
- Below 1024px the sidebar becomes a slide-over sheet instead, and the same control opens it

### Toast
- Fires on any action that would reach a backend
- Auto-dismisses after ~3.2s; a close button dismisses immediately
- A new toast replaces the current one — only one is visible at a time

## Sign in

| Control | Behaviour |
|---|---|
| Staff credentials / Single sign-on tabs | Swap the field set. Entered values persist per tab. Clears the error banner |
| Staff ID | Validates: required, 6–8 digits. Error clears on edit |
| Password | Validates: required, minimum 8 characters. Error clears on edit |
| Keep this machine registered | Toggles. Default on |
| Enter, in either field | Submits the form |
| Sign in | Validates. On failure: inline field errors plus the banner "Check the highlighted fields and try again." On success: button enters loading with the label "Signing in…" |
| Continue with single sign-on | No fields to validate. Loading label "Authenticating…" |
| Forgotten your password? | Toast: password reset raised with the service desk |

**Success sequence** — this is a deliberate three-beat transition, not a redirect:
1. ~900ms loading state on the button
2. Success panel replaces the form: green "Signed in as D. Kaur" alert, heading "Opening the
   knowledge base", sub "Resolving the spaces you can read…", and a progress bar
3. ~900ms later the chat screen mounts

Skipping beat 2 makes the transition read as an unexplained flash.

## Chat

### Sidebar (expanded)
| Control | Behaviour |
|---|---|
| New conversation | Creates an empty conversation, prepends it to the list, selects it, and shows the empty state. Clears any active search |
| Search conversations | Filters the list by title, case-insensitive, as you type. A clear button appears once there is text |
| Conversation row | Selects that conversation and restores its full thread |
| Row delete (✕) | Removes it and toasts. If it was active, selection falls to the next conversation, or to "no conversation selected" if none remain |
| Browse by facet | Navigates to Browse |
| Account and profile | Navigates to Account |

Each row shows an outcome dot and a single truncated title. No timestamp, no second line.

### Sidebar (collapsed rail)
| Control | Behaviour |
|---|---|
| + | New conversation |
| Search | Re-expands the sidebar (there is no room to type in the rail) |
| Conversation initial ×5 | Selects that conversation. Tooltip carries the full title |
| Browse by facet | Navigates to Browse |
| Insights | Navigates to Insights |

Every rail control has a tooltip, because the label is the only thing the collapse removed.

### Composer
| Control | Behaviour |
|---|---|
| Textarea | Single line that grows. Placeholder "Ask the wiki…" |
| Enter | Sends |
| Shift-Enter | Inserts a line break |
| Send (↑) | Disabled and greyed while empty or sending; accent-filled when there is text. Shows a spinner while sending |

Sending a question:
1. The question appears immediately as a right-aligned bubble
2. If it was the conversation's first message, the conversation title becomes that question
3. An answer-shaped skeleton appears (three pulsing bars behind the accent mark)
4. ~1.1s later the answer replaces the skeleton
5. The thread scrolls to the newest turn

### Which outcome a question produces
The prototype routes on wording so all three states are reachable by clicking real content:

| Question contains | Outcome |
|---|---|
| "signing key" or "revoke" | **No answer** |
| "retry policy" | **Refused** |
| anything else | **Answered** |

In production the service decides this. Preserve the three-way branch.

### Answer turn — Answered
| Control | Behaviour |
|---|---|
| Show more / Show less | Answers clamp at 280 characters on a word boundary. Per-message, independent |
| Source pill | Navigates to that page's detail view. Truncates at 230px with the full title as a native tooltip |
| Withheld count | Static text, amber. Native tooltip: "Withheld pages are counted, never named" |
| How this answer was found + | Expands the trace panel. Label becomes "Hide how this was found −" |

### Answer turn — No answer
| Control | Behaviour |
|---|---|
| Returned links list | Read-only. Withheld rows show "— title withheld —"; the readable-but-empty row shows its title |
| Request access | Toast: access request raised for the withheld pages, routed to the space owners |
| Browse by facet | Navigates to Browse |
| How this answer was found + | Same trace panel |

### Answer turn — Refused
| Control | Behaviour |
|---|---|
| Service status | Toast: opening the platform status page |
| Retry | Toast: retrying, resolving readable spaces |
| How this answer was found + | Same trace panel |

The refused block states what did *not* happen — nothing was searched, so there is no list to
show. That absence is the message.

### Trace panel
| Control | Behaviour |
|---|---|
| Six numbered steps | Read-only. Each carries an optional MODEL or PERM badge and a duration |
| Term chip ✕ | Removes that added term from the list. Per-message |

The closing line is load-bearing: the model can only add candidates, never remove the user's
wording.

### Empty conversation
Three starter questions, each of which sends immediately on click. They are chosen so one
reaches each outcome.

### No conversation selected
Reached by clearing all history. Offers a single "New conversation" action.

## Browse by facet

| Control | Behaviour |
|---|---|
| Facet value | Toggles. One value per group — selecting a second replaces the first. `aria-pressed` reflects state |
| "None of these" | A real value. Selecting it filters to pages carrying it |
| Active filter chip ✕ | Clears that group only |
| Result count | Live, right-aligned in the filter bar |
| Result title | Navigates to Page detail |
| Open in wiki ↗ | Toast: opening in the wiki under wiki permissions |
| Clear all filters | Only in the no-match state. Clears every group |

Default selection is Domain: "Identity › Credentials" and Type: "Runbook".

When nothing matches, the empty state names the active filters as the likely cause rather
than shrugging.

## Page detail

| Control | Behaviour |
|---|---|
| ← Browse | Returns to Browse by facet |
| Ask about this page | Creates a new conversation, navigates to chat, and sends "What does the {page title} say?" |
| Open in wiki ↗ | Toast: opening in the wiki. This is the primary action and it leaves the product |

Facet rows, parent pages, ingest list and relationship counts are all read-only.

## Insights

| Control | Behaviour |
|---|---|
| Scope: Organisation / You | Toggles. Layout is identical either way |
| Period select | Last 30 days / Last 7 days / Last quarter |
| Granularity: Daily / Weekly | Swaps the trend chart's three series and its axis labels |
| Most asked row | Creates a new conversation and asks that question |
| Coverage gaps row | Creates a new conversation and asks that question |
| Most cited pages row | Read-only — these are pages, not questions |

Coverage gaps is the only list with accent emphasis, because it is the one that tells wiki
owners what to write next.

## Account and profile

| Control | Behaviour |
|---|---|
| Clear all history | Empties every conversation and toasts. The chat screen then shows "no conversation selected" |

Profile and session rows are read-only — the product holds no profile of its own beyond the
wiki session.

## Keyboard

| Key | Context | Action |
|---|---|---|
| Enter | Login fields | Submit |
| Enter | Composer | Send |
| Shift-Enter | Composer | New line |
| Escape | Account menu open | Close, focus returns to trigger |
| Escape | Sidebar sheet open (compact) | Close |
| Tab | Everywhere | Visible focus ring: 2px accent, 2px offset. Never removed |
