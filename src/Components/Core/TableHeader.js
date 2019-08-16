import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort} from '@fortawesome/free-solid-svg-icons'
import {tableOptions} from '../Util/TasksConfig'
import DisplayTasks from './DisplayTasks'

export default class TableHeader extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sortedTasks: this.props.taskList
        }
    }

    render() {
        return (
            <div>
                <div className="m-3">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                {tableOptions.map((option,i) => {
                                    return (<th scope="col" key={i}>{option} <button style={{border: '0', padding: '0', background: 'none'}} data-toggle="tooltip" data-placement="top" title="Sort"><FontAwesomeIcon icon={faSort}/></button></th>)
                                })}
                            </tr>
                        </thead>
                        <DisplayTasks taskList={this.state.sortedTasks} />
                    </table>
                </div>
            </div>
        )
    }
}
