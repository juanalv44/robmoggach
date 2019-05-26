import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import moment from 'moment'
import Categories from './Categories'
import Tags from './Tags'

const Item = styled.li`
    margin-bottom: 1.45rem;
`

const Headline = styled.p`
    color: ${props => props.theme.colors.gray};
    margin-bottom: 0.2rem;
`

const MetaInfo = styled.p`
    color: ${props => props.theme.colors.gray};
    margin-bottom: 0.2rem;
`

const StyledLink = styled(Link)`
    font-size: 2.369rem;
    font-style: normal;
    @media (max-width: ${props => props.theme.breakpoints.s}) {
        font-size: 1.777rem;
    }
`

const StyledDate = styled.span`
    color: ${props => props.theme.colors.gray};
    position: relative;
    &:after {
        content: '';
        width: 0.8rem;
        height: 1px;
        background-color: ${props => props.theme.colors.grayDark};
        display: inline-block;
        position: absolute;
        top: 50%;
        right: -1rem;
    }
    margin-right: 1.2rem;
`

const PostTitle = styled.h4`
    font-size: 2.369rem;
    font-style: normal;
    margin: 0.2rem 0;
    @media (max-width: ${props => props.theme.breakpoints.s}) {
        font-size: 1.777rem;
    }
`

export default class ListItem extends Component {
    render() {
        const { node, categories, tags, sourceName } = this.props
        const date = moment(node.frontmatter.date).format('LL')
        return (
            <Item key={node.slug}>
                <MetaInfo>
                    <StyledDate format="LL">{date}</StyledDate>
                    {categories && <Categories categories={categories} sourceName={sourceName} />}
                </MetaInfo>
                <PostTitle>
                    <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                </PostTitle>
                {tags && <Tags tags={tags} sourceName={sourceName} />}
            </Item>
        )
    }
}

ListItem.propTypes = {
    node: PropTypes.object.isRequired,
    categories: PropTypes.array.isRequired,
}
