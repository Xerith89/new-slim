import React from 'react'
import PropTypes from 'prop-types'

export default function Breadcrumb(props) {
    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-light">
                <li className="breadcrumb-item active" aria-current="page">{props.title}</li>
            </ol>
            </nav>
        </div>
    )
}

Breadcrumb.propTypes = {
    title: PropTypes.string
}
