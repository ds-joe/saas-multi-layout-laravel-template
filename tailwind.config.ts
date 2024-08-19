
// Shadcn configs
import shadcnAnimation from "./config/tailwind/shadcn/animation"
import shadcnBorderRadius from "./config/tailwind/shadcn/borderRadius"
import shadcnColors from "./config/tailwind/shadcn/colors"
import shadcnKeyframes from "./config/tailwind/shadcn/keyframes"

// Types
import type { Config } from "tailwindcss"

const config = {
  darkMode: "class",
  content: [
    "./resources/**/*.{ts,tsx,blade.php,scss}",
    "./storage/framework/views/**/*.{css,php,html}",
  ],
  theme: {

    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },

    extend: {
      colors: {
        ...shadcnColors
      },
      borderRadius: {
        ...shadcnBorderRadius
      },
      keyframes: {
        ...shadcnKeyframes
      },
      animation: {
        ...shadcnAnimation
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config