// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

//Keep @type nearest with module.exports
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    corePlugins: {
        container: false
    },
    theme: {
        extend: {
            colors: {
                shopeeOrange: '#ee4d2d',
                shopeeOrange2: '#fb5431',
                footerBlack: '#000000a6',
                footerBackground: '#f5f5f5',
                textError: '#ff424f'
            },
            backgroundImage: {
                main: 'url(https://down-vn.img.susercontent.com/file/sg-11134004-7rd40-lwqodja4x88980)'
            }
        }
    },
    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '1200px',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    paddingLeft: '16px',
                    paddingRight: '16px'
                }
            });
        })
    ]
};
