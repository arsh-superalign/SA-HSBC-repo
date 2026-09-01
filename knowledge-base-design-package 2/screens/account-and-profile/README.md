# Screen — Account and profile

**Route** `/account`
**Level** Authenticated shell, full width. Reached from the account dropdown or the chat
sidebar footer.
**Spec** `../../DESIGN_SPEC.md` → Screen 6

## Purpose

Show the session and permission facts, and offer the one destructive control the product has.

## Layout

Profile card beside a 320px side column (readable spaces, this machine), inside a 940px page
column.

## Components

Profile card (avatar + definition rows) · readable-spaces counters · machine card with the
destructive action.

## Content

Sign-in method · Machine · Service (monospace) · Permissions refreshed. Readable spaces:
4 readable / 2 withheld, with "Withheld pages are counted, never named." Machine card:
"Conversation history is stored locally and never leaves this machine."

## Interactions

**Clear all history** empties every conversation and toasts; the chat screen then shows "no
conversation selected". Everything else is read-only.

## States

Default · history cleared.

## Navigation

→ Chat · → Insights (both via the account dropdown).

## Visual details

- The withheld counter is `#8A5A00`; the readable counter is `#000000`.
- Clear all history is a **destructive secondary**, not a filled button — it is not the page's
  primary action.
