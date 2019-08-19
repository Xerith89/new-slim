import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {filterOptions} from '../Util/TasksConfig'
import TableHeader from './TableHeader'
import {filterByString} from '../Util/Filter'

export default class FilterBar extends Component {

    defaultState = { dataFiltered:  this.props.taskList}
    constructor(props){
        super(props)

        this.state = this.defaultState;
    }

    doFilter = (propertyName, inputstring) => {
        const result = filterByString(this.state.dataFiltered, propertyName, inputstring);
        return result;
    }

    handleChange = (event) => {
        //Needs refining
        this.state.dataFiltered = this.props.taskList;
        this.setState({
            dataFiltered: this.doFilter([event.target.name.toLowerCase()], event.target.value)
        });
      };
   
    render() {
        return (
            <div>
                 <div id="overview" className="card" style={{width: 'auto'}}>
                 <div className="form-group m-2">
                 {filterOptions.map((element) => { 
                     return (<React.Fragment key={element.header}>
                                    <label className="mr-1 ml-2 mt-3 mb-2">{element.header}:</label>
                                    <select name={element.header} onChange={this.handleChange} className="form-control-sm col-sm-2 mr-2">
                                    {element.body.map((option, j) => { 
                                    return( <option value={option} key={j}>{option}</option>)
                                    })}
                                    </select>
                            </React.Fragment>)
                            })}
                       
                       </div>
                 </div>
                 <TableHeader fetchingTasks={this.props.fetchingTasks} taskList={this.state.dataFiltered}/>
            </div>
        )
    }
}

FilterBar.propTypes = {
    options: PropTypes.arrayOf(Object),
    fetchingTasks: PropTypes.bool,
    taskList: PropTypes.array
}
