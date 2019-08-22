import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {filterByString} from '../Util/Filter'
import Pagination from './Pagination';

export default class FilterBar extends Component {

    constructor(props){
        super(props)

        this.state = this.getInitialState();
    }

    getInitialState = () => {
        const initialState = {
            filteredData:  this.props.data,
        }
        this.props.filterOptions.forEach((e) => {
            initialState[e.header] = ''
        })
        
        return initialState;
    }

    clearfilter = () => {
        this.setState(this.getInitialState());
    }

    handleChange = (event) => {
        let refiltered = this.props.data;
        //We're taking off a filter so recursively check all the others that are set
        if (event.target.value === '') {
            this.props.filterOptions.forEach((dropdown) => {
                if (dropdown.header !== event.target.name) {
                    refiltered = filterByString(refiltered, dropdown.header, this.state[dropdown.header]);
                }                
            });
           this.setState({
               filteredData: refiltered,
               [event.target.name]: event.target.value
           });
           //Setting a filter
        } else {
            this.props.filterOptions.forEach((dropdown) => {
                if (this.state[dropdown.header] !== '' && event.target.name !== dropdown.header) {
                    refiltered = filterByString(refiltered,dropdown.header,this.state[dropdown.header]);
                } else if(event.target.name === dropdown.header) {
                    refiltered = filterByString(refiltered,dropdown.header,event.target.value);
                }
            });
            this.setState({
                filteredData: refiltered,
                [event.target.name] : event.target.value
            });
        }
        
    }
   
    render() {
        return (
            <div>
                 <div id="overview" className="card m-4" style={{width: 'auto'}} data-testid="filterBar">
                 <div className="form-group m-2">
                 {this.props.filterOptions && this.props.filterOptions.map((element) => { 
                     return (<React.Fragment key={element.header}>
                                    <label className="mr-1 ml-2 mt-3 mb-2">{element.header}:</label>
                                    <select id={element.header} name={element.header} value={this.state[element.header]} onChange={this.handleChange} className="form-control-sm col-sm-2 mr-2">
                                    {element.body.map((option, j) => { 
                                    return( <option value={option} key={j}>{option}</option>)
                                    })}
                                    </select>
                            </React.Fragment>)
                            })}
                         <button onClick={this.clearfilter} className="btn btn-primary ml-3">Clear Filter</button>
                       </div>
                 </div>
                 <Pagination fetching={this.props.fetching} recordsPerPage={6} filteredData={this.state.filteredData} tableHeaderOptions={this.props.tableHeaderOptions}/>
            </div>
        )
    }
}

FilterBar.propTypes = {
    options: PropTypes.arrayOf(Object),
    fetchingTasks: PropTypes.bool,
    taskList: PropTypes.array
}
