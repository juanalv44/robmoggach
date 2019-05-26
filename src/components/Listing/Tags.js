import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

const StyledLink = styled(Link)`
    color: ${props => props.theme.colors.gray};
    text-decoration: none;
    font-style: normal;
    font-weight: 500;
    opacity: 0.75;
    &:hover,
    &:focus {
        opacity: 0.75;
        text-decoration: none;
        color: ${props => props.theme.colors.primaryFocus};
    }
`

const TagList = styled.p`
    font-size: 0.55rem;
    letter-spacing: 1px;
    line-height: 0.75rem;
    margin: 0;
    padding: 0;
    text-indent: none;
    text-indent: 0;
    text-transform: uppercase;
`

const TagListItem = styled.li`
    display: inline-block;
    margin-right: 5px;
`

export default class Tags extends Component {
    render() {
        const { tags, sourceName } = this.props
        const source = sourceName == '' ? '' : `/${sourceName}`
        return (
            <TagList id="TagList">
                {tags.map((tag, i) => (
                    <>
                        {!!i && ', '}
                        <StyledLink to={`${source}/tags/${kebabCase(tag)}`} key={tag}>
                            {tag}
                        </StyledLink>
                    </>
                ))}
            </TagList>
        )
    }
}

Tags.propTypes = {
    tags: PropTypes.array.isRequired,
}
