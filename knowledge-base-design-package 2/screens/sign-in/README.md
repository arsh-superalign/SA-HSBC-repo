# Screen — Sign in

**Route** `/login`
**Level** Unauthenticated. No app shell.
**Spec** `../../DESIGN_SPEC.md` → Screen 1

## Purpose

Authenticate with staff credentials or single sign-on, and set the expectation that the
service reads the wiki with the user's own session.

## Layout

Two panels at ≥1024px (`1.1fr / 1fr`); the form alone below that.

- **Left — brand panel** `#1A1A1A`, 56px padding, space-between: wordmark; 42px h1 with lede
  and three stat columns; footer links.
- **Right — form panel** `#FFFFFF`, centred, 400px max column, 24px gaps.

## Components

Brand panel · tab pair · Field ×2 · checkbox · Alert (danger) · primary button · text link ·
auth success panel. See `../../COMPONENTS.md`.

## Content

Verbatim copy is in `../../TERMINOLOGY.md` → "Copy that must be preserved verbatim".

## Interactions

`../../INTERACTIONS.md` → Sign in. Tabs swap fields; validation on submit; Enter submits;
three-beat success transition.

## States

Staff credentials · Single sign-on · field validation error · banner error · authenticating ·
signed in. See `../../states/README.md` → Authentication states.

## Navigation

→ Chat on success. No other exit.

## Visual details

- The brand panel is the product's only large dark surface.
- Fields are 46px, 1px `#808080`, radius 2px.
- The success progress bar is 4px, `#E5E5E5` track, `#B0132B` fill at 70%.
