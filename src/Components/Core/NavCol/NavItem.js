import React from 'react'

export default function NavItem(props) {
    return (
        <div>
            <button className="btn btn-block bg-light" style={{backgroundColor: "#ebe7dd"}}><strong>{props.title}</strong></button>
            {props.links.map((element, i) => {
                return ( <React.Fragment key={i}>
                <button className=" btn btn-block btn-dark m-0 " >{element}</button>
                <hr style={{margin: '0rem', borderColor: '#202020'}}/>
                </React.Fragment>
                )
            })}
        </div>
    )
}
