import React, { Component } from 'react'
import FilterBar from './FilterBar';

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
                            <div className="m-3">
                                <table className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Subject</th>
                                        <th scope="col"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>Mark Otto</td>
                                        <td>12-04-19</td>
                                        <td>Callback</td>
                                        <td></td>
                                        </tr>
                                        <tr>
                                        <td>Jacob Thornton</td>
                                        <td>14-04-19</td>
                                        <td>New Claim</td>
                                        <td></td>
                                        </tr>
                                        <tr>
                                        <td>Larry</td>
                                        <td>Bird</td>
                                        <td>18-04-19</td>
                                        <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
