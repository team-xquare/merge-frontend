export const color = {
  //basic
  white: '#FFFFFF',
  black: '#000000',

  //grayScale
  gray50: '#FAFAFA',
  gray100: '#E0E0E0',
  gray200: '#C7C7C7',
  gray300: '#ADADAD',
  gray400: '#949494',
  gray500: '#7A7A7A',
  gray600: '#616161',
  gray700: '#474747',
  gray800: '#2E2E2E',
  gray900: '#141414',

  //brand/primary
  primary50: '#E2E5E9',
  primary100: '#B6BDC8',
  primary200: '#8592A3',
  primary300: '#54667E',
  primary400: '#304563',
  primary500: '#0B2447',
  primary600: '#0A2040',
  primary700: '#081B37',
  primary800: '#06162F',
  primary900: '#030D20',

  primaryA100: '#5D87FF',
  primaryA200: '#2A62FF',
  primaryA400: '#0041F6',
  primaryA700: '#003ADC',

  //brand/secondary
  secondary50: '#FBFEF2',
  secondary100: '#F5FEDE',
  secondary200: '#EFFDC9',
  secondary300: '#E9FCB3',
  secondary400: '#E4FBA2',
  secondary500: '#DFFA92',
  secondary600: '#DBF98A',
  secondary700: '#D7F97F',
  secondary800: '#D2F875',
  secondary900: '#CAF663',

  secondaryA100: '#FFFFFF',
  secondaryA200: '#FFFFFF',
  secondaryA400: '#FEFFFD',
  secondaryA700: '#F7FFE4',

  //system/danger.red
  danger50: '#FFE5EA',
  danger100: '#FFCDD5',
  danger200: '#F09999',
  danger300: '#E77474',
  danger400: '#F15555',
  danger500: '#F44336',
  danger600: '#E63434',
  danger700: '#D22D2D',
  danger800: '#BC2828',
  danger900: '#B21919',

  //system/warning.orange
  warning50: '',
  warning100: '',
  warning200: '',
  warning300: '',
  warning400: '',
  warning500: '',
  warning600: '',
  warning700: '',
  warning800: '',
  warning900: '',

  //system/success.green
  success50: '',
  success100: '',
  success200: '',
  success300: '',
  success400: '',
  success500: '',
  success600: '',
  success700: '',
  success800: '',
  success900: '',

  //system/link.blue
  link50: '',
  link100: '',
  link200: '',
  link300: '',
  link400: '',
  link500: '',
  link600: '',
  link700: '',
  link800: '',
  link900: '',
} as const;

export const { white, black } = color;

export type colorKeyOfType = keyof typeof color;
