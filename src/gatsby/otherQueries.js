const otherQueries = `
workImages: allMarkdownRemark(
    filter: { fileAbsolutePath: { glob: "**/work/*/*/images.md" } }
    limit: 1000
) {
    edges {
        node {
            id
            frontmatter {
                projectID
                albums {
                    title
                    slug
                    is_featured
                    is_key
                    images {
                        image
                        caption
                        width
                        height
                        is_featured
                        is_key
                    }
                }
            }
        }
    }
}
workVideos: allMarkdownRemark(
    filter: { fileAbsolutePath: { glob: "**/work/*/*/videos.md" } }
    limit: 1000
) {
    edges {
        node {
            id
            frontmatter {
                projectID
                videos {
                    title
                    caption
                    is_featured
                    is_key
                    slug
                    tags
                    files {
                        file
                        width
                        height
                        video_type
                    }
                }
            }
        }
    }
}
workCredits: allMarkdownRemark(
    filter: { fileAbsolutePath: { glob: "**/work/*/*/credits.md" } }
    limit: 1000
) {
    edges {
        node {
            id
            frontmatter {
                projectID
                credits {
                    companyName
                    companySlug
                    personName
                    personSlug
                    roleTitle
                    roleSlug
                    visible
                }
            }
        }
    }
}
`

module.exports = gatsbyNodeGraphQL
