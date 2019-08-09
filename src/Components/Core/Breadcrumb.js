import React from 'react'

export default function Breadcrumb(props) {
    return (
        <div className="container mt-3">
            <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active" aria-current="page">{props.title}</li>
            </ol>
            </nav>
        </div>
    )
}
