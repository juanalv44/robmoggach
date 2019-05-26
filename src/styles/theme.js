import palette from './palette'
import fonts from './fonts'

const primaryFontFamily = fonts.serif.map(font => `"${font}"`).join(', ')
const secondaryFontFamily = fonts.sans.map(font => `"${font}"`).join(', ')

const theme = {
    fontFamilyPrimary: primaryFontFamily,
    fontFamilySecondary: secondaryFontFamily,
    maxWidth: '1000px',
    maxWidthText: '720px',
    breakpoints: {
        xs: '400px',
        s: '600px',
        m: '900px',
        l: '1200px',
    },
    colors: {
        black: '#000',
        bgDarker: palette.gray.dk30,
        bgDark: palette.gray.dk25,
        bg: palette.gray.dk20,
        bgLight: palette.gray.dk15,
        bgLighter: palette.gray.dk10,
        heroBg: palette.gray.dk25,
        heroFg: palette.gray.base,
        bodyDarker: palette.gray.dk10,
        bodyDarker: palette.gray.dk05,
        body: palette.gray.base,
        bodyLight: palette.gray.lt05,
        bodyLighter: palette.gray.lt10,
        headerDarker: palette.silver.dk30,
        headerDark: palette.silver.dk20,
        header: palette.silver.dk10,
        headerLight: palette.silver.base,
        headerLighter: palette.silver.lt01,
        logoLighter: palette.silver.lt01,
        logoLight: palette.silver.base,
        logo: palette.silver.dk05,
        logoDark: palette.silver.dk15,
        logoDarker: palette.silver.dk25,
        primaryDarker: palette.violet.dk15,
        primaryDark: palette.violet.dk10,
        primary: palette.violet.base,
        primaryLight: palette.violet.lt05,
        primaryLighter: palette.violet.lt10,
        primaryFocusDarker: palette.pink.dk15,
        primaryFocusDark: palette.pink.dk10,
        primaryFocus: palette.pink.dk05,
        primaryFocusLight: palette.pink,
        primaryFocusLighter: palette.pink.lt05,
        selectionBg: palette.gray.lt25,
        selectionFg: palette.gray.dk25,
        // GRAY
        grayDarker: palette.gray.dk20,
        grayDark: palette.gray.dk10,
        gray: palette.gray.base,
        grayLight: palette.gray.lt10,
        grayLighter: palette.gray.lt20,
    },
}

export default theme
