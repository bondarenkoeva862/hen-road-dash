/**
 * HenRoadDash — RETRO_NEON preset with stage-light accents.
 * `name` stays exactly as the design-system preset (rule 11b).
 */
export const theme = {
  name: 'retro-neon',

  colors: {
    bg: '#151922',
    bgDeep: '#10141C',
    bgInk: '#0A0D14',
    surface: '#1B2030',
    surfaceAlt: '#232A3C',
    chromeTop: '#2A3244',

    accent: '#FFC63F',
    danger: '#EF5245',
    info: '#31BCD0',
    success: '#86CA4A',

    text: '#F9EDD3',
    textSecondary: '#8C93A6',
    textMuted: '#5E6578',

    hairline: 'rgba(249,237,211,0.10)',
    hairlineStrong: 'rgba(249,237,211,0.18)',
    glassFill: 'rgba(249,237,211,0.06)',
    glassBorder: 'rgba(249,237,211,0.14)',
    scrim: 'rgba(10,13,20,0.55)',
  },

  /** Lane triad — left / centre / right stage pads. */
  lanes: ['#EF5245', '#FFC63F', '#31BCD0'] as string[],
  lanesDeep: ['#7E2720', '#7E6117', '#175F6B'] as string[],

  gradients: {
    cta: ['#FFC63F', '#EF5245'] as string[],
    ctaCool: ['#31BCD0', '#2A6FA8'] as string[],
    chrome: ['#2A3244', '#1B2030', '#232A3C'] as string[],
    sheet: ['#1B2030', '#151922'] as string[],
    stage: ['#151922', '#10141C'] as string[],
    spectrum: ['#EF5245', '#FFC63F', '#31BCD0'] as string[],
    barGood: ['#86CA4A', '#FFC63F'] as string[],
    barLow: ['#EF5245', '#FFC63F'] as string[],
    medallion: ['#2A3244', '#151922'] as string[],
    loaderVeil: [
      'rgba(8,10,16,0.92)',
      'rgba(21,25,34,0.88)',
      'rgba(8,10,16,0.95)',
    ] as string[],
    menuVeil: ['transparent', 'rgba(21,25,34,0.35)', '#151922'] as string[],
    winWash: ['rgba(134,202,74,0.16)', 'rgba(27,32,48,0)'] as string[],
    loseWash: ['rgba(239,82,69,0.16)', 'rgba(27,32,48,0)'] as string[],
  },

  radius: {
    sm: 12,
    md: 16,
    lg: 20,
    xl: 28,
    pill: 999,
  },

  space: {
    screenX: 20,
    gap: 12,
    statusBar: 44,
  },
};

export const C = theme.colors;
export const NUMERIC = {fontVariant: ['tabular-nums' as const]};
