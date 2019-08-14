import React, { Component } from 'react'
import NavColumn from '../Core/NavCol/NavColumn'
import DiaryReviews from '../Core/DiaryReviews'
import MessageReview from '../Core/MessageReview'
import Breadcrumb from '../Core/Breadcrumb'

export default class Dashboard extends Component {
    render() {
        return (
            <div className = "Dashboard">
                <Breadcrumb title="Dashboard"/>
                <div className="row mr-0">
                    <div className="col-md-3">
                        <NavColumn />
                    </div>
                    <div className="col-md-8">
                        <DiaryReviews />
                        <MessageReview />
                    </div>
                </div>
            </div>
        )
    }
}
