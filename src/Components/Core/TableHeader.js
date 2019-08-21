import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort} from '@fortawesome/free-solid-svg-icons'
import DisplayTasks from './DisplayTasks'
import {sortType} from '../Util/Enums'
import {sortAscending, sortDescending} from '../Util/Sorting'
import { PropTypes } from 'prop-types';

export default class TableHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sortedData: this.props.paginatedData,
            nextSortTaskName: sortType.ASCENDING,
            nextSortNumber: sortType.ASCENDING,
            nextSortType: sortType.ASCENDING,
            nextSortAssignedTo: sortType.ASCENDING,
            nextSortPriority: sortType.ASCENDING,
            nextsortDueDate: sortType.ASCENDING
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.filteredData !== this.props.filteredData) {
          this.setState({sortedData: this.props.filteredData,});
        }
      }

    doSort = (propertyName) => {
        const sorted = [...this.state.sortedData];
        switch (this.state.nextSortTaskName) {
            case sortType.DEFAULT:
                this.setState({
                   sortedData: this.props.filteredData,
                   nextSortTaskName: sortType.ASCENDING
                });
                break;
            case sortType.ASCENDING:
                sortAscending(sorted, propertyName);
                this.setState({
                    sortedData: sorted,
                    nextSortTaskName: sortType.DESECENDING
                });
                break;
            case sortType.DESECENDING:
                sortDescending(sorted, propertyName);
                this.setState({
                    sortedData: sorted,
                    nextSortTaskName: sortType.DEFAULT
                });
                break;
            default:
                break;

        }
    }

    //Switch on button ID to call sort on the correct property
    handleClick = (event) => {
       this.doSort([event.target.name]);
    }

    render() {
        return (
            <React.Fragment>
            <thead data-testid="tableHeader">
                <tr>
                    {this.props.tableHeaderOptions && this.props.tableHeaderOptions.map((option,i) => {
                        return (<th scope="col" key={i}>{option} <button id={`id-${i}`} onClick={this.handleClick.bind(this, i)} 
                        style={{border: '0', padding: '0', background: 'none'}} data-toggle="tooltip" data-placement="top" title={`Sort By ${option}`}>
                        <FontAwesomeIcon icon={faSort}/></button></th>)
                    })}
                </tr>
            </thead>
            <tbody>
                {this.props.fetching ? null : <DisplayTasks finalData={this.state.sortedData}/>} 
            </tbody>   
            </React.Fragment>
        )
    }
}

TableHeader.propTypes = {
    fetchingTasks: PropTypes.bool,
    taskList: PropTypes.array
}
