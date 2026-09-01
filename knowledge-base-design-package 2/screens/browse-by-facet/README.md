# Screen — Browse by facet

**Route** `/browse`
**Level** Authenticated shell, full width. No sidebar.
**Spec** `../../DESIGN_SPEC.md` → Screen 3

## Purpose

The second way in, for when the user would rather look than ask. Only pages they can read are
listed.

## Layout

252px facet rail beside a results column, inside a 1180px page column. Stacks below 1024px.

## Components

Facet rail (three groups) · active filter chips · result card · empty results.

## Content

Groups: Domain · Type · Platform — each ending in **"None of these"**, a real selectable value.
Six pages with breadcrumbs and facet tags. Default filters: Domain "Identity › Credentials",
Type "Runbook".

## Interactions

One value per group, toggling. Chips clear a single group. Result titles open Page detail.
Open in wiki confirms via toast.

## States

Filtered (default) · no filters · no match · facet selected / deselected.

## Navigation

→ Page detail (result title). ← Chat (via the sidebar, which is not rendered here — use the
header wordmark or the account menu).

## Visual details

- **"None of these" is not an empty state** and must not be styled as one.
- Cards carry title, breadcrumb and tags — **no excerpt**, because no page body is stored.
- The no-match state names the active filters as the likely cause.
