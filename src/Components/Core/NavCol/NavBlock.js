import React, { Component } from 'react'
import {SlideDown} from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import NavItem from './NavItem';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class NavBlock extends Component {

    constructor(props) {
        super(props)

        this.state = {childrenVisible: true};
    }
    
    handleClick = () => {
        this.setState({
            childrenVisible: !this.state.childrenVisible
        });
    }

    render() {
        return (
            <div>
                <button className="btn btn-block border" data-testid="navButton" style={{backgroundColor: "#EBF4FC", borderColor: "#868786"}} onClick={this.handleClick}>
                <FontAwesomeIcon icon={this.props.icon}/><strong> {this.props.title}</strong></button>
                <SlideDown className={'my-dropdown-slidedown'}>
                    {this.state.childrenVisible ? <NavItem links={this.props.links}/> : null}
                </SlideDown>
            </div>
        )
    }
}

NavBlock.propTypes = {
    title: PropTypes.string,
    links: PropTypes.array,
    icon: PropTypes.object
};
