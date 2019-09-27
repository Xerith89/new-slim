import React from 'react'
import PropTypes from 'prop-types'

export function Alert(props){
return (
    <div className={`alert ${props.className}`} style={props.style}  role="alert">
       {props.children}
    </div>
    )
}

export function AlertHeading(props) {
    return (
        <h4 style={props.style} className={`alert-heading ${props.className}`}>{props.text}</h4>
    )
}

export function HorizontalLine(props){
    return (
        <hr style={props.style} />
    )
}

export function Paragraph(props){
    return (
        <p className={props.className} style={props.style}>{props.text}</p>
    )
}



Alert.propTypes = {
    className: PropTypes.string,
    children: PropTypes.any,
    style: PropTypes.object,
}

AlertHeading.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    style: PropTypes.object,
}

HorizontalLine.propTypes = {
    style: PropTypes.object
}

Paragraph.propTypes = {
    style: PropTypes.object,
    text: PropTypes.string,
    className: PropTypes.string
}