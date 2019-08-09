import React, { Component } from 'react'
import NavColumn from '../Core/NavCol/NavColumn'
import DiaryReviews from '../Core/DiaryReviews'
import MessageReview from '../Core/MessageReview'

export default class Dashboard extends Component {
    render() {
        return (
            <div className = "Dashboard">
                <div className="row mt-5">
                        <NavColumn />
                        <DiaryReviews />
                    <div className="col-12">
                        <MessageReview />
                    </div>
                </div>
            </div>
        )
    }
}
