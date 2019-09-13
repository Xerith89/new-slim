import React from 'react'
import PropTypes from 'prop-types'

/* TODO - 
select, radio button, checkbox to start off with
Submit will fall under button component
*/

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

export function PasswordInput(props) {
    return (
        <React.Fragment>
            {props.labelText ? <label style={props.labelStyle} className={props.labelClassName}>{props.labelText}</label> : null}
            <input type='password' style={props.style} name={props.name} value={props.value} id={props.id} placeholder={props.placeholder} onChange={props.onChange} className={props.className}>{props.display}</input>
            <span style={props.validationStyle} className={`text-danger ${props.validationClassName}`}>{props.validationMessage}</span>
        </React.Fragment>
    )
}

export function TextArea(props) {
    return (
        <React.Fragment>
            {props.labelText ? <label style={props.labelStyle} className={props.labelClassName}>{props.labelText}</label> : null}
            <textarea style={props.style} rows={props.rows} cols={props.cols} name={props.name} value={props.value} id={props.id} placeholder={props.placeholder} onChange={props.onChange} className={props.className}>{props.display}</textarea>
            <span style={props.validationStyle} className={`text-danger ${props.validationClassName}`}>{props.validationMessage}</span>
        </React.Fragment>
    )
}

export function Select(props) {
    return (
        <React.Fragment>
            {props.labelText ? <label style={props.labelStyle} className={props.labelClassName}>{props.labelText}</label> : null}
            <select style={props.style} rows={props.rows} value={props.value} id={props.id} onChange={props.onChange} className={props.className}>{props.display}
            {props.options && props.options.map((option, i) => {
                return(<option key={i}>{option}</option>)
            })}
            </select>
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
    max: PropTypes.string,
    min: PropTypes.string,
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

PasswordInput.propTypes = {
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

TextArea.propTypes = {
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
    validationMessage: PropTypes.string,
    rows: PropTypes.string,
    cols: PropTypes.string
}