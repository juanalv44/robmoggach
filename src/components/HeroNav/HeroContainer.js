import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import moment from 'moment'

const BorderedContainer = styled.div`
    display: block;
    background: #cff;
    height: 100%;
    width: 100%;
    padding: 60px;
    padding-left: 120px;
    box-sizing: border-box;
`

export default class HeroContainer extends Component {
    render() {
        const { data } = this.props
        return (
            <BorderedContainer>
                <h1>This is a bordered container.</h1>
                <p>This is P.</p>
            </BorderedContainer>
        )
    }
}

HeroContainer.propTypes = {
    data: PropTypes.object.isRequired,
}
