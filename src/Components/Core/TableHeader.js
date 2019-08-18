import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort} from '@fortawesome/free-solid-svg-icons'
import {tableOptions} from '../Util/TasksConfig'
import DisplayTasks from './DisplayTasks'
import {sortType} from '../Util/Enums'
import Spinner from './Spinner';
import {sortAscending, sortDescending} from '../Util/Sorting'

export default class TableHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks : this.props.taskList,
            sortedTasks: [],
            nextSortTaskName: sortType.ASCENDING,
            nextSortNumber: sortType.ASCENDING,
            nextSortType: sortType.ASCENDING,
            nextSortAssignedTo: sortType.ASCENDING,
            nextSortPriority: sortType.ASCENDING,
            nextsortDueDate: sortType.ASCENDING
        }
    }

    handleClick = (event) => {
        const sorted = [...this.state.tasks];
        switch (this.state.nextSortTaskName) {
            case sortType.DEFAULT:
                this.setState({
                   sortedTasks: this.props.taskList,
                   nextSortTaskName: sortType.ASCENDING
                });
                break;
            case sortType.ASCENDING:
                sortAscending(sorted,'taskName');
                this.setState({
                    sortedTasks: sorted,
                    nextSortTaskName: sortType.DESECENDING
                });
                break;
            case sortType.DESECENDING:
                sortDescending(sorted, 'taskName');
                this.setState({
                    sortedTasks: sorted,
                    nextSortTaskName: sortType.DEFAULT
                });
                break;
            default:
                console.log("Default case");
                break;

        }
    }

    render() {
        let displayTasks;
        if (this.state.sortedTasks.length && !this.props.fetchingTasks) {
           displayTasks = <DisplayTasks taskList={this.state.sortedTasks}/>;
        } else if (!this.state.sortedTasks.length && !this.props.fetchingTasks) {
           displayTasks = <DisplayTasks taskList={this.props.taskList} />;
        }

        return (
            <div>
                <div className="m-3">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                {tableOptions.map((option,i) => {
                                    return (<th scope="col" key={i}>{option} <button id={i} onClick={this.handleClick} style={{border: '0', padding: '0', background: 'none'}} data-toggle="tooltip" data-placement="top" title="Sort"><FontAwesomeIcon icon={faSort}/></button></th>)
                                })}
                            </tr>
                        </thead>
                        {displayTasks} 
                    </table>
                    {this.props.fetchingTasks ? <Spinner /> : null}
                </div>
            </div>
        )
    }
}
