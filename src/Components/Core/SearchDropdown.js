import React, { Component } from 'react'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class SearchDropdown extends Component {

    constructor(props){
        super(props)

        this.state = {
            type: '',
            number: ''
        }
    }

    onChange = (event) => {
        let name = event.target.name;
        let target = event.target.value;
        this.setState({
            [name]: target
        });
    }

    handleSearch = (event) => {
        event.preventDefault();
        console.log("Make request to API");
    }

    render() {
        return (
            <div data-testid="searchMenu">
                <div className="list-group dropdown-menu dropdown-menu-right mr-5 text-center">
                    <h5><FontAwesomeIcon icon={faSearch}/> Quick Search</h5>
                    <form className="m-2">
                        <div className="form-group" onChange={this.onChange}>
                            <input type="radio" value="spec" name="type" defaultChecked /> Specification 
                            <input type="radio" value="claim" name="type" className="ml-2"/> Claim
                        </div>
                        <div className="form-group">
                            <label>Search Number</label>
                            <input type="text" onChange={this.onChange} name="number" className="form-control"/>
                        </div>
                        <button className="btn btn-block btn-primary" onClick={this.handleSearch} >Search</button>
                    </form>
                    <button className="bg-transparent border-0 link">Advanced Search</button>
                </div>
            </div>
        )
    }
}
