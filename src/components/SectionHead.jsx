import React from 'react'
import PropTypes from 'prop-types'

const SectionHead = ({ icon, title, className }) => {
    // console.log('className', className, title)
    return (
        <div className={`section__head ${className}`}>
            <span>{icon}</span>
            <h2>{title}</h2>
        </div>
    )
}

SectionHead.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    className: PropTypes.string
}

export default SectionHead
