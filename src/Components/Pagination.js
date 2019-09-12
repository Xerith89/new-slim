import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'

export default class Pagination extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 1,
            totalRecords: this.props.totalRecords,
            paginatedData: [],
            lastPage: 0
        }
      
    }

    componentDidUpdate(prevProps) {
        if(prevProps.data !== this.props.data) {
          this.setState({
            paginatedData: this.props.data.slice(this.currentPage-1,this.props.recordsPerPage), 
            totalRecords:this.props.totalRecords,
            currentPage: 1,
            lastPage: Math.ceil(this.props.data.length/this.props.recordsPerPage)
        });
        }
    }

    calculateRange = () => {
        //final page +1 will mean our for loop stops are the final page
        return Math.min((this.props.range + this.state.currentPage), this.state.lastPage+1);
    }


    handleClick = (event) => {

        const {recordsPerPage, data} = this.props;
        switch (event.currentTarget.name) {
        case 'nextPage': 
            this.setState({
                currentPage: this.state.currentPage === this.state.lastPage ? this.state.currentPage : this.state.currentPage+1,
                paginatedData: data.slice(this.state.currentPage*recordsPerPage,(this.state.currentPage*recordsPerPage)+recordsPerPage),
            });
            break;
        case 'firstPage' :
            this.setState({
                currentPage: 1,
                paginatedData: data.slice(0,0+recordsPerPage),
            });
            break;
        case 'previousPage':
            const offset = (this.state.currentPage-2)*recordsPerPage
            this.setState({
                currentPage: this.state.currentPage === 1 ? this.state.currentPage : this.state.currentPage-1,
                paginatedData: data.slice(offset,offset+recordsPerPage),
            });
            break;
        case 'lastPage':
            this.setState({
                currentPage: this.state.lastPage,
                paginatedData: data.slice(this.state.lastPage*recordsPerPage-recordsPerPage, this.state.lastPage*recordsPerPage+recordsPerPage),
            });
            break;
       default:
            let page;
            try {
            page = parseInt(event.target.value);
            } catch (error) { console.log(error);}
            const pageOffset = (page*recordsPerPage)-recordsPerPage;
            this.setState({
                currentPage: page,
                paginatedData: data.slice(pageOffset,pageOffset+recordsPerPage),
            });
            break;
        }
    }

    render() {
        //To be extracted into something a bit cleaner and more functional
        let pages = [];
        if (this.props.range !== null) {
            //Subtracting range ensures there are always x many pages displayed where x refers to the range
            for(let i = (this.calculateRange()-this.props.range); i < this.calculateRange(); i++) {
                if (i <= this.state.lastPage) {
                    pages.push(i);
                }
            }
        } else {
            for(let i = 1; i <= this.state.lastPage; i++) {
                pages.push(i);
            }
        }
        //

        let newChild = React.cloneElement(this.props.children, {
            paginatedData: this.state.paginatedData});

        let pagebutton;
        return (
            <div> 
                <div>{newChild}</div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center">

                        <li className="page-item">
                        {this.state.currentPage === 1 ?
                        <button id="firstPage" name="firstPage" onClick={this.handleClick} className="disabled" style={{border: '0', background: 'none'}} aria-label="First" disabled><span aria-hidden="true"><FontAwesomeIcon icon={faChevronLeft} /><FontAwesomeIcon icon={faChevronLeft} /></span></button> :
                        <button name="firstPage" onClick={this.handleClick} style={{border: '0', background: 'none'}} className="page-link" href="/" aria-label="First"><span aria-hidden="true"><FontAwesomeIcon icon={faChevronLeft} /><FontAwesomeIcon icon={faChevronLeft} /></span></button>
                        }</li>
                      
                        <li className="page-item">
                        {this.state.currentPage === 1 ? <button id="previousPage" name="previousPage" onClick={this.handleClick} className="disabled" style={{border: '0', background: 'none'}} aria-label="Previous" disabled><span aria-hidden="true"><FontAwesomeIcon icon={faChevronLeft} /></span></button> :
                        <button name="previousPage" onClick={this.handleClick} style={{border: '0', background: 'none'}} className="page-link" href="/" aria-label="Previous"><span aria-hidden="true"><FontAwesomeIcon icon={faChevronLeft} /></span></button>} 
                        </li>
                        
                        <li className="page-item">
                        {this.props.range !== null && this.state.currentPage !== 1 ? "..." : null}
                        </li>
            
                        {pages.map((value) => {
                        value !== this.state.currentPage ? pagebutton = <li key={value} className="page-item"><button name={`value${value}`} style={{border: '0', background: 'none'}} className="page-link" value={value} onClick={this.handleClick}>{value}
                        </button></li> : pagebutton = <li key={value} className="page-item"><button name={`value${value}`} className="btn" value={value} style={{border: '0', background: 'none'}} onClick={this.handleClick} disabled><strong>{value}</strong></button></li>
                            return (pagebutton)
                        })}

                        <li className="page-item">
                        {this.props.range !== null && pages.includes(this.state.lastPage) ? null : "..."}
                        </li>
                        
                        {this.state.currentPage < this.state.lastPage ? <button id="nextPage"style={{border: '0',  background: 'none'}}  name="nextPage" onClick={this.handleClick}className="page-link" aria-label="Next">
                            <span aria-hidden="true"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </button> : <button name="nextPage" onClick={this.handleClick}className="btn disabled" aria-label="Next" disabled>
                            <span aria-hidden="true"><FontAwesomeIcon icon={faChevronRight} /></span>
                        </button>}

                        <li className="page-item">
                        {this.state.currentPage < this.state.lastPage ?
                        <button id="lastPage" name="lastPage" onClick={this.handleClick} style={{border: '0', background: 'none'}} aria-label="Last" ><span aria-hidden="true"><FontAwesomeIcon icon={faChevronRight} /><FontAwesomeIcon icon={faChevronRight} /></span></button> :
                        <button id="lastPage" name="lastPage" onClick={this.handleClick} style={{border: '0', background: 'none'}} className="page-link disabled" href="/" aria-label="Last"><span aria-hidden="true"><FontAwesomeIcon icon={faChevronRight} /><FontAwesomeIcon icon={faChevronRight} disabled /></span></button>
                        }</li>
                        
                    </ul>
                </nav>
            </div>
        )
    }
}

Pagination.propTypes = {
    data: PropTypes.array.isRequired,
    className: PropTypes.string,
    recordsPerPage: PropTypes.number.isRequired,
    range: PropTypes.number,
    style: PropTypes.object,
    children: PropTypes.any.isRequired
}