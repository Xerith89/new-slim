import React, { Component } from 'react'
import NavColumn from '../Core/NavCol/NavColumn'
import Tasks from '../Core/Tasks'
import Messages from '../Core/Messages'
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
                        <Tasks />
                        <Messages />
                    </div>
                </div>
            </div>
        )
    }
}
