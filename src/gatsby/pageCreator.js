const _ = require('lodash')

const path = require(`path`)

const prevNext = (list, item) => {
    // Create a random selection of the other posts (excluding the current post)
    const filterUnique = _.filter(list, input => input.node.fields.slug !== item.node.fields.slug)
    const sample = _.sampleSize(filterUnique, 2)
    // Only use the current language
    // const filterLanguage = _.filter(filterUnique, input => input.node.lang === item.node.lang)
    // const sample = _.sampleSize(filterLanguage, 2)

    return {
        left: sample[0].node,
        right: sample[1].node,
    }
}

const createPostListPage = (edges, createPage, template, prefix) => {
    createPage({
        path: prefix,
        component: template,
        context: {
            posts: edges,
        },
    })
}

const createPostDetailPages = (edges, createPage, template, prefix) => {
    edges.forEach((post, index) => {
        const { left, right } = prevNext(edges, post)
        const { slug } = post.node.fields
        createPage({
            path: prefix ? `/${prefix}${slug}` : slug,
            component: template,
            context: {
                slug,
                left,
                right,
                prev: index === 0 ? null : edges[index - 1].node,
                next: index === edges.length - 1 ? null : edges[index + 1].node,
            },
        })
    })
}

// TAGS, CATEGORIES, CLASSIFICATIONS, ETC.
// createCollectionPages(data.workEdges, createPage, 'tags')
// a sourcename is work, blog, wiki, etc. it's a gatsby filesystem classification
// a collection is a tag,category, etc.
const createCollectionPages = (edges, createPage, collectionName, listTemplate, detailTemplate) => {
    const nodesByCollectionBySource = {}
    nodesByCollectionBySource.all = {}

    edges.forEach(({ node }) => {
        sourceName = node.fields.sourceName
        if (!nodesByCollectionBySource[sourceName]) {
            nodesByCollectionBySource[sourceName] = {}
        }
        const collectionsArray = eval(`node.frontmatter.${collectionName}`)
        if (collectionsArray) {
            collectionsArray.forEach(collection => {
                if (!nodesByCollectionBySource.all[collection]) {
                    nodesByCollectionBySource.all[collection] = []
                }
                nodesByCollectionBySource.all[collection].push(node)
                if (!nodesByCollectionBySource[sourceName][collection]) {
                    nodesByCollectionBySource[sourceName][collection] = []
                }
                nodesByCollectionBySource[sourceName][collection].push(node)
            })
        }
    })
    // ITERATE AND CREATE DETAIL AND LIST PAGES!!!
    Object.entries(nodesByCollectionBySource).forEach(entry => {
        const [sourceName, collectionsForSource] = entry
        // COLLECTION NAMES
        const collections = Object.keys(collectionsForSource)
        // COLLECTION LIST PAGES (one for each sourceName)
        const collectionsPath = sourceName == 'all' ? `/${collectionName}` : `/${sourceName}/${collectionName}`
        createPage({
            path: collectionsPath,
            component: listTemplate,
            context: {
                pathSlug: collectionsPath,
                collectionName,
                collections,
                sourceName,
            },
        })
        // COLLECTION DETAIL PAGES (one for each collection for each sourceName)
        collections.map((collection, index) => {
            const edges = collectionsForSource[collection]
            const path =
                sourceName == 'all'
                    ? `/${collectionName}/${_.kebabCase(collection)}`
                    : `/${sourceName}/${collectionName}/${_.kebabCase(collection)}`
            createPage({
                path,
                component: detailTemplate,
                context: {
                    pathSlug: path,
                    collectionName,
                    edges,
                    collection,
                    sourceName,
                },
            })
        })
    })
}

module.exports = {
    createPostListPage,
    createCollectionPages,
    createPostDetailPages,
}
