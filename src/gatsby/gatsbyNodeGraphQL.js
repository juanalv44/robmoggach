const gatsbyNodeGraphQL = `
    workIndexPages: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/work/*/*/index.md" } }
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 1000
    ) {
        edges {
            node {
                id
                fields {
                    slug
                    sourceName
                }
                frontmatter {
                    tags
                    categories
                    title
                }
            }
        }
    }
    blogIndexPages: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/blog/*/*/index.md" } }
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 1000
    ) {
        edges {
            node {
                id
                fields {
                    slug
                    sourceName
                }
                frontmatter {
                    tags
                    categories
                    title
                }
            }
        }
    }
    allIndexPages: allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/*/*/*/index.md" } }
        sort: { order: ASC, fields: [frontmatter___date] }
        limit: 1000
    ) {
        edges {
            node {
                id
                fields {
                    slug
                    sourceName
                }
                frontmatter {
                    tags
                    categories
                    title
                }
            }
        }
    }
`

module.exports = gatsbyNodeGraphQL
