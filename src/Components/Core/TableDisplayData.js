import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort} from '@fortawesome/free-solid-svg-icons'

export default class TableDisplayData extends Component {
    render() {
        return (
            <div>
                <div className="m-3">
                    <table className="table table-hover table-bordered">
                        <thead>
                            <tr>
                                {this.props.options.map((option,i) => {
                                    return (<th scope="col" key={i}>{option} <button style={{border: '0', padding: '0', background: 'none'}} data-toggle="tooltip" data-placement="top" title="Sort"><FontAwesomeIcon icon={faSort}/></button></th>)
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.tasks.map((task) => {
                                return (
                                   
                                <tr key={task.id}>
                                    <td><a href="/" style={{display: 'block'}}>{task.title}</a></td>
                                    <td><a href="/" style={{display: 'block'}}>5500061</a></td>
                                    <td><a href="/" style={{display: 'block'}}>Claim</a></td>
                                    <td><a href="/" style={{display: 'block'}}>Alex Coupe</a></td>
                                    <td><a href="/" style={{display: 'block'}}>{task.userId ? 'High' : 'Normal'}</a></td>
                                    <td><a href="/" style={{display: 'block'}}>21st Aug 2019</a></td>
                                </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
