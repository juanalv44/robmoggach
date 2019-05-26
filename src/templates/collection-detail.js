import React from 'react'
import { graphql, Link } from 'gatsby'

const SingleCollectionTemplate = ({ data, pageContext }) => {
    const { edges, collection } = pageContext
    return (
        <div style={{ fontFamily: 'arial' }}>
            <div>Posts about {`${collection}`}</div>
            <div>
                <ul>
                    {edges.map((node, index) => (
                        <li key={index}>
                            <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SingleCollectionTemplate
