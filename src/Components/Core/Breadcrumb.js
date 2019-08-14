import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt} from '@fortawesome/free-solid-svg-icons'

export default function Breadcrumb(props) {
    return (
        <div className="container mt-3">
            <h1 className="text-center"><FontAwesomeIcon icon={faTachometerAlt}/> {props.title}</h1>
        </div>
    )
}

Breadcrumb.propTypes = {
    title: PropTypes.string
}
