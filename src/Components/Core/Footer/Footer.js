import React from 'react'
import './footer.css';
import logo from '../../../images/footer_logo.png';

export default function Footer() {
    return (
        <div>
            <footer data-testid="footer">
                <nav className="navbar ml-auto navbar-dark bg-dark ">
                    <span><img src={logo} alt="footerlogo"/></span>
                    <span>
                        <div>
                            <small className="ml-5">Registered office: 145 New Dover Road, Capel-Le-Ferne, Folkestone CT18 7JR</small> <br/>
                            <small className="ml-5">Stephen Lower Insurance Services Limited is authorised and regulated by the Financial Conduct Authority, Financial Services Register number 628613
                            Registered in England and Wales No.4930449.</small><br/>         
                        </div>
                    </span>
                </nav>
            </footer>
        </div>
    )
}
