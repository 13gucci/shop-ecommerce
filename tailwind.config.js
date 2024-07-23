/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                shopeeOrange: '#ee4d2d',
                footerBlack: '#000000a6',
                footerBackground: '#f5f5f5',
                textError: '#ff424f'
            },
            backgroundImage: {
                main: 'url(https://down-vn.img.susercontent.com/file/sg-11134004-7rd40-lwqodja4x88980)'
            }
        }
    },
    plugins: []
};
