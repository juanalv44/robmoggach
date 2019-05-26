import React from 'react'
import { graphql, Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

const AllCollectionsTemplate = ({ data, pageContext }) => {
    const { collections, collectionName } = pageContext
    return (
        <div style={{ fontFamily: 'arial' }}>
            {collections.map((collection, index) => (
                <div>
                    <Link to={`/${collectionName}/${kebabCase(collection)}`}>{collection}</Link>
                </div>
            ))}
        </div>
    )
}

export default AllCollectionsTemplate
