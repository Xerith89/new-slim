import React, { Component } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class SearchDropdown extends Component {

    constructor(props){
        super(props)

        this.state = {
            type: 'Spec',
            number: '',
        }

    }

    handleChange = (event) => {
        let name = event.target.name;
        let target = event.target.value;
        this.setState({
            [name]: target}
        );
    }

    handleSearch = (event) => {
        event.preventDefault();
        if (this.state.number !== "") {
            console.log("Make request to API");
        }
    }

    render() {
        return (
            <div data-testid="searchMenu">
                <div className="list-group dropdown-menu dropdown-menu-right mr-5 text-center">
                    <h5><FontAwesomeIcon icon={faSearch}/> Quick Search</h5>
                    <form className="m-2">
                        <div className="form-group" onChange={this.handleChange}>
                            <input type="radio" value="Spec" name="type" defaultChecked /> Specification 
                            <input type="radio" value="Claim" name="type" className="ml-2"/> Claim
                        </div>
                        <div className="form-group">
                            <label>Search Number</label>
                            <input type="text" data-testid="searchText" onChange={this.handleChange} value={this.state.number} name="number" className="form-control"/>
                        </div>
                        <button className="btn btn-block btn-primary" onClick={this.handleSearch} data-testid="searchButton">Search</button>
                    </form>
                    <div className="panel panel-default">
                    </div>
                    <button className="bg-transparent border-0 link">Advanced Search</button>
                </div>
            </div>
        )
    }
}
