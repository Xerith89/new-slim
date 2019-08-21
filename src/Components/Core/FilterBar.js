import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {filterByString} from '../Util/Filter'
import Pagination from './Pagination';

export default class FilterBar extends Component {

    constructor(props){
        super(props)

        this.state = {
            filteredData:  this.props.data,
        }
    }

    clearfilter = () => {
        this.setState({
            filteredData: this.props.data,
        })
    }

    handleChange = (event) => {

        //TODO Can we clean this up?
        
        if (event.target.value === '') {

            //Check for any other filters
            let refiltered = this.props.data;
            if (event.target.name !== 'Type') {
                refiltered = filterByString(refiltered,"type",this.state.Type);
            }
            if (event.target.name !== 'Assigned') {
                refiltered = filterByString(refiltered,"assigned",this.state.Assigned);
            }
            if (event.target.name !== 'Priority') {
                refiltered = filterByString(refiltered,"priority",this.state.Priority);
            }
            this.setState({
                filteredData: refiltered,
                [event.target.name] : event.target.value  
            })
        }
        else if (event.target.value !== '' && this.state[event.target.name] !== '') {
            
            let refiltered = this.props.taskList;
           
            if (this.state.Type !== '' && event.target.name !== 'Type') {
                refiltered = filterByString(refiltered,"type",this.state.Type);
            } else if(event.target.name === 'Type') {
                refiltered = filterByString(refiltered,"type",event.target.value);
            }

            if (this.state.Assigned !== '' && event.target.name !== 'Assigned') {
                refiltered = filterByString(refiltered,"assigned",this.state.Assigned);
            } else if(event.target.name === 'Assigned'){
                refiltered = filterByString(refiltered,"assigned",event.target.value);
            }
           
            if (this.state.Priority !== '' && event.target.name !== 'Priority') {
                refiltered = filterByString(refiltered,"priority",this.state.Priority);
            } else if(event.target.name === 'Priority') {
                refiltered = filterByString(refiltered,"priority",event.target.value);
            }
            this.setState({
                filteredData: refiltered,
                [event.target.name] : event.target.value
            })
        } else {
            this.setState({
                filteredData: filterByString(this.state.filteredData, [event.target.name.toLowerCase()], event.target.value),
                [event.target.name] : event.target.value
            });
        }
      };
   
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
                 <Pagination fetching={this.props.fetching} totalRecords={6} recordsPerPage={3} filteredData={this.state.filteredData} tableHeaderOptions={this.props.tableHeaderOptions}/>
            </div>
        )
    }
}

FilterBar.propTypes = {
    options: PropTypes.arrayOf(Object),
    fetchingTasks: PropTypes.bool,
    taskList: PropTypes.array
}
