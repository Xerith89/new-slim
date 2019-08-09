import React from 'react'
import '../../Assets/dropdown.css'
import { faCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function OptionsDropdown(props) {
    return (
        <div data-testid="optionsMenu">
            <ul className="list-group dropdown-menu dropdown-menu-right mr-2 p-2 text-center">
                <h5><FontAwesomeIcon icon={faCog}/> Options</h5>
                {props.links.map((element, i) => {
                    return (<React.Fragment key={i}>
                            <div className="dropdown-divider"></div>
                            <li className="dropdown-item"><a href={`/${element}`}>{element}</a></li>
                            </React.Fragment>)
                })}
            </ul>
        </div>
    )
}