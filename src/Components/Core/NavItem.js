import React from 'react'

export default function NavItem(props) {
    return (
        <div>
             <ul className="list-group list-group-flush">
                <h3 className="navbar-dark bg-dark text-white list-group-item">{props.title}</h3>
                {props.links.map((element, i) => {
                    return <li className="list-group-item" key={i}>{element}</li>
                })}
            </ul>
        </div>
    )
}
