import React from 'react'

export default function DropDown() {
    return (
        <div data-testid="menu">
            <ul className="list-group dropdown-menu dropdown-menu-right">
                <li className="dropdown-item"><a href="/settings">Settings</a></li>
                <div className="dropdown-divider"></div>
                <li className="dropdown-item"><a href="/logout">Logout</a></li>
            </ul>
        </div>
    )
}