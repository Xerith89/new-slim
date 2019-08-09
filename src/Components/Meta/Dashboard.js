import React, { Component } from 'react'
import NavColumn from '../Core/NavCol/NavColumn'
import DiaryReviews from '../Core/DiaryReviews'

export default class Dashboard extends Component {
    render() {
        return (
            <div className = "Dashboard">
                <div className="row mt-5">
                    <NavColumn />
                    <DiaryReviews />
                </div>
            </div>
        )
    }
}
