import React from 'react'
import PropTypes from 'prop-types'

export default function DisplayTasks(props) {
    return (
       <React.Fragment>
        {props.finalData && props.finalData.map((task) => {
            return (
            <tr key={task.id}>
                <td><a href={"/"+task.type/task.id} style={{display: 'block'}}>{task.taskName}</a></td>
                <td><a href={"/"+task.type/task.id} style={{display: 'block'}}>{task.claimSpecNo}</a></td>
                <td><a href={"/"+task.type+"/"+task.id} style={{display: 'block'}}>{task.type}</a></td>
                <td><a href={"/"+task.type/task.id} style={{display: 'block'}}>{task.assigned}</a></td>
                <td><a href={"/"+task.type/task.id} style={{display: 'block'}}>{task.priority}</a></td>
                <td><a href={"/"+task.type/task.id} style={{display: 'block'}}>{task.dueDate}</a></td>
            </tr>
           )
        })}
    </React.Fragment>     
    )
}

DisplayTasks.propTypes = {
    taskList: PropTypes.arrayOf(Object)
}


