import { transparentize, darken } from 'polished';

const colors = {
  brandPrimary: 'rgb(255, 87, 34)',
  darkGrey: '#777777',
  grey: '#dddddd',
  lightGrey: '#f9f9f9',
  purple: '#5b4681',
  transparent: 'transparent',
  transparentBlue: 'rgba(77, 119, 179, 0.8)',
  transparentGrey: 'rgba(0, 0, 0, 0.15)',
  transparentGreyDark: 'rgba(0, 0, 0, 0.5)',
  circleBackground: 'grey',
  white: 'white',

  brandLightBlue: '#93aca7',
  brandOrange: '#f76d06',
  brandRed: '#b40000',
  brandLightGrey: '#8c9cb1',
  brandDarkGrey: '#2f4f4f',
};

// const spacing = {

// }

const breakpoints = {
  tablet: '768px',
};

const theme = {
  // Colors
  ...colors,

  // Breakpoints
  breakpoints,

  // Spacing
  defaultSpacing: '1.4rem',
  doubleSpacing: '2.8rem',
  halfSpacing: '0.7rem',
  siteMaxWidth: '75rem',

  // Font sizes
  baseFontSize: '1.6rem',
  largeFontSize: '2.4rem',
  smallFontSize: '1.4rem',
  footerFontSize: '1.6rem',

  // Form inputs
  inputBorder: colors.grey,
  inputSpacing: '1rem',

  // Boxed view variables
  boxedViewOverlayBackground: colors.transparentGreyDark,
  boxedViewBackground: colors.white,

  // Button
  buttonBackground: colors.transparentGrey,
  buttonColor: colors.brandPrimary,
  buttonPillColor: colors.purple,
  buttonSecondaryBackgroun: colors.lightGrey,
  buttonSecondaryColor: colors.darkGrey,
  buttonSecondaryBorderColor: colors.grey,

  // Header
  headerBackground: colors.transparentBlue,
  headerColor: colors.white,

  // Item
  itemBackground: transparentize(0.2, colors.lightGrey),
  itemBorder: darken(0.08, colors.lightGrey),
  itemTextColor: colors.darkGrey,

  // Footer
  footerBackground: colors.transparent,
  footerColor: colors.grey,
};

export default theme;
