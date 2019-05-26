/* eslint no-unused-expressions: 0 */
/* eslint react/destructuring-assignment: 0 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'
import '@reach/skip-nav/styles.css'

import Footer from './Footer'
import SEO from './SEO'
import SkipNavLink from './SkipNavLink'
import { GlobalStyles, theme, normalize } from '../styles'

import HeroNav from './HeroNav'
// <HeroNav data={data} />

import 'typeface-aleo'
import 'typeface-nunito'

const PureLayout = ({ children, data, customSEO }) => (
    <ThemeProvider theme={theme}>
        <>
            <Global styles={GlobalStyles} />
            <SkipNavLink />
            {!customSEO && <SEO />}
            {children}
            <Footer>
                <p>{data.site.siteMetadata.copyright}</p>
            </Footer>
        </>
    </ThemeProvider>
)

class Layout extends Component {
    render() {
        return (
            <StaticQuery
                query={graphql`
                    query LayoutQuery {
                        site {
                            siteMetadata {
                                title
                                copyright
                            }
                        }
                    }
                `}
                render={data => (
                    <PureLayout {...this.props} data={data}>
                        {this.props.children}
                    </PureLayout>
                )}
            />
        )
    }
}

export default Layout

Layout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

PureLayout.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
    data: PropTypes.object.isRequired,
    customSEO: PropTypes.bool,
}

PureLayout.defaultProps = {
    customSEO: false,
}
