import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {filterOptions} from '../Util/TasksConfig'
import TableHeader from './TableHeader'
import {filterByString} from '../Util/Filter'

export default class FilterBar extends Component {

    constructor(props){
        super(props)

        this.state = {
            dataFiltered:  this.props.taskList,
            Type: '',
            Assigned: '',
            Priority: ''
        }
    }

    clearfilter = () => {
        this.setState({
            dataFiltered: this.props.taskList,
            Type: '',
            Assigned: '',
            Priority: ''
        })
    }

    handleChange = (event) => {
        
        if (event.target.value === '') {
            this.setState({
                dataFiltered: this.props.taskList,
                [event.target.name] : event.target.value  
            })
        }
        else if (event.target.value !== '' && this.state[event.target.name] !== '') {
            this.setState({
                dataFiltered: filterByString(this.props.taskList, [event.target.name.toLowerCase()], event.target.value),
                [event.target.name] : event.target.value
            })
        } else {
            this.setState({
                dataFiltered: filterByString(this.state.dataFiltered, [event.target.name.toLowerCase()], event.target.value),
                [event.target.name] : event.target.value
            });
        }
      };
   
    render() {
        return (
            <div>
                 <div id="overview" className="card" style={{width: 'auto'}} data-testid="filterBar">
                 <div className="form-group m-2">
                 {filterOptions.map((element) => { 
                     return (<React.Fragment key={element.header}>
                                    <label className="mr-1 ml-2 mt-3 mb-2">{element.header}:</label>
                                    <select name={element.header} value={this.state[element.header]} onChange={this.handleChange} className="form-control-sm col-sm-2 mr-2">
                                    {element.body.map((option, j) => { 
                                    return( <option value={option} key={j}>{option}</option>)
                                    })}
                                    </select>
                            </React.Fragment>)
                            })}
                         <button onClick={this.clearfilter} className="btn btn-primary ml-3">Clear Filter</button>
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
