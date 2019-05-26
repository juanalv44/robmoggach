import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, Link, graphql } from 'gatsby'
import styled from '@emotion/styled'
import Logo from './Logo'

const StyledHeader = styled.nav`
    padding-bottom: 2rem;
    a {
        color: ${props => (props.invert ? props.theme.colors.grayDark : props.theme.colors.grayLight)};
        font-weight: 400;
        font-style: normal;
        &:hover,
        &:focus {
            color: ${props => (props.invert ? props.theme.colors.grayDarker : props.theme.colors.grayLighter)};
            text-decoration: none;
        }
    }
`

class Header extends Component {
    render() {
        const { invert } = this.props
        return (
            <StaticQuery
                query={graphql`
                    query HeaderQuery {
                        site {
                            siteMetadata {
                                title
                                copyright
                            }
                        }
                    }
                `}
                render={data => (
                    <StyledHeader invert={invert}>
                        <Link to="/" aria-label="Back to Home">
                            {data.site.siteMetadata.title}
                        </Link>
                    </StyledHeader>
                )}
            />
        )
    }
}

export default Header

Header.propTypes = {
    invert: PropTypes.bool,
}

Header.defaultProps = {
    invert: false,
}
