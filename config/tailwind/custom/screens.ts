const sm = '640px';
const md = '768px';
const lg = '1024px';
const xl = '1280px';
const xl2 = '1536px';

export const screens = {
  sm,
  md,
  lg,
  xl,
  '2xl': xl2,
};

export const minBreakpoints = {
  sm: sm,
  md: md,
  lg: lg,
  xl: xl,
  '2xl': xl2,
};

// Max breakpoints
export const maxBreakpoints = {
  'max-sm': { max: sm },
  'max-md': { max: md },
  'max-lg': { max: lg },
  'max-xl': { max: xl },
  'max-2xl': { max: xl2 },
};
