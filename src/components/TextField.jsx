import React from 'react'
import PropTypes from 'prop-types'

const TextField = (props) => {
    const { name, label, placeholder, value, onChange, type, error } = props
    return (
        <div>
            <label htmlFor={name}>{label}</label>{' '}
            <input
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                id={name}
                type={type}
                name={name}
            />
            {error && <p>{error}</p>}
        </div>
    )
}

TextField.defaultValues = {
    type: 'text'
}

TextField.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    error: PropTypes.string
}
export default TextField
