import React, { Component } from 'react'
import FilterBar from './FilterBar'
import {messagesFilterOptions} from '../Util/MessagesConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default class MessageReview extends Component {

    constructor(props){
        super(props)
        this.state = {
            messageList: [],
            fetchingTasks: true
        }

        setTimeout(() => {
            this.setState({
                fetchingTasks: false
            });
        }, 2000);
    }

    render() {
        return (
            <div >
                <div className="mt-5">
                    <div id="overview" className="card" style={{width: 'auto'}}>
                    <h2 className="card-header text-center" style={{backgroundColor: "#ebf2fc"}}><FontAwesomeIcon icon={faEnvelope}/> 
                         Messages <span className="badge badge-dark">{this.state.messageList.length}</span></h2>
                        <div className="card-body">
                            <FilterBar fetching={this.state.fetchingMessages} filterOptions={messagesFilterOptions} data={this.state.messageList} />
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
