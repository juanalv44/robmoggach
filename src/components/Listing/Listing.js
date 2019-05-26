import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import ListItem from './ListItem'
import ListTitle from './ListTitle'

const List = styled.ul`
    margin-top: 4rem;
    margin-bottom: 4rem;
    list-style-type: none;
    margin-left: 0;
`

export default class Listing extends Component {
    render() {
        const { posts, title, sourceName } = this.props

        return (
            <>
                <ListTitle>{title}</ListTitle>

                <List>
                    {posts.map(post => {
                        let categories = []
                        if (post.node.frontmatter.categories) {
                            categories = post.node.frontmatter.categories
                        }
                        let tags = []
                        if (post.node.frontmatter.tags) {
                            tags = post.node.frontmatter.tags
                        }
                        const nodePrefix = sourceName ? `/${sourceName}` : ''
                        return (
                            <ListItem
                                key={post.node.id}
                                node={post.node}
                                categories={categories}
                                tags={tags}
                                sourceName={nodePrefix}
                            />
                        )
                    })}
                </List>
            </>
        )
    }
}

Listing.propTypes = {
    posts: PropTypes.array.isRequired,
    title: PropTypes.string,
}
