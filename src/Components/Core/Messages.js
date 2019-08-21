import React, { Component } from 'react'
import FilterBar from './FilterBar'
import {messagesFilterOptions, messagesTableOptions} from '../Util/MessagesConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default class Messages extends Component {

    constructor(props){
        super(props)
        this.state = {
            messageList: [
                {
                    id: 1,
                    from: 'Mr Spock',
                    subject: 'Callback',
                    status: 'Unread', 
                    priority: 'Urgent',
                    sent: '01-09-2019'
                },
                {
                    id: 2,
                    from: 'Tony Stark',
                    subject: 'New Photos',
                    status: 'Unread', 
                    priority: 'Normal',
                    sent: '01-09-2019'
                },
                {
                    id: 3,
                    from: 'Alex Coupe',
                    subject: 'New Photos',
                    status: 'Read', 
                    priority: 'Normal',
                    sent: '01-09-2019'
                },
                {
                    id: 4,
                    from: 'Alex Coupe',
                    subject: 'Pagination Test',
                    status: 'Read', 
                    priority: 'Normal',
                    sent: '01-09-2019'
                },
            ],
            fetchingMessages: true
        }

        setTimeout(() => {
            this.setState({
                fetchingMessages: false
            });
        }, 2000);
    }

    render() {
        return (
            <div >
                <div className="mb-5 mt-5">
                    <div id="overview" className="card" style={{width: 'auto'}}>
                    <h2 className="card-header text-center" style={{backgroundColor: "#ebf2fc"}}><FontAwesomeIcon icon={faEnvelope}/> 
                         Messages <span className="badge badge-dark">{this.state.messageList.length}</span></h2>
                        <div className="card-body">
                            <FilterBar fetching={this.state.fetchingMessages} filterOptions={messagesFilterOptions} tableHeaderOptions={messagesTableOptions} data={this.state.messageList} />
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
