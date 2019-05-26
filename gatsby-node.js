const _ = require('lodash')

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { createPostListPage, createCollectionPages, createPostDetailPages } = require('./src/gatsby/pageCreator')
const gatsbyNodeGraphQL = require('./src/gatsby/gatsbyNodeGraphQL')

// Remove trailing slashes unless it's only "/", then leave it as it is
const replaceTrailing = _path => (_path === `/` ? _path : _path.replace(/\/$/, ``))
// Remove slashes at the beginning and end
const replaceBoth = _path => _path.replace(/^\/|\/$/g, '')
// If the "lang" is the default language, don't create a prefix. Otherwise add a "/en" before the slug (defined in "locales")

exports.onCreateNode = ({ node, getNode, actions }) => {
    // check that this is markdown
    if (node.internal.type === `MarkdownRemark`) {
        const { createNodeField } = actions
        const parent = getNode(node.parent)
        // check if it's a markdown file not just an object
        if (parent.internal.type === 'File') {
            // SOURCE NAME
            const sourceName = parent.sourceInstanceName
            createNodeField({ name: `sourceName`, node, value: sourceName })
            // SLUG - URL PATH
            const slug = createFilePath({ node, getNode, basePath: `pages` })
            createNodeField({ name: `slug`, node, value: `/${sourceName}${slug}` })
            // PARENT DIRECTORY NAME
            const { relativePath } = parent
            const parentDirname = path.basename(path.dirname(relativePath))
            createNodeField({ name: `parentDirname`, node, value: parentDirname })
            // YEAR FOR POST FROM FOLDER
            const parentYear = path.dirname(relativePath).split('/')[0]
            if (/^[0-9]{4,}/.test(parentYear)) {
                createNodeField({ name: `year`, node, value: parentYear })
            }
        }
    }
}

// graphql function doesn't throw an error
// so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
    promise.then(result => {
        if (result.errors) {
            throw result.errors
        }
        return result
    })

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions

    const result = await wrapper(
        graphql(`
            {
                ${gatsbyNodeGraphQL}
            }
        `)
    )
    createPostDetailPages(result.data.blogIndexPages.edges, createPage, path.resolve('./src/templates/work-detail.js'))
    createPostDetailPages(result.data.workIndexPages.edges, createPage, path.resolve('./src/templates/work-detail.js'))
    createCollectionPages(
        result.data.allIndexPages.edges,
        createPage,
        'categories',
        path.resolve('./src/templates/collection-list.js'),
        path.resolve('./src/templates/collection-detail.js')
    )
    createCollectionPages(
        result.data.allIndexPages.edges,
        createPage,
        'tags',
        path.resolve('./src/templates/collection-list.js'),
        path.resolve('./src/templates/collection-detail.js')
    )
}
