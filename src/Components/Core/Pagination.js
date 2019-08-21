import React, { Component } from 'react'
import TableHeader from './TableHeader'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 0,
            paginatedData: this.props.filteredData
        }
    }


    render() {
        
        return (
            <React.Fragment>
                <table className="table table-hover table-bordered">
                    <TableHeader fetching={this.props.fetching} tableHeaderOptions={this.props.tableHeaderOptions} paginatedData={this.state.paginatedData}/> 
                </table>
                {this.props.fetching ? <Spinner /> : null}          
                <div> 
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-center">
                            <li className="page-item">
                            <a className="page-link" href="/" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                            </li>
                            <li className="page-item"><button className="page-link" href="/">1</button></li>
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

Pagination.propTypes = {
    fetchingTasks: PropTypes.bool,
    filteredData: PropTypes.array,
    totalRecords: PropTypes.number,
    recordsPerPage: PropTypes.number
}