export type Color = typeof color;

const color = {
  real_black: '#000',
  real_white: '#FFF',
  gray_black: '#242424',
  black: '#1C1C1C',
  white: '#FFFEF2',
  black_alpha: 'rgba(28, 28, 28, 0.95)',
  black_alpha2: 'rgba(28, 28, 28, 0.4)',
  background: '#C2C0B5',
  medium: '#F6EFE2',
};

export const createColor = () => {
  return color;
};
