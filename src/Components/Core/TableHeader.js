import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort} from '@fortawesome/free-solid-svg-icons'
import {tableOptions} from '../Util/TasksConfig'
import DisplayTasks from './DisplayTasks'
import {sortType} from '../Util/Enums'
import Spinner from './Spinner';

export default class TableHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks : this.props.taskList,
            sortedTasks: [],
            sortTaskNameAscending: sortType.DEFAULT,
            sortNumberAscending: true,
            sortTypeAscending: true,
            sortAssignedToAscending: true,
            sortPriorityAscending: true,
            sortDueDateAscending: true
        }
    }

    handleClick = (event) => {
        const sorted = [...this.state.tasks];

        switch (this.state.sortTaskNameAscending) {
            case sortType.DEFAULT:
                this.setState({
                    sortedTasks: this.props.taskList,
                    sortTaskNameAscending: sortType.ASCENDING
                });
                break;
            case sortType.ASCENDING:
                sorted.sort((a,b) => {
                    const genreA = a.taskName.toUpperCase();
                    const genreB = b.taskName.toUpperCase();
                
                    let comparison = 0;
                    if (genreA < genreB) {
                    comparison = 1;
                    } else if (genreA > genreB) {
                    comparison = -1;
                    }
                    return comparison;
                });
                this.setState({
                    sortedTasks: sorted,
                    sortTaskNameAscending: sortType.DESECENDING
                });
                break;
            case sortType.DESECENDING:
                sorted.sort((a,b) => {
                    const genreA = a.taskName.toUpperCase();
                    const genreB = b.taskName.toUpperCase();
                
                    let comparison = 0;
                    if (genreA > genreB) {
                    comparison = 1;
                    } else if (genreA < genreB) {
                    comparison = -1;
                    }
                    return comparison;
                });
                this.setState({
                    sortedTasks: sorted,
                    sortTaskNameAscending: sortType.DEFAULT
                });
                break;
        }
    }

    render() {
        let displayTasks;
        if (this.state.sortedTasks.length && !this.props.fetchingTasks) {
           displayTasks = <DisplayTasks taskList={this.state.sortedTasks}/>;
        } else if (!this.state.sortedTasks.length && !this.props.fetchingTasks) {
           displayTasks = <DisplayTasks taskList={this.state.tasks} />;
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