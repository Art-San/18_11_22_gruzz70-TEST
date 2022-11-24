import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ className, children }) => {
    return <article className={`card ${className}`}>{children}</article>
}

Card.propTypes = {
    className: PropTypes.string,
    children: PropTypes.array
}
export default Card
