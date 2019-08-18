import React, { Component } from 'react'
import FilterBar from './FilterBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import Pagination from './Pagination'

export default class Tasks extends Component {

    constructor(props) {
        super(props)

        this.state = {
            //Fake data that will come from backend
            taskList: [
            {
                id: 1,
                taskName: 'Review New Claim',
                claimSpecNo: '5500001',
                type: 'Claim', 
                assignedTo: 'Alex Coupe',
                priority: 'Normal',
                dueDate: '01-09-2019'
            },
            {
                id: 2,
                taskName: 'Review New Invoice',
                claimSpecNo: '5500000',
                type: 'Claim', 
                assignedTo: 'Alex Coupe',
                priority: 'Normal',
                dueDate: '01-09-2019'
            },
            {
                id: 3,
                taskName: 'Diary Review',
                claimSpecNo: '5500244',
                type: 'Claim', 
                assignedTo: 'Donald Duck',
                priority: 'Urgent',
                dueDate: '29-09-2019'
            },
            {
                id: 4,
                taskName: 'Loss Adjustor Report Received',
                claimSpecNo: '5500044',
                type: 'Claim', 
                assignedTo: 'Peter Parker',
                priority: 'Urgent',
                dueDate: '05-09-2019'
            },
        ],
            fetchingTasks: true
        }

        setTimeout(() => {
            this.setState({
                fetchingTasks: false
            });
        }, 2000);
    }

    // componentDidMount() {
    //     fetch('http://jsonplaceholder.typicode.com/todos?_limit=10')
    //     .then(response => response.json())
    //     .then (json => {
    //         this.setState({
    //             taskList: json
    //         });
    //     })
    //     .catch(error => console.log(error)
    //     );
    //     this.setState({
    //         fetchingTasks: false
    //     });
    // }

    render() {
 
        return (
            <div >
                <div className="mt-5">
                    <div id="overview" className="card" style={{width: 'auto'}}>
                        <h2 className="card-header text-center" style={{backgroundColor: "#ebf2fc"}}><FontAwesomeIcon icon={faEdit}/> 
                         Tasks <span className="badge badge-dark">{this.state.taskList.length}</span></h2>
                        <div className="card-body bg-white">
                            <FilterBar fetchingTasks={this.state.fetchingTasks} taskList={this.state.taskList} />
                            <Pagination totalRecords={50}/>
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
