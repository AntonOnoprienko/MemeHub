import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    plugins: [heroui({themes: {
            "purple-dark": {
                extend: "dark",
                colors: {
                    background: "#0D001A",
                    foreground: "#ffffff",
                    primary: {
                        500: "#DD62ED",
                        DEFAULT: "#DD62ED",
                        foreground: "#ffffff",
                    },
                    focus: "#F182F6",
                },
                layout: {
                    disabledOpacity: "0.3",
                    radius: {
                        small: "4px",
                        medium: "6px",
                        large: "8px",
                    },
                    borderWidth: {
                        small: "1px",
                        medium: "2px",
                        large: "3px",
                    },
                },
            },
            "blue-night": {
                extend: "dark",
                colors: {
                    background: "#0B1D3A",
                    foreground: "#ffffff",
                    primary: {
                        500: "#4E91F9",
                        DEFAULT: "#4E91F9",
                        foreground: "#ffffff",
                    },
                    focus: "#85BFFF",
                },
                layout: {
                    disabledOpacity: "0.3",
                    radius: {
                        small: "4px",
                        medium: "6px",
                        large: "8px",
                    },
                    borderWidth: {
                        small: "1px",
                        medium: "2px",
                        large: "3px",
                    },
                },
            },
            "green-matrix": {
                extend: "dark",
                colors: {
                    background: "#001B0A",
                    foreground: "#D4FFD4",
                    primary: {
                        500: "#00FF9C",
                        DEFAULT: "#00FF9C",
                        foreground: "#003F2D",
                    },
                    focus: "#22FFA3",
                },
                layout: {
                    disabledOpacity: "0.3",
                    radius: {
                        small: "4px",
                        medium: "6px",
                        large: "8px",
                    },
                    borderWidth: {
                        small: "1px",
                        medium: "2px",
                        large: "3px",
                    },
                },
            },
            "peach-light": {
                extend: "light",
                colors: {
                    background: "#FFF7F0",
                    foreground: "#3C1F1A",
                    primary: {
                        DEFAULT: "#FF8A65",
                        foreground: "#ffffff",
                    },
                    focus: "#FFAB91",
                },
                layout: {
                    disabledOpacity: "0.3",
                    radius: {
                        small: "4px",
                        medium: "6px",
                        large: "8px",
                    },
                    borderWidth: {
                        small: "1px",
                        medium: "2px",
                        large: "3px",
                    },
                },
            },
            "frost-light": {
                extend: "light",
                colors: {
                    background: "#F4FAFF",
                    foreground: "#1C2B36",
                    primary: {
                        DEFAULT: "#62B6F1",
                        foreground: "#ffffff",
                    },
                    focus: "#A5D9F8",
                },
                layout: {
                    disabledOpacity: "0.3",
                    radius: {
                        small: "4px",
                        medium: "6px",
                        large: "8px",
                    },
                    borderWidth: {
                        small: "1px",
                        medium: "2px",
                        large: "3px",
                    },
                },
            },
        }
    })],
}