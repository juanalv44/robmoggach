import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link, graphql } from 'gatsby'
import posed from 'react-pose'
import SplitText from 'react-pose-text'
import { Layout, Listing, Wrapper, Title, Logo, BodyText } from '../components'
import config from '../config'

const charPoses = {
    exit: { y: 20, opacity: 0 },
    enter: {
        y: 0,
        opacity: 1,
        transition: ({ charInWordIndex }) => ({
            type: 'spring',
            delay: charInWordIndex * 30,
            stiffness: 500 + charInWordIndex * 150,
            damping: 10 - charInWordIndex * 1,
        }),
    },
}
const Hero = styled.header`
    background-color: ${props => props.theme.colors.heroBg};
    display: flex;
    align-items: center;
    color: ${props => props.theme.colors.heroFg};
`

const HeroInner = styled(Wrapper)`
    padding-top: 10rem;
    padding-bottom: 10rem;
    h1 {
        margin-bottom: 2rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.l}) {
        padding-top: 8rem;
        padding-bottom: 8rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.m}) {
        padding-top: 6rem;
        padding-bottom: 6rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.s}) {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }
`

const HeroText = styled.div`
    font-family: ${props => props.theme.fontFamilyPrimary};
    h1 {
        color: ${props => props.theme.colors.headerLight};
    }
    font-size: 1.7rem;
    line-height: 1.4;
    margin-bottom: 4rem;
    @media (max-width: ${props => props.theme.breakpoints.m}) {
        font-size: 1.4rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.s}) {
        font-size: 1.25rem;
    }
`

const Social = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    margin-left: 0;
    li {
        display: inline;
        &:not([data-name='social-entry-0']) {
            margin-left: 2.5rem;
            @media (max-width: ${props => props.theme.breakpoints.s}) {
                margin-left: 1.75rem;
            }
        }
        a {
            font-style: normal;
            color: ${props => props.theme.colors.primary};
            font-size: 1.333rem;
            &:hover,
            &:focus {
                color: ${props => props.theme.colors.primaryFocus};
                text-decoration: none;
            }
            @media (max-width: ${props => props.theme.breakpoints.s}) {
                font-size: 1.2rem;
            }
        }
    }
`

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

const BiggerP = styled.p`
    font-size: 2.2rem;
    color: ${props => props.theme.colors.grayLight};
`
const SmallerP = styled.p`
    font-size: 1.5rem;
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
                            <h1>{site.siteMetadata.title}</h1>
                            <SmallerP>I'm a {site.siteMetadata.description}</SmallerP>
                            <BiggerP>I Create.</BiggerP>
                        </HeroText>
                        <Social>
                            {site.siteMetadata.social.map((s, index) => (
                                <li data-name={`social-entry-${index}`} key={s.name}>
                                    <a href={s.url}>{s.label}</a>
                                </li>
                            ))}
                        </Social>
                    </HeroInner>
                </Hero>
                <IndexWrapper id={config.skipNavId} style={{ paddingTop: '4rem', paddingBottom: '2rem' }}>
                    <Listing title="Recent Projects" posts={work.edges} sourceName="work" />
                    <Listing title="Recent Posts" posts={blog.edges} sourceName="blog" />
                </IndexWrapper>
            </Layout>
        )
    }
}
export { Hero, HeroInner, HeroText, Social }
export default Index

Index.propTypes = {
    data: PropTypes.shape({
        posts: PropTypes.object.isRequired,
    }).isRequired,
}

export const pageQuery = graphql`
    query IndexQuery {
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
            limit: 3
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
