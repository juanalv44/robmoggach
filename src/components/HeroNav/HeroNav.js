import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Link, graphql } from 'gatsby'

import HeroLogo from './HeroLogo'
import HeroContainer from './HeroContainer'

const Wrapper = styled.div`
    max-width: ${props => props.theme.maxWidth};
    padding: 0 2rem;
    @media (max-width: ${props => props.theme.breakpoints.m}) {
        padding: 0 1.5rem;
    }
`

const Hero = styled.header`
    margin: 1rem;
    padding: 1rem;
    background-color: ${props => props.theme.colors.heroBg};
    display: flex;
`

const List = styled.ul`
    margin-top: 4rem;
    margin-bottom: 4rem;
    list-style-type: none;
    margin-left: 0;
`

const HeroText = styled.div`
    font-family: ${props => props.theme.fontFamilyPrimary};
    h1 {
        color: ${props => props.theme.colors.headerLight};
    }
    font-size: 1.7rem;
    line-height: 1.4;
    margin-bottom: 2rem;
    @media (max-width: ${props => props.theme.breakpoints.m}) {
        font-size: 1.4rem;
    }
    @media (max-width: ${props => props.theme.breakpoints.s}) {
        font-size: 1.25rem;
    }
`

export default class HeroNav extends Component {
    render() {
        const { posts, title, data } = this.props
        return (
            <>
                <HeroContainer data={data}>
                    <Hero>
                        <Wrapper>
                            <HeroLogo />
                            <div>Title</div>
                            <div>Site Description</div>
                            <div>Site Headline</div>
                            <div>Social Media</div>
                        </Wrapper>
                    </Hero>
                </HeroContainer>
            </>
        )
    }
}

HeroNav.propTypes = {
    posts: PropTypes.array.isRequired,
    title: PropTypes.string,
}
