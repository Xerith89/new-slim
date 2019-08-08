import React, { Component } from 'react'
import NavItem from './NavItem'

// This component renders on the left of the screen and provides navigation links for the app

export default class NavColumn extends Component {


    render() {
        
    //Nav column inline style
    const style = {
        width: "20rem",
    }

    //This stores the links for the claims section of the Nav
    const claimsLinks = {
        links: [
            "New Claim",
            "Diary Reviews"
        ]
    }
        return (
            <div>
                <div id="navMenu" data-testid="navcol" className="card text-center ml-2 mt-5" style={style}>
                    <div className="card-body navbar-dark bg-dark pt-0">
                        <NavItem title="Claims" links={claimsLinks.links} />
                    </div>
                </div>
            </div>
        )
    }
}
