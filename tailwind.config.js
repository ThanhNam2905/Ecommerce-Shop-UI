const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    mode: 'jit',
    theme: {
        screens: {
            'xs': '500px',
            'sm': '640px',
            'md': '768px',
            'lg': '991px',
            'xl': '1280px',
            '2xl': '1560px',
        },
        extend: {
            fontFamily: {
                Poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                'primary--color__text': '#ec555b',
                'primary--color__bg': '#f4f4f4',
            },
            maxWidth: {
                '1880': '1880px',
            },
            keyframes: {
                fadeLeft : {
                    '0%': { transform: 'translateX(5rem)' },
                },
                fadeUp: {
                    '0%': { transform: 'translateY(5rem)', opacity: 0 }
                },
                zoomIn: {
                    '0%': { transform: 'scale(0.4)', opacity: 0.4 },
                    '100%': { transform: 'scale(1)', opacity: 1 }
                }
            },
            animation: {
                'fadeLeft': 'fadeLeft 0.5s ease-in-out',
                'fadeUp': 'fadeUp 0.7s ease-in-out backwards',
                'zoomIn': 'zoomIn 0.6s ease-in-out backwards',
            },
            aspectRatio: {
                '1/1': '1 / 1',
                '4/5': '4 / 5',
                '9/11': '9 / 11',
                '16/9': '16 / 9',
                '39/59': '39 / 59',
            },
        },
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require("tailwindcss-animation-delay"),
        require('@tailwindcss/aspect-ratio'),
    ],
}

