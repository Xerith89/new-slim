import React, { Component } from 'react'
import TableHeader from './TableHeader'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            totalRecords: this.props.filteredData.length,
            paginatedData: this.props.filteredData.slice(this.currentPage-1,this.props.recordsPerPage),
            finalPage: Math.ceil(this.props.filteredData.length/this.props.recordsPerPage)
        }
    }

    componentDidUpdate(prevProps) {
        if(prevProps.filteredData !== this.props.filteredData) {
          this.setState({paginatedData: this.props.filteredData});
        }
      }

    handleClick = (event) => {
       
        if (event.currentTarget.name === 'next') {
            this.setState({
                currentPage: this.state.currentPage+1,
                paginatedData: this.props.filteredData.slice(this.state.currentPage*this.props.recordsPerPage,(this.state.currentPage*this.props.recordsPerPage)+this.props.recordsPerPage),
            })
        } else if (event.currentTarget.name === 'previous') {
           
            this.setState({
                currentPage: this.state.currentPage - 1,
                paginatedData: this.props.filteredData.slice(this.state.currentPage/this.props.recordsPerPage,(this.state.currentPage/this.props.recordsPerPage)+this.props.recordsPerPage),
            })
        }
        else {
            let page = parseInt(event.target.value)*this.props.recordsPerPage;
            console.log(page);
        }
    }


    render() {
        let pageNumbers = 1;
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
                            {this.state.currentPage === 1 ? <button name="previous" onClick={this.handleClick} className="btn disabled" aria-label="Previous" disabled><span aria-hidden="true"><FontAwesomeIcon icon={faChevronLeft} /></span></button> :
                            <button name="previous" onClick={this.handleClick} className="page-link" href="/" aria-label="Previous"><span aria-hidden="true"><FontAwesomeIcon icon={faChevronLeft} /></span></button>} 
                            </li>
                            {this.state.finalPage > 1 ? <li className="page-item"><button className="page-link" value={pageNumbers} onClick={this.handleClick}>{pageNumbers}</button></li> : null} 
                            <li className="page-item">
                            {this.state.currentPage !== this.state.finalPage ? <button name="next" onClick={this.handleClick}className="page-link" aria-label="Next">
                                <span aria-hidden="true"><FontAwesomeIcon icon={faChevronRight} /></span>
                            </button> : <button name="next" onClick={this.handleClick}className="btn disabled" aria-label="Next" disabled>
                                <span aria-hidden="true"><FontAwesomeIcon icon={faChevronRight} /></span>
                            </button>}
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