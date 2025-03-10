import {createTheme} from '@shopify/restyle';

const palette = {
  auburn: '#A62639',
  amaranth: '#DB324D',
  wenge: '#56494E',
  taupeGray: '#A29C9B',
  chocolateCosmos: '#511c29',

  white: '#ffffff',
  gray: '#7C7375',
};

export const theme = createTheme({
  colors: {
    ...palette,

    background: palette.taupeGray,
    backgroundContrast: palette.gray,

    primary: palette.chocolateCosmos,
    primaryContrast: palette.wenge,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s12: 12,
    s16: 16,
    s20: 20,
    s24: 24,
    s28: 28,
    s32: 32,
    s36: 36,
    s40: 40,
    s48: 48,
  },
  borderRadii: {
    s8: 8,
    s12: 12,
    s16: 16,
  },
  textVariants: {
    defaults: {},
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
