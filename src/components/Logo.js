import React from 'react'

// https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91

const Logo = ({ style = {}, width = '100%', className = '', height = '100%', viewBox = '0 0 800 350' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width={width}
        style={style}
        height={height}
        viewBox={viewBox}
        className={className}
    >
        <polygon points="713.23 191.92 556.62 35.3 400 191.92 243.38 35.3 86.77 191.92 0 105.15 16.92 88.23 86.77 158.08 243.38 1.46 400 158.08 556.62 1.46 713.23 158.08 783.08 88.23 800 105.15 713.23 191.92" />
        <polygon points="713.23 270.23 556.62 113.61 400 270.23 243.38 113.61 86.77 270.23 0 183.46 16.92 166.54 86.77 236.39 243.38 79.77 400 236.39 556.62 79.77 713.23 236.39 783.08 166.54 800 183.46 713.23 270.23" />
        <polygon points="713.23 348.54 556.62 191.92 400 348.54 243.38 191.92 86.77 348.54 0 261.77 16.92 244.85 86.77 314.7 243.38 158.08 400 314.7 556.62 158.08 713.23 314.7 783.08 244.85 800 261.77 713.23 348.54" />
    </svg>
)
// viewBox="0 0 800 350"

export default Logo
