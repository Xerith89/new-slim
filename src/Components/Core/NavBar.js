import React from 'react'
import {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import DropDown from './DropDown'

export default class NavBar extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            optionsOpen:false,
        }
    }

    toggleDropDown = () => {
        this.setState({
            optionsOpen: !this.state.optionsOpen,
        })
    }
    
    render() {

        const optionsIsOpen = this.state.optionsOpen;
        let menu;

        if (optionsIsOpen) {
            menu = <DropDown/>
        }

        return (
           <div data-testid="nav">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h1 className="navbar-brand text-white" >New SLIM</h1>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item nav-link active">
                            <h3>Welcome, Username</h3>
                        </li>
                        <div className="dropdown">
                            <li className="nav-item">
                                <button className="nav-link bg-transparent border-0" data-testid="toggler" onClick={this.toggleDropDown} ><FontAwesomeIcon icon={faCog} size="2x" /></button>
                            </li>
                            {menu}
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
        )
    }
}
