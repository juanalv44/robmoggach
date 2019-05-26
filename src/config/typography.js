import Typography from 'typography'
import fonts from '../styles/fonts'

// This website uses the system font stack after the placed "Lora" font
// The scaleRatio will be overwritten for smaller breakpoints in src/components/Layout

const typography = new Typography({
    title: 'Moggach',
    baseFontSize: '18px',
    baseLineHeight: 1.45,
    scaleRatio: 3.157,
    headerWeight: 400,
    bodyWeight: 400,
    boldWeight: 400,
    headerFontFamily: fonts.serif,
    bodyFontFamily: fonts.sans,
    overrideStyles: () => ({
        img: {
            marginBottom: 0,
        },
    }),
})

export const { rhythm, scale } = typography
export default typography
