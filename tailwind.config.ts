// Shadcn configs
import shadcnAnimation from './config/tailwind/shadcn/animation';
import shadcnBorderRadius from './config/tailwind/shadcn/borderRadius';
import shadcnColors from './config/tailwind/shadcn/colors';
import shadcnKeyframes from './config/tailwind/shadcn/keyframes';
import shadcnOpacity from './config/tailwind/shadcn/opacity';

// Custom configs
import customFonts from './config/tailwind/custom/fonts';
import customShadow from './config/tailwind/custom/shadow';
import customColors from "./config/tailwind/custom/colors";

// Types
import type { Config } from 'tailwindcss';

const config = {
  darkMode: 'class',
  content: [
    './resources/**/*.{ts,tsx,blade.php,scss}',
    './storage/framework/views/**/*.{css,php,html}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.3rem',
      screens: {
        '2xl': '1400px',
      },
    },

    extend: {
      colors: {
        ...shadcnColors,
        ...customColors
      },
      fontFamily: {
        ...customFonts,
      },
      borderRadius: {
        ...shadcnBorderRadius,
      },
      keyframes: {
        ...shadcnKeyframes,
      },
      animation: {
        ...shadcnAnimation,
      },
      opacity: {
        ...shadcnOpacity,
      },
      boxShadow: {
        ...customShadow,
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
