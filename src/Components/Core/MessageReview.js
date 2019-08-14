import React, { Component } from 'react'
import FilterBar from './FilterBar'
import TableDisplayData from './TableDisplayData'

export default class MessageReview extends Component {

    render() {

        const filterOptions = 
        [
            {
                header: 'Messages',
                body: [
                    'My Messages',
                    'Team Messages'
                ]
            },

            {
                header: 'Status',
                body: [
                    'Read',
                    'Unread'
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
                        <h5 className="card-header text-center" style={{backgroundColor: "#ebf2fc"}}>Messages <span className="badge badge-dark">3</span></h5>
                        <div className="card-body">
                           <FilterBar options={filterOptions} />
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
