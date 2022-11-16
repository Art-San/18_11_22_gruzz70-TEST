import React from 'react'
import PropTypes from 'prop-types'

const Header = ({title, image, children}) => {
    console.log('children', children)
  return (
    <header className="header">
        <div className="header__container">
            <div className="header__container-bg">
                <img src={image} alt="Header Background" />
            </div>
            <div className="header__content">
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </div>
    </header>
  ) 
}

Header.propTypes = {
    title: PropTypes.array.isRequired,
    image: PropTypes.number.isRequired,
    children: PropTypes.string.isRequired
}

export default Header