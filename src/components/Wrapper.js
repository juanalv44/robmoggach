import styled from '@emotion/styled'

// 1200, 900, 600, 400

const Wrapper = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 0 2rem;
    @media (max-width: ${props => props.theme.breakpoints.m}) {
        padding: 0 1.5rem;
    }
`

export default Wrapper
