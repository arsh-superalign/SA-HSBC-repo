# Screen — Page detail

**Route** `/page/:pageId`
**Level** Authenticated shell, full width.
**Spec** `../../DESIGN_SPEC.md` → Screen 4

## Purpose

Show everything the shared service holds about a page — and make clear that the page text is
not part of it.

## Layout

Back link, then a 1.8fr main column beside a 320px side column, inside a 1180px page column.

## Components

Facet table (RULE / MODEL badges + confidence) · parent pages · read-at-ingest list ·
relationship counters.

## Content

Primary panel: "No page text is stored here." / "Reading happens in the wiki, under wiki
permissions." Facets: Domain, Document type, Platform, Language. Ingest list ends with
"Page body — never read".

## Interactions

← Browse returns. **Ask about this page** creates a new conversation and sends
"What does the {page title} say?". **Open in wiki ↗** is the primary action and leaves the
product.

## States

Default.

## Navigation

← Browse by facet · → Chat (Ask about this page) · → the wiki.

## Visual details

- The primary action leaving the product is correct — reading is the wiki's job.
- "Page body — never read" carries a ✕ in `#808080`, deliberately unlike the ✓ rows above.
- RULE badges are neutral; MODEL badges are info-toned; confidence is monospace.
