import React, { Component } from 'react'
import NavColumn from '../Core/NavColumn'
import SearchArea from '../Core/SearchArea'

export default class Dashboard extends Component {
    render() {
        return (
            <div className = "Dashboard">
                <div className="row">
                    <NavColumn />
                    <div className="ml-3">
                    </div>
                </div>
            </div>
        )
    }
}
