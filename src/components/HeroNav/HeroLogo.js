import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import Logo from '../Logo'

// https://blog.lftechnology.com/using-svg-icons-components-in-react-44fbe8e5f91

const HeroLogo = styled(Logo)`
    width: 8rem;
    margin: 0;
    polygon {
        fill: ${props => props.theme.colors.logo};
    }
`

export default HeroLogo
