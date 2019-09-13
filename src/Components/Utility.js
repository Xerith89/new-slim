import React from 'react'
import PropTypes from 'prop-types'

export function Spinner(props) {
    return (
        <div>
            <div style={props.style} className={`spinner-border ${props.className}`} id={props.id} role="status"></div>
        </div>
    )
}

export function Badge(props) {
    return (
        <span style={props.style} className={`badge ${props.className}`}>{props.display}</span>
    )
}


Spinner.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    id: PropTypes.string
}

Spinner.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string,
    display: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
}