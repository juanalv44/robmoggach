import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link, graphql } from 'gatsby'
import { Layout, Listing, Wrapper, Title, Logo, BodyText } from '../components'
import config from '../config'
import { Hero, HeroInner, HeroText, Social } from '.'

const ProjectListing = styled.ul`
    list-style-type: none;
    margin-left: 0;
    margin-top: 4rem;
    li {
        margin-bottom: 1.45rem;
        a {
            font-size: 2.369rem;
            font-style: normal;
            @media (max-width: ${props => props.theme.breakpoints.s}) {
                font-size: 1.777rem;
            }
        }
    }
`

const StyledLogo = styled(Logo)`
    width: 8rem;
    margin-top: 0;
    margin-bottom: 2rem;
    polygon {
        fill: ${props => props.theme.colors.logoDarker};
    }
`

const IndexWrapper = Wrapper.withComponent('main')
// const title = data.site.siteMetadata.title
// const description = data.site.siteMetadata.description

class Index extends Component {
    render() {
        const {
            data: { site, blog, work },
        } = this.props
        return (
            <Layout>
                <Hero>
                    <HeroInner>
                        <StyledLogo />
                        <HeroText>
                            <h1>My Work</h1>
                            <p>This is 20+ years of creating images in various mediums.</p>
                            <p>I'm {site.siteMetadata.headline}</p>
                        </HeroText>
                    </HeroInner>
                </Hero>
                <IndexWrapper id={config.skipNavId} style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
                    <Listing posts={work.edges} sourceName="work" />
                    <Listing title="Recent Posts" posts={blog.edges} sourceName="blog" />
                </IndexWrapper>
            </Layout>
        )
    }
}

export default Index

Index.propTypes = {
    data: PropTypes.shape({
        posts: PropTypes.object.isRequired,
    }).isRequired,
}

export const pageQuery = graphql`
    query WorkQuery {
        site {
            siteMetadata {
                title
                headline
                description
                copyright
                social {
                    name
                    url
                    label
                }
            }
        }
        blog: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 3
            filter: { frontmatter: { section: { eq: "blog" } } }
        ) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date
                        tags
                        categories
                        cover_image {
                            publicURL
                            childImageSharp {
                                sizes(maxWidth: 1240) {
                                    srcSet
                                }
                            }
                        }
                        section
                    }
                    fields {
                        parentDirname
                        slug
                        sourceName
                        year
                    }
                    excerpt
                }
            }
        }
        work: allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { fileAbsolutePath: { glob: "**/work/*/*/index.md" } }
        ) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        postType
                        tags
                        categories
                        title
                        date
                    }
                    fields {
                        parentDirname
                        slug
                        sourceName
                        year
                    }
                }
            }
        }
    }
`
