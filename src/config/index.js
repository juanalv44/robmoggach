module.exports = {
    pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
    title: 'Robert Moggach', // Navigation and Site Title
    titleAlt: 'Moggach', // Title for JSONLD
    description:
        'Director, VFX Supervisor, Creative Director, Creative Technologist, DFX Supervisor, CG Supervisor, Compositing Supervisor, Compositor, Pipeline TD, FX TD, Animator & Designer.',
    headline: 'Creative.', // Headline for schema.org JSONLD
    url: 'https://robmoggach.gitlab.io', // Domain of your site. No trailing slash!
    keywords:
        'visual effects, vfx supervisor, moggach, robmoggach, robert moggach, flame, cgi, animation, design, creative director, creative, art',
    lang: 'en', // Language Tag on <html> element
    siteLanguage: 'en', // Language Tag on <html> element
    locale: 'en-gb',
    logo: '/logos/logo-1024.png', // Used for SEO
    ogLanguage: 'en_US', // Facebook Language
    copyright: 'Copyright © 2019 Robert Moggach. All Rights Reserved.',

    // JSONLD / Manifest
    // favicon: 'src/favicon.png', // Used for manifest favicon generation
    shortName: 'Moggach', // shortname for manifest. MUST be shorter than 12 characters
    author: 'Robert Moggach <rob@moggach.com>', // Author for schemaORGJSONLD
    themeColor: '#3D63AE',
    backgroundColor: '#EBEDF2',

    social: [
        {
            name: 'twitter',
            label: 'Twitter',
            id: '@robertmoggach',
            url: 'https://twitter.com/robertmoggach',
        },
        {
            name: 'instagram',
            label: 'Instagram',
            id: '@robertmoggach',
            url: 'https://www.instagram.com/robertmoggach',
        },
        {
            name: 'github',
            label: 'GitHub',
            id: '@robmoggach',
            url: 'https://github.com/robmoggach',
        },
    ],
    twitter: '@robertmoggach', // Twitter Username
    facebook: 'robmoggach', // Facebook Site Name
    googleAnalyticsID: 'UA-3781298-1',

    skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
