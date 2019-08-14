import React, { Component } from 'react'
import FilterBar from './FilterBar'
import TableDisplayData from './TableDisplayData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'

export default class Tasks extends Component {

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
            'Task Name', 'Raised On', 'Assigned To', 'Priority', 'Due Date'
        ]

        return (
            <div >
                <div className="mt-5">
                    <div id="overview" className="card" style={{width: 'auto'}}>
                        <h2 className="card-header  text-center" style={{backgroundColor: "#ebf2fc"}}><FontAwesomeIcon icon={faBook}/> Tasks <span className="badge">0</span></h2>
                        <div className="card-body bg-white">
                            <FilterBar options={filterOptions}/>
                            <TableDisplayData options={tableOptions}/>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
