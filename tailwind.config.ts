/** @type {import('tailwindcss').Config} */
// Types
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./resources/**/*.{ts,tsx,blade.php,scss}",
        "./storage/framework/views/**/*.{css,php,html}",
    ],

    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
            },
        },
        extend: {},
    },

    plugins: [],
}

export default config;
