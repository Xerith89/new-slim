import React, { Component } from 'react'
import NavItem from './NavItem'

// This component renders on the left of the screen and provides navigation links for the app

export default class NavColumn extends Component {


    render() {
        
    //This stores the links for the claims section of the Nav
    const claimsLinks = {
        links: [
            "New Claim",
            "Diary Reviews",
            "Reports",
            "Another Link"
        ]
    }

    const accountsLinks = {
        links: [
            "Direct Debits",
            "Other Accounts Stuff",
            "Another Link",
            "Another Link"
        ]
    }

    const underwritingLinks = {
        links: [
            "New Quote",
            "Renewals",
            "Another Link",
            "Another Link"
        ]
    }

    const agencyLinks = {
        links: [
            "Manage Brokers",
            "Other Accounts Stuff",
            "Another Link",
            "Another Link"
        ]
    }
        return (
            <div>
                <div id="navMenu" data-testid="navcol" className="card text-center ml-2 mt-5 mb-5 mr-5" style={{ width: '18rem'}}>
                    <div className="card-body p-0">
                        <NavItem title="Claims" links={claimsLinks.links} />
                        <NavItem title="Underwriting" links={underwritingLinks.links} />
                        <NavItem title="Accounts" links={accountsLinks.links} />
                        <NavItem title="Agency" links={agencyLinks.links} />
                    </div>
                </div>
            </div>
        )
    }
}
