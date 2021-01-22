/**
 * Main Color
 */
const BLACK = '#333333';
const BLUE = '#05559f';
const BRIGHT_BLUE = '#04559F';
const SOFT_GRAY = '#BDBDBD';
const WHITE = '#FFFFFF';
const SOFT_YELLOW = '#F79931';

/**
 * Opacity main colors in solid hex values
 */
const BLACK50 = 'rgba(0, 0, 0, 0.5)';
const BLUE50 = 'rgba(5, 85, 159, 0.5)';
const SOFT_BLUE08 = 'rgba(221, 226, 255, 0.08)';
const SOFT_BLUE10 = 'rgba(242, 246, 250, 0.1)';
const GRAY30 = '#CDCFD0';
const GRAY90 = '#E5E5E5';

/**
 * Contextual color names based on usage
 */
export const PRIMARY = BLUE;

export const TEXT = {
  default: BLACK,
  primary: PRIMARY,
  secondary: WHITE,
  disabled: SOFT_GRAY,
};

export const TEXT_INPUT = {
  disabled: GRAY90,
};

export const BUTTON = {
  default: {
    background: PRIMARY,
    text: WHITE,
    hover: PRIMARY,
    loading: WHITE,
    border: PRIMARY,
  },
  primary: {
    background: WHITE,
    text: GRAY30,
    hover: GRAY90,
    loading: BLACK,
    border: GRAY90,
  },
  secondary: {
    background: SOFT_YELLOW,
    text: WHITE,
    hover: SOFT_YELLOW,
    loading: WHITE,
    border: SOFT_YELLOW,
  },
  disabled: {
    background: SOFT_BLUE08,
    text: SOFT_GRAY,
    loading: WHITE,
    border: SOFT_GRAY,
  }
};

export const ICON = {
  default: BLACK,
  primary: PRIMARY,
  secondary: WHITE,
  disabled: GRAY90,
};

export const HEADER = {
  background: PRIMARY,
  shadow: GRAY30,
};

export const FOOTER = {
  background: PRIMARY,
};
