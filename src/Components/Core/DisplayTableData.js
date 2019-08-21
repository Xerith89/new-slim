import React from 'react'
import PropTypes from 'prop-types'

export default function DisplayTableData(props) {
    return (
       <React.Fragment>
        {props.finalData && props.finalData.map((task) => {
            return (
            <tr key={task.id}>
                <td><a href={"/"+task.type/task.id} style={{display: 'block'}}>{task.name}</a></td>
                <td><a href={"/"+task.type/task.id} style={{display: 'block'}}>{task.reference}</a></td>
                <td><a href={"/"+task.type+"/"+task.id} style={{display: 'block'}}>{task.type}</a></td>
                <td><a href={"/"+task.type/task.id} style={{display: 'block'}}>{task.assigned}</a></td>
                <td><a href={"/"+task.type/task.id} style={{display: 'block'}}>{task.priority}</a></td>
                <td><a href={"/"+task.type/task.id} style={{display: 'block'}}>{task.due}</a></td>
            </tr>
           )
        })}
    </React.Fragment>     
    )
}

DisplayTableData.propTypes = {
    taskList: PropTypes.arrayOf(Object)
}



