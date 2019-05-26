import React from 'react'
import PropTypes from 'prop-types'
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
import { Layout, Listing, Wrapper, BodyText, Title, SEO, Header } from '../components'
import Categories from '../components/Listing/Categories'
import config from '../config'

const Hero = styled.header`
    background-color: ${props => props.theme.colors.bgDark};
    padding-top: 1rem;
    padding-bottom: 4rem;
`

const Headline = styled.p`
    color: ${props => props.theme.colors.grayBase};
    font-size: 1.25rem;
    a {
        font-style: normal;
        font-weight: normal;
    }
`

const Content = styled.div`
    max-width: ${props => props.theme.maxWidthText};
`

const PostWrapper = Wrapper.withComponent('main')

const WorkDetail = ({ data, pageContext }) => {
    const {
        frontmatter: { title, date, tags, categories },
        excerpt,
        id,
        html,
    } = data.work
    const { next, prev } = pageContext
    return (
        <Layout customSEO>
            <SEO title={`${title} | ${config.titleAlt}`} desc={data.description} article />
            <Hero>
                <Wrapper>
                    <Header />
                    <Headline>
                        {date} — {categories && <Categories categories={categories} />}
                    </Headline>
                    <h1>{title}</h1>
                    {prev && <Link to={prev.fields.slug}>Prev</Link>}
                    <> </>
                    {next && <Link to={next.fields.slug}>Next</Link>}
                </Wrapper>
            </Hero>
            <PostWrapper id={config.skipNavId}>
                <BodyText input={html} />

                <Listing title="Recent posts" posts={data.workRecent.edges} sourceName="work" />
            </PostWrapper>
        </Layout>
    )
}

export default WorkDetail

WorkDetail.propTypes = {
    data: PropTypes.shape({
        prismicPost: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.object.isRequired,
}

// The typenames come from the slice names
// If this doesn't work for you query for __typename in body {} and GraphiQL will show them to you

export const pageQuery = graphql`
    query WorkDetail($slug: String!) {
        work: markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            fields {
                slug
                sourceName
            }
            frontmatter {
                title
                tags
                categories
                date(formatString: "MMMM DD, YYYY")
                excerpt
                headline
            }
        }
        workRecent: allMarkdownRemark(
            filter: { fileAbsolutePath: { glob: "**/work/*/*/index.md" } }
            sort: { order: DESC, fields: [frontmatter___date] }
            limit: 3
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
    }
`
