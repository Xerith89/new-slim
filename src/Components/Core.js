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
            <button type={props.type} className={props.className} name={props.name} onClick={props.onClick} style={props.style}>{props.display}</button>
        </div>
    )
}

export function Card(props) {
    return (
        <div>
        <div className={`card `+props.className} style={props.style}>
            <div>{props.children ? props.children : null}</div>
        </div>
    </div>
    )
}

export function CardTitle(props) {
    return (
        <h2 style={props.style} className={`card-header `+props.className}>{props.title}</h2>
    )
}

export function CardBody(props) {
    return (
        <div style={props.style} className={`card-body `+props.className}>
            {props.children ? props.children : null}
        </div>
    )
}

Button.propTypes = {
    style: PropTypes.object,
    display: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string
}

Card.propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string,
}

CardTitle.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
}

CardBody.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.any
}


Spinner.propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
}


