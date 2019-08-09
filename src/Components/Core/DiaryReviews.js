import React, { Component } from 'react'

export default class DiaryReviews extends Component {

    render() {

        return (
            <div >
                <div className="mt-5 ml-5">
                    <div id="overview" className="card" style={{width: '70rem'}}>
                        <h5 className="card-header text-center main-color-bg">Diary Reviews</h5>
                        <div className="card-body">
                            <div className="card">
                                <div className="form-group">
                                <select className="form-control-sm">
                                    <option>My Diary</option>
                                    <option>Team Diary</option>
                                </select>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
