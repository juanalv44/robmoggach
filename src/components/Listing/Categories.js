import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

const StyledLink = styled(Link)`
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    font-style: normal;
    opacity: 0.75;
    &:hover,
    &:focus {
        opacity: 0.75;
        text-decoration: none;
        color: ${props => props.theme.colors.primaryFocus};
    }
`

export default class Categories extends Component {
    render() {
        const { categories, sourceName } = this.props
        const source = sourceName == '' ? '' : `/${sourceName}`
        return (
            <>
                {categories.map((cat, i) => (
                    <React.Fragment key={cat}>
                        {!!i && ', '}
                        <StyledLink to={`${source}/categories/${kebabCase(cat)}`}>{cat}</StyledLink>
                    </React.Fragment>
                ))}
            </>
        )
    }
}

Categories.propTypes = {
    categories: PropTypes.array.isRequired,
}
