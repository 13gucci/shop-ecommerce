/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                shopeeOrange: '#ee4d2d',
                footerBlack: '#000000a6',
                footerBackground: '#f5f5f5'
            }
        }
    },
    plugins: []
};
