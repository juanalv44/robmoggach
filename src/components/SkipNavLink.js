import React from 'react'
import PropTypes from 'prop-types'
import config from '../config'

const SkipNavLink = ({ children, ...props }) => (
    <a {...props} href={`#${config.skipNavId}`} data-reach-skip-link>
        {children}
    </a>
)

export default SkipNavLink

SkipNavLink.propTypes = {
    children: PropTypes.node,
}

SkipNavLink.defaultProps = {
    children: 'Skip to content',
}
