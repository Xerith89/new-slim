import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort} from '@fortawesome/free-solid-svg-icons'
import {tableOptions} from '../Util/TasksConfig'
import DisplayTasks from './DisplayTasks'
import {sortType} from '../Util/Enums'

import {sortAscending, sortDescending} from '../Util/Sorting'
import { PropTypes } from 'prop-types';

export default class TableHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sortedTasks: this.props.taskList,
            nextSortTaskName: sortType.ASCENDING,
            nextSortNumber: sortType.ASCENDING,
            nextSortType: sortType.ASCENDING,
            nextSortAssignedTo: sortType.ASCENDING,
            nextSortPriority: sortType.ASCENDING,
            nextsortDueDate: sortType.ASCENDING
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.taskList !== this.props.taskList) {
          this.setState({sortedTasks: this.props.taskList,});
        }
      }

    doSort = (propertyName) => {
        const sorted = [...this.state.sortedTasks];
        switch (this.state.nextSortTaskName) {
            case sortType.DEFAULT:
                this.setState({
                   sortedTasks: this.props.taskList,
                   nextSortTaskName: sortType.ASCENDING
                });
                break;
            case sortType.ASCENDING:
                sortAscending(sorted, propertyName);
                this.setState({
                    sortedTasks: sorted,
                    nextSortTaskName: sortType.DESECENDING
                });
                break;
            case sortType.DESECENDING:
                sortDescending(sorted, propertyName);
                this.setState({
                    sortedTasks: sorted,
                    nextSortTaskName: sortType.DEFAULT
                });
                break;
            default:
                break;

        }
    }

    //Switch on button ID to call sort on the correct property
    handleClick = (event) => {
        switch(event) {
            case 0:
                this.doSort('taskName');
                break;
            case 1:
                this.doSort('claimSpecNo');
                break;
            case 2:
                this.doSort('type');
                break;
            case 3:
                this.doSort('assigned');
                break;
            case 4:
                this.doSort('priority');
                break;
            case 5:
                this.doSort('dueDate');
                break;
            default:
                break;
        }    
    }

    render() {
      
        return (
            <React.Fragment>
            <thead data-testid="tableHeader">
                <tr>
                    {tableOptions.map((option,i) => {
                        return (<th scope="col" key={i}>{option} <button id={`id-${i}`} onClick={this.handleClick.bind(this, i)} 
                        style={{border: '0', padding: '0', background: 'none'}} data-toggle="tooltip" data-placement="top" title={`Sort By ${option}`}>
                        <FontAwesomeIcon icon={faSort}/></button></th>)
                    })}
                </tr>
            </thead>
            <tbody>
                {this.props.fetching ? null : <DisplayTasks taskList={this.state.sortedTasks}/>} 
            </tbody>   
            </React.Fragment>
        )
    }
}

TableHeader.propTypes = {
    fetchingTasks: PropTypes.bool,
    taskList: PropTypes.array
}
