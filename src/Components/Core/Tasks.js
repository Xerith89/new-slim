import React, { Component } from 'react'
import FilterBar from './FilterBar'
import {tasksFilterOptions} from '../Util/TasksConfig'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import {tasksTableOptions} from '../Util/TasksConfig'

export default class Tasks extends Component {

    constructor(props) {
        super(props)

        this.state = {
            //Fake data that will come from backend
            taskList: [
            {
                id: 1,
                name: 'Review New Claim',
                reference: '5500001',
                type: 'Claim', 
                assigned: 'Alex Coupe',
                priority: 'Normal',
                due: '01-09-2019'
            },
            {
                id: 2,
                name: 'Review New Invoice',
                reference: '5500000',
                type: 'Claim', 
                assigned: 'Alex Coupe',
                priority: 'Normal',
                due: '01-09-2019'
            },
            {
                id: 3,
                name: 'Diary Review',
                reference: '5500244',
                type: 'Specification', 
                assigned: 'Donald Duck',
                priority: 'Urgent',
                due: '05-09-2019'
            },
            {
                id: 4,
                name: 'Review New Claim',
                reference: '5500008',
                type: 'Claim', 
                assigned: 'Donald Duck',
                priority: 'Normal',
                due: '06-09-2019'
            },
            {
                id: 5,
                name: 'Loss Adjustor Report Received',
                reference: '5500044',
                type: 'Claim', 
                assigned: 'Peter Parker',
                priority: 'Urgent',
                due: '07-09-2019'
            },
            {
                id: 6,
                name: 'Invoice Received',
                reference: '5500044',
                type: 'Claim', 
                assigned: 'Peter Parker',
                priority: 'Normal',
                due: '07-09-2019'
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
                            <FilterBar fetching={this.state.fetchingTasks} data={this.state.taskList} filterOptions={tasksFilterOptions} tableHeaderOptions={tasksTableOptions} />
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}
