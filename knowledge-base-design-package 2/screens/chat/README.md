# Screen — Chat

**Route** `/chat`, `/chat/:conversationId`
**Level** Authenticated shell. **The only screen with a sidebar.**
**Spec** `../../DESIGN_SPEC.md` → Screen 2

## Purpose

Ask the wiki and read the answer, with every previous conversation one click away. This screen
replaces what were separate Ask and History surfaces — **the sidebar is the history**.

## Layout

```
sidebar 272px (or 70px rail, or a sheet below 1024px)
thread  centred 720px column, 32px between turns
        question  right-aligned bubble, max 72%
        answer    full width behind a 22px accent mark
composer 720px column, 36px send button, one footnote
```

## Components

Conversation sidebar · sidebar rail · conversation row · conversation search · chat thread ·
question turn · answer turn (three variants) · source pills · trace disclosure · composer ·
empty conversation · loading turn · no-conversation state.

## Content

Five seeded conversations covering all three outcomes, plus a two-turn thread demonstrating a
follow-up. Full content in `../../DESIGN_SPEC.md` → Screen 2.

## Interactions

`../../INTERACTIONS.md` → Chat. Sidebar create / select / delete / search; collapse to rail;
send with Enter; truncation; source navigation; trace expansion; term removal; per-outcome
actions.

## States

Empty · populated · searching · no conversation selected · answered · no answer · refused ·
trace open · truncated / expanded · sidebar expanded / collapsed / sheet · search filtered /
miss / empty. See `../../states/README.md`.

## Navigation

→ Page detail (source pill) · Browse by facet · Insights (rail) · Account and profile.

## Visual details

- **The question is a bubble; the answer is not.** No "You" / "Answer" captions.
- Answers clamp at 280 characters on a word boundary.
- The loading state is answer-shaped so the answer does not shift the layout.
- Turns are separated by rhythm, never by rules.
