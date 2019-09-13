import React from 'react'
import PropTypes from 'prop-types'

export function Form(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                {props.children ? props.children : null}
            </form>
        </div>
    )
}

export function TextInput(props) {
    return (
        <React.Fragment>
            {props.labelText ? <label style={props.labelStyle} className={props.labelClassName}>{props.labelText}</label> : null}
            <input type='text' style={props.style} name={props.name} value={props.value} id={props.id} placeholder={props.placeholder} onChange={props.onChange} className={props.className}>{props.display}</input>
            <span style={props.validationStyle} className={`text-danger ${props.validationClassName}`}>{props.validationMessage}</span>
        </React.Fragment>
    )
}

export function EmailInput(props) {
    return (
        <React.Fragment>
            {props.labelText ? <label style={props.labelStyle} className={props.labelClassName}>{props.labelText}</label> : null}
            <input type='email' style={props.style} name={props.name} value={props.value} id={props.id} placeholder={props.placeholder} onChange={props.onChange} className={props.className}>{props.display}</input>
            <span style={props.validationStyle} className={`text-danger ${props.validationClassName}`}>{props.validationMessage}</span>
        </React.Fragment>
    )
}

export function NumberInput(props) {
    return (
        <React.Fragment>
            {props.labelText ? <label style={props.labelStyle} className={props.labelClassName}>{props.labelText}</label> : null}
            <input type='number' max={props.max} min={props.min} step={props.step} style={props.style} name={props.name} value={props.value} id={props.id} placeholder={props.placeholder} onChange={props.onChange} className={props.className}>{props.display}</input>
            <span style={props.validationStyle} className={`text-danger ${props.validationClassName}`}>{props.validationMessage}</span>
        </React.Fragment>
    )
}


Form.propTypes = {
    children: PropTypes.any,
    onSubmit: PropTypes.func
}


TextInput.propTypes = {
    style: PropTypes.object,
    labelStyle: PropTypes.object,
    name: PropTypes.string,
    value: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string, 
    className: PropTypes.string,
    labelClassName: PropTypes.string,
    labelText: PropTypes.string,
    onSubmit: PropTypes.func,
    children: PropTypes.any,
    onChange: PropTypes.func,
    validationStyle: PropTypes.object,
    validationClassName: PropTypes.string,
    validationMessage: PropTypes.string
}

EmailInput.propTypes = {
    style: PropTypes.object,
    labelStyle: PropTypes.object,
    name: PropTypes.string,
    value: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string, 
    className: PropTypes.string,
    labelClassName: PropTypes.string,
    labelText: PropTypes.string,
    onSubmit: PropTypes.func,
    children: PropTypes.any,
    onChange: PropTypes.func,
    validationStyle: PropTypes.object,
    validationClassName: PropTypes.string,
    validationMessage: PropTypes.string
}

NumberInput.propTypes = {
    style: PropTypes.object,
    labelStyle: PropTypes.object,
    name: PropTypes.string,
    value: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    id: PropTypes.string,
    placeholder: PropTypes.string, 
    className: PropTypes.string,
    labelClassName: PropTypes.string,
    labelText: PropTypes.string,
    onSubmit: PropTypes.func,
    children: PropTypes.any,
    onChange: PropTypes.func,
    validationStyle: PropTypes.object,
    validationClassName: PropTypes.string,
    validationMessage: PropTypes.string
}