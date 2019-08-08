import React from 'react'
import {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faSearch } from '@fortawesome/free-solid-svg-icons'
import OptionsDropdown from './OptionsDropdown'
import PropTypes from 'prop-types'
import SearchDropdown from './SearchDropdown'

export default class TopBar extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            optionsOpen:false,
            searchOpen:false,
        }
    }

    toggleOptionsDropDown = () => {
        this.setState({
            optionsOpen: !this.state.optionsOpen,
            searchOpen: false,
        })
    }

    toggleSearchDropDown = () => {
        this.setState({
            optionsOpen: false,
            searchOpen: !this.state.searchOpen,
        })
    }
    
    render() {

        const optionsIsOpen = this.state.optionsOpen;
        const searchIsOpen = this.state.searchOpen;
        let menu;
        let search;

        if (optionsIsOpen) {
            menu = <OptionsDropdown/>
        }

        if (searchIsOpen) {
           search = <SearchDropdown/>
        }

        return (
           <div data-testid="topbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
                <h3 className="text-white ml-5 mb-0">New SLIM</h3>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item nav-link active">
                            <h3>Welcome, {this.props.user}</h3>
                        </li>
                        <li className="nav-item ">
                           <button className="nav-link bg-transparent border-0" data-testid="searchToggler" onClick={this.toggleSearchDropDown}><FontAwesomeIcon icon={faSearch} size="2x"  /></button> 
                        </li>
                        {search}
                        <div className="dropdown pr-5">
                            <li className="nav-item">
                                <button className="nav-link bg-transparent border-0" data-testid="optionsToggler" onClick={this.toggleOptionsDropDown} ><FontAwesomeIcon icon={faCog} size="2x" /></button>
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

TopBar.propTypes = {
    user: PropTypes.string
};
