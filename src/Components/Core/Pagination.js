import React, { Component } from 'react'
import TableHeader from './TableHeader'
import Spinner from './Spinner'

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
            <table className="table table-hover table-bordered">
                <TableHeader fetchingTasks={this.props.fetchingTasks} taskList={this.props.dataFiltered}/> 
            </table>
            {this.props.fetchingTasks ? <Spinner /> : null}          
            <div> 
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className="page-item">
                        <a className="page-link" href="/" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="/">1</a></li>
                        <li className="page-item"><a className="page-link" href="/">2</a></li>
                        <li className="page-item"><a className="page-link" href="/">3</a></li>
                        <li className="page-item">
                        <a className="page-link" href="/" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
            </React.Fragment>
        )
    }
}