/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}", "./**/*.html"],
    theme: { 
        extend: {
            animation: {
                "fade": 'fadeIn 0.6s'
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 100 }
                }
            }
        } 
    },
    plugins: [require("daisyui")],
    daisyui: {
    themes: [
        {
            spacecraft: {
                "primary": "#f3f4f6",
                "secondary": "#38bdf8",
                "accent": "#f3f4f6",
                "neutral": "#191D24",
                "base-100": "#2A303C",
                "info": "#facc15",
                "success": "#4ade80",
                "warning": "#f59e0b",
                "error": "#ef4444",
            },
        },
    ],
    }
}
