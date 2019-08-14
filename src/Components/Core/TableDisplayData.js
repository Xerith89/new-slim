import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort} from '@fortawesome/free-solid-svg-icons'

export default class TableDisplayData extends Component {
    render() {
        return (
            <div>
                <div className="m-3">
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
                            <tr>
                                {this.props.options.map((option,i) => {
                                    return (<th scope="col">{option} <button style={{border: '0', padding: '0', background: 'none'}} data-toggle="tooltip" data-placement="top" title="Sort"><FontAwesomeIcon icon={faSort}/></button></th>)
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark Otto</td>
                                <td>12-04-19</td>
                                <td>Callback</td>
                                <td></td>
                                </tr>
                                <tr>
                                <td>Jacob Thornton</td>
                                <td>14-04-19</td>
                                <td>New Claim</td>
                                <td></td>
                                </tr>
                                <tr>
                                <td>Larry</td>
                                <td>Bird</td>
                                <td>18-04-19</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
