import React, { Component } from 'react'

export default class MessageReview extends Component {

    render() {

        return (
            <div >
                <div className="mt-5">
                    <div id="overview" className="card" style={{width: 'auto'}}>
                        <h5 className="card-header text-center" style={{backgroundColor: "#ebf2fc"}}>Messages <span className="badge badge-dark">3</span></h5>
                        <div className="card-body">
                            <div className="form-group">
                            <select className="form-control-sm">
                                <option>My Messages</option>
                                <option>Team Messages</option>
                            </select>
                            </div>
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
