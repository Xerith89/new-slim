import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    return (
        <div data-testid="nav">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand text-white" >New SLIM</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item nav-link active">
                      <h3>Welcome, Username</h3>
                    </li>
                    <li class="nav-item">
                       <a className="nav-link" href="#"> <FontAwesomeIcon icon={faCog} size="2x" /> </a>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
