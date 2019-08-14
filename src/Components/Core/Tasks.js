import React, { Component } from 'react'
import FilterBar from './FilterBar'

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
            }
        ]

        return (
            <div >
                <div className="mt-5">
                    <div id="overview" className="card" style={{width: 'auto'}}>
                        <h5 className="card-header  text-center" style={{backgroundColor: "#ebf2fc"}}>Tasks</h5>
                        <div className="card-body bg-white">
                            <FilterBar options={filterOptions}/>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
