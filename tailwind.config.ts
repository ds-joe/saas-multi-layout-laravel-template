// Dependencies
import withMT from '@material-tailwind/react/utils/withMT';

// Custom configs
import customFonts from './config/tailwind/custom/fonts';
import customColors from './config/tailwind/custom/colors';
import {
  screens as customScreens,
  minBreakpoints as customMinScreens,
  maxBreakpoints as customMaxScreens,
} from './config/tailwind/custom/screens';

// Types
import type { Config } from 'tailwindcss';

const config: Config = withMT({
  darkMode: 'class',
  content: [
    './resources/**/*.{ts,tsx,blade.php,scss}',
    './storage/framework/views/**/*.{css,php,html}',
    './node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.3rem',
      screens: {
        '2xl': '1400px',
      },
    },
    screens: {
      ...customScreens,
      ...customMinScreens,
      ...customMaxScreens,
    },

    extend: {
      fontFamily: {
        ...customFonts,
      },
      colors: customColors,
    },
  },

  plugins: [],
}) as Config;

export default config;
