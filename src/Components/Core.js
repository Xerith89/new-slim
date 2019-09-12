import React from 'react'
import PropTypes from 'prop-types'

export function Spinner(props) {
    return (
        <div className="d-flex justify-content-center m-5" data-testid='spinner'>
            <div style={props.style} className="spinner-border" role="status">
            </div>
      </div>
    )
}

export function Button(props) {
    return (
        <div>
            <button className={props.className} name={props.name} onClick={props.onClick} style={props.style}>{props.text}</button>
        </div>
    )
}

Button.propTypes = {
    style: PropTypes.object,
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
    name: PropTypes.string
}


Spinner.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
}


