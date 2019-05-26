import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'

import { prism } from '../styles'

const Content = styled.div`
    ${prism};
    max-width: ${props => props.theme.maxWidthText};
    padding: 6rem 0;
    p,
    li {
        letter-spacing: -0.003em;
        --baseline-multiplier: 0.179;
        --x-height-multiplier: 0.35;
        font-size: 21px;
        line-height: 1.58;
        code {
            padding: 0.2rem 0.5rem;
            margin: 0.5rem 0;
        }
    }
    blockquote {
        margin-left: 0;
        padding-left: 1.45rem;
        border-left: 2px solid ${props => props.theme.colors.primary};
        p {
            font-size: 19px;
            font-style: italic;
        }
    }
`

const BodyText = ({ input }) => (
    <Content>
        <div dangerouslySetInnerHTML={{ __html: input }} />
    </Content>
)

export default BodyText

BodyText.propTypes = {
    input: PropTypes.object.isRequired,
}
