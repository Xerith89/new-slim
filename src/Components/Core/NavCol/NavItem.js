import React from 'react'
import PropTypes from 'prop-types'

export default function NavItem(props) {
    return (
        <div>
            {props.links.map((element, i) => {   
                return ( 
                <React.Fragment key={i}>
                    <a href="/" className=" btn btn-block btn-dark m-0" >{element}</a>
                    <hr style={{margin: '0rem', borderColor: '#202020'}}/>
                </React.Fragment>)
            })}
        </div>)
}

NavItem.propTypes = {
    links: PropTypes.array
};