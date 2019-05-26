import { css } from '@emotion/core'
import { theme, normalize } from '.'

const GlobalStyle = css`
    ${normalize}

    h1, h2, h3, h4, h5, h6 {
        color: ${theme.colors.headerDark};
    }

    html {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
        color: ${theme.colors.body};
        background-color: ${theme.colors.bg};
    }

    ::selection {
        color: ${theme.colors.header};
        background-color: ${theme.colors.primaryFocus};
    }
    a {
        color: ${theme.colors.primary};
        transition: all 0.2s ease-in-out;
        text-decoration: none;
        &:hover,
        &:focus {
            text-decoration: underline;
            color: ${theme.colors.primaryFocus};
        }
    }
    @media (max-width: ${theme.breakpoints.m}) {
        html {
            font-size: 16px !important;
        }
    }
    @media (max-width: ${theme.breakpoints.s}) {
        h1 {
            font-size: 2.369rem !important;
        }
        h2 {
            font-size: 1.777rem !important;
        }
        h3 {
            font-size: 1.333rem !important;
        }
        h4 {
            font-size: 1rem !important;
        }
        h5 {
            font-size: 0.75rem !important;
        }
        h6 {
            font-size: 0.563rem !important;
        }
    }
`

export default GlobalStyle
