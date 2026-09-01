# Screen — Insights

**Route** `/insights`
**Level** Authenticated shell, full width. Reached from the **account dropdown**, or the rail.
**Spec** `../../DESIGN_SPEC.md` → Screen 5

## Purpose

Show what people ask, what comes back, and what the wiki is missing.

## Layout

Header with scope toggle and period select; 6-tile KPI strip; trend chart with a granularity
toggle; three ranked lists. 1280px page column.

## Components

KPI strip (hairline grid) · trend chart (three series, inline SVG) · ranked list ×3 · scope and
granularity toggles · period select.

## Content

Six KPIs with deltas. Chart "Asked, answered and unanswered". Most asked · **Coverage gaps** ·
Most cited pages. Figures in `../../DESIGN_SPEC.md` → Screen 5.

## Interactions

Scope toggles Organisation / You (identical layout). Granularity swaps the series and axis.
Most asked and Coverage gaps rows open a new conversation and ask that question. Most cited
rows are read-only.

## States

Scope · period · granularity.

## Navigation

→ Chat (asking a listed question).

## Visual details

- KPI strip uses `gap: 1px` over a hairline background — exact separators, no double borders.
- The three series differ by **dash pattern as well as colour**.
- **Coverage gaps is the only list with accent emphasis** — it drives action.
