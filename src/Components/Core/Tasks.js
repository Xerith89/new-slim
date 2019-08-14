import React, { Component } from 'react'
import FilterBar from './FilterBar'
import TableDisplayData from './TableDisplayData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

export default class Tasks extends Component {

    constructor(props) {
        super(props)

        this.state = {
            taskList: []
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/todos?_limit=10')
        .then(response => response.json())
        .then (json => {
            this.setState({
                taskList: json
            });
        })
        .catch(error => console.log(error)
        );
    }

    render() {

        const filterOptions = 
        [
            {
                header: 'Tasks',
                body: [
                    'My Tasks',
                    'Team Tasks'
                ]
            },

            {
                header: 'Status',
                body: [
                    'Reviewed',
                    'Unreviewed'
                ]
            },

            {
                header: 'Priority',
                body: [
                    'Normal',
                    'Urgent'
                ]
            },
            {
                header: 'Date',
                body: [
                    'Last Week',
                    'Last Two Weeks',
                    'Last Month',
                    'Custom'
                ]
            },
        ]

        const tableOptions = [
            'Task Name', 'Raised On', 'Type', 'Assigned To', 'Priority', 'Due Date'
        ]

        return (
            <div >
                <div className="mt-5">
                    <div id="overview" className="card" style={{width: 'auto'}}>
                        <h2 className="card-header  text-center" style={{backgroundColor: "#ebf2fc"}}><FontAwesomeIcon icon={faEdit}/> Tasks</h2>
                        <div className="card-body bg-white">
                            <FilterBar options={filterOptions}/>
                            <TableDisplayData tasks={this.state.taskList} options={tableOptions}/>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
