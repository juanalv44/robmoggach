const config = require('./src/config')

require('dotenv').config({
    path: `.env`,
})

// const prismicHtmlSerializer = require('./src/gatsby/htmlSerializer')

const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix

module.exports = {
    /* General Information */
    pathPrefix: config.pathPrefix,
    siteMetadata: {
        siteUrl: config.url + pathPrefix, // For gatsby-plugin-sitemap
        pathPrefix,
        title: config.title,
        titleAlt: config.titleAlt,
        description: config.description,
        copyright: config.copyright,
        banner: config.logo,
        headline: config.headline,
        siteLanguage: config.siteLanguage,
        ogLanguage: config.ogLanguage,
        author: config.author,
        twitter: config.twitter,
        facebook: config.facebook,
        social: config.social,
    },
    /* Plugins */
    plugins: [
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-emotion',
        'gatsby-plugin-lodash',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        `gatsby-plugin-favicon`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `work`,
                path: `${__dirname}/content/work/`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `blog`,
                path: `${__dirname}/content/blog/`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    'gatsby-remark-copy-linked-files',
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 3840,
                        },
                    },
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {
                            classPrefix: 'language-',
                            inlineCodeMarker: null,
                            aliases: {},
                        },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/config/typography.js',
                omitGoogleFont: true,
            },
        },
        {
            resolve: 'gatsby-plugin-google-analytics',
            options: {
                trackingId: config.googleAnalyticsID,
            },
        },
        'gatsby-plugin-sitemap',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: config.title,
                short_name: config.titleAlt,
                description: config.description,
                start_url: pathPrefix,
                background_color: config.backgroundColor,
                theme_color: config.themeColor,
                display: 'standalone',
                icon: config.favicon,
            },
        },
        // Must be placed at the end
        'gatsby-plugin-offline',
        'gatsby-plugin-netlify',
    ],
}
