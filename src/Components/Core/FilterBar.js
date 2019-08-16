import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {filterOptions} from '../Util/TasksConfig'
import TableHeader from './TableHeader'

export default class FilterBar extends Component {
    constructor(props){
        super(props)
        this.state = {
            tasksFiltered: this.props.taskList
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.value]: event.target.value });
      };

   

    render() {
       
        return (
            <div>
                 <div id="overview" className="card" style={{width: 'auto'}}>
                 <div className="form-group m-2">
                 {filterOptions.map((element, i) => { 
                     return (<React.Fragment key={i}>
                                    <label className="mr-1 ml-2 mt-3 mb-2">{element.header}:</label>
                                    <select onChange={this.handleChange} className="form-control-sm col-sm-2 mr-2">
                                    {element.body.map((option, j) => { 
                                    return( <option key={j}>{option}</option>)
                                    })}
                                    </select>
                            </React.Fragment>)
                            })}
                       
                       </div>
                 </div>
                 <TableHeader fetchingTasks={this.props.fetchingTasks} taskList={this.state.tasksFiltered}/>
            </div>
        )
    }
}

FilterBar.propTypes = {
    options: PropTypes.arrayOf(Object)
}
