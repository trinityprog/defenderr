module.exports = {
    mode: 'jit',
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    corePlugins: {
        container: false
    },
    theme: {
        extend: {
            fontFamily: {
                'sf-pro-display-regular': ['SF_Pro_Display_Regular', 'sans-serif'],
                'sf-pro-display-medium': ['SF_Pro_Display_Medium', 'sans-serif'],
                'sf-pro-display-bold': ['SF_Pro_Display_Bold', 'sans-serif'],
                'matroska': ['MATROSKA', 'sans-serif'],
                'montserrat': ['Montserrat', 'sans-serif'],
                'druk-cyr': ['Druk_Cyr', 'sans-serif'],
                'playfair-display': ['Playfair_Display', 'sans-serif'],
            },
            colors: {
                'cape-cod': '#3C4043',
                'cod-gray': '#191818',
                'athens-gray': '#F8F9FA',
                'shuttle-gray': '#5E6165',
                'puerto-rico': '#4BC8A2',
                'orange-red': '#FF7223',
                'alabaster': '#FAFAFA',
                'philippine-gray': '#8D8D8D',
                'azure-radiance': '#067AFF',
                'gray': '#7E7E7E',
                'mercury': '#E3E3E3',
            },
            backgroundImage: {
                'defenderr-gradient': 'linear-gradient(270deg, #FFDCBC 19.19%, #F2FFA0 81.3%)',
            },
            boxShadow: {
                'defenderr': '0px 4px 8px rgba(0, 0, 0, 0.05)',
            },
            gridTemplateColumns: {
                'auto': 'auto 1fr',
            },
            screens: {
                'maxlg': {
                    'max':'1024px'
                }
            }
        },
    },
    plugins: [],
}
