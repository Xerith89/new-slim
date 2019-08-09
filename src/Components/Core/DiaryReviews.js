import React, { Component } from 'react'

export default class DiaryReviews extends Component {

    render() {

        const style = {
            width: "100%"
        }
        return (
            <div>
                <div className="col-md-12">
                    <div id="overview" className="card" style={style}>
                        <h5 className="card-header main-color-bg">Search</h5>
                        <div className="card-body">
                            <div className="card-deck">
                                <div className="card">

                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
