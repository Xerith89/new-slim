import React, { Component } from 'react'

export default class DisplayTasks extends Component {
    constructor(props) {
        super(props)

        this.state = {
            taskList: this.props.taskList
     
        };
    }

    render() {

        const taskList = this.state.taskList;
        return (
            <tbody>
                {taskList && taskList.map((task) => {
                    return (
                    <tr key={task.id}>
                        <td><a href={"/"+task.type/task.id} style={{display: 'block'}}>{task.taskName}</a></td>
                        <td><a href={"/"+task.type/task.id} style={{display: 'block'}}>{task.claimSpecNo}</a></td>
                        <td><a href={"/"+task.type+"/"+task.id} style={{display: 'block'}}>{task.type}</a></td>
                        <td><a href={"/"+task.type/task.id} style={{display: 'block'}}>{task.assignedTo}</a></td>
                        <td><a href={"/"+task.type/task.id} style={{display: 'block'}}>{task.priority}</a></td>
                        <td><a href={"/"+task.type/task.id} style={{display: 'block'}}>{task.dueDate}</a></td>
                    </tr>
                   )
                })}
            </tbody>     
        )
    }
}
