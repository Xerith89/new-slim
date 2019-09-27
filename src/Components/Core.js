import React from 'react'
import PropTypes from 'prop-types'

export function Button(props) {
    return (
        <div>
            <button type={props.type} className={props.className} name={props.name} onClick={props.onClick} style={props.style}>{props.display}{props.children}</button>
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
        <h2 style={props.style} className={`card-header `+props.className}>{props.title} {props.children}</h2>
    )
}

export function CardBody(props) {
    return (
        <div style={props.style} className={`card-body `+props.className}>
            {props.children ? props.children : null}
        </div>
    )
}

export function NavBar(props) {
    return (
        <div>
            <nav style={props.style} id={props.id} className={`navbar ${props.className}`}>
                <h3>{props.brand}</h3>
                   {props.children}
            </nav>
        </div>
    )
}

export function NavLinks(props) {
    return (
        <ul className={`navbar-nav list-group-horizontal-sm ${props.className}`}>
            {props.navLinks && props.navLinks.map((link,i) => {
                return (  <li key={i} className="nav-item mr-2">
                 <a className="nav-link" href="/">{link}</a>   
                </li>)
            })}
        </ul>
    )
}

Button.propTypes = {
    style: PropTypes.object,
    display: PropTypes.any,
    className: PropTypes.string,
    onClick: PropTypes.func,
    name: PropTypes.string,
    type: PropTypes.string,
    children: PropTypes.any,
}

Card.propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
    className: PropTypes.string,
}

CardTitle.propTypes = {
    title: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string,
    style: PropTypes.object,
}

CardBody.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.any
}





