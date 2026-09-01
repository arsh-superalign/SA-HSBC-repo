/**
 * Knowledge Base design tokens — typed.
 * Extracted from the Knowledge Dashboard v2 prototype. See DESIGN_TOKENS.md.
 */

export const color = {
  accent: '#B0132B',
  accentPressed: '#8C0F22',
  accentSurface: '#FCF3F4',
  accentBorder: '#EBC3C9',

  ink: '#000000',
  body: '#1A1A1A',
  subtle: '#4D4D4D',
  muted: '#666666',
  faint: '#808080',
  ghost: '#999999',
  onDark: '#FFFFFF',
  onDarkMuted: '#CCCCCC',

  surface: '#FFFFFF',
  canvas: '#F2F2F2',
  sunken: '#F8F8F8',
  inverse: '#1A1A1A',

  lineStrong: '#808080',
  hairline: '#D9D9D9',
  divider: '#E5E5E5',
  dividerLight: '#F2F2F2',
  lineDisabled: '#CCCCCC',

  success: '#1B6B3A',
  successSurface: '#F2F8F4',
  successBorder: '#BFD9C6',
  warning: '#8A5A00',
  warningSurface: '#FBF7EE',
  warningBorder: '#E6D3AE',
  danger: '#B0132B',
  dangerSurface: '#FCF3F4',
  dangerBorder: '#EBC3C9',
  info: '#0B3B60',
  infoSurface: '#F3F7FA',
  infoBorder: '#C3D4E0',

  chartPrimary: '#1A1A1A',
  chartAnswered: '#1B6B3A',
  chartNone: '#B0132B',
  chartGrid: '#E5E5E5',
  chartGridLight: '#F2F2F2',
} as const;

export const font = {
  sans: 'Arial, Helvetica, sans-serif',
  mono: 'ui-monospace, Menlo, monospace',
} as const;

/** Only weights 400 and 500 are used. There is no bold body copy. */
export const type = {
  display:    { size: 42, line: 1.15, weight: 400, tracking: '-0.015em' },
  h1:         { size: 28, line: 1.25, weight: 400, tracking: '-0.01em' },
  h2:         { size: 21, line: 1.3,  weight: 400, tracking: 'normal' },
  h3:         { size: 19, line: 1.35, weight: 400, tracking: 'normal' },
  section:    { size: 20, line: 1.3,  weight: 500, tracking: 'normal' },
  cardTitle:  { size: 17, line: 1.3,  weight: 500, tracking: 'normal' },
  lead:       { size: 17, line: 1.6,  weight: 400, tracking: 'normal' },
  prose:      { size: 16, line: 1.7,  weight: 400, tracking: 'normal' },
  input:      { size: 16, line: 1.5,  weight: 400, tracking: 'normal' },
  base:       { size: 15, line: 1.55, weight: 400, tracking: 'normal' },
  sm:         { size: 14, line: 1.5,  weight: 400, tracking: 'normal' },
  caption:    { size: 13, line: 1.4,  weight: 400, tracking: 'normal' },
  overline:   { size: 12, line: 1.4,  weight: 400, tracking: '0.08em' },
  kpiLabel:   { size: 12, line: 1.4,  weight: 400, tracking: '0.06em' },
  micro:      { size: 11, line: 1.4,  weight: 400, tracking: '0.08em' },
  badge:      { size: 10, line: 1.5,  weight: 400, tracking: '0.06em' },
  metric:     { size: 29, line: 1,    weight: 400, tracking: 'normal' },
  metricSm:   { size: 26, line: 1,    weight: 400, tracking: 'normal' },
  wordmark:   { size: 16, line: 1,    weight: 400, tracking: '0.2em' },
} as const;

export const space = {
  1: 4, 2: 8, 3: 12, 4: 16, 5: 20, 6: 24, 7: 32, 8: 40, 9: 56,
} as const;

export const radius = { none: 0, sm: 2 } as const;

export const shadow = {
  cardHover: '0 1px 4px rgba(0,0,0,.08)',
  menu: '0 4px 12px rgba(0,0,0,.10)',
  dialog: '0 8px 24px rgba(0,0,0,.12)',
  overlay: '0 4px 12px rgba(0,0,0,.18)',
} as const;

export const layout = {
  accentRule: 4,
  headerHeight: 60,
  sidebarWidth: 272,
  sidebarRail: 70,
  sidebarSheet: 288,
  chatColumn: 720,
  contentColumn: 1180,
  insightsColumn: 1280,
  accountColumn: 940,
  loginForm: 400,
  facetRail: 252,
  detailSide: 320,
} as const;

export const control = {
  chip: 34,
  sm: 36,
  md: 40,
  lg: 42,
  page: 44,
  field: 46,
  login: 48,
} as const;

export const motion = {
  fast: '120ms ease',
  base: '150ms ease',
  panel: '200ms ease',
  progress: '250ms ease',
  spin: '0.7s linear infinite',
  breathe: '1.4s ease-in-out infinite',
} as const;

export const focusRing = {
  outline: `2px solid ${color.accent}`,
  outlineOffset: '2px',
} as const;

export const breakpoints = { sm: 480, md: 768, lg: 1024, xl: 1280 } as const;

/** Status tone -> presentation. Every tone must also supply a glyph and a word. */
export type Tone = 'success' | 'warning' | 'danger' | 'info' | 'neutral';

export const tone: Record<Tone, { fg: string; bg: string; bd: string; glyph: string }> = {
  success: { fg: color.success, bg: color.successSurface, bd: color.successBorder, glyph: '\u2713' },
  warning: { fg: color.warning, bg: color.warningSurface, bd: color.warningBorder, glyph: '!' },
  danger:  { fg: color.danger,  bg: color.dangerSurface,  bd: color.dangerBorder,  glyph: '\u2715' },
  info:    { fg: color.info,    bg: color.infoSurface,    bd: color.infoBorder,    glyph: 'i' },
  neutral: { fg: color.subtle,  bg: color.sunken,         bd: color.hairline,      glyph: '\u2013' },
};

/** Compose a CSS font shorthand from a type token. */
export function fontOf(key: keyof typeof type, family: string = font.sans): string {
  const t = type[key];
  return `${t.weight} ${t.size}px/${t.line} ${family}`;
}
