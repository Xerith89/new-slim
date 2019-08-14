import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class FilterBar extends Component {
    constructor(props){
        super(props)
    }

   

    render() {
       
        return (
            <div>
                 <div id="overview" className="card" style={{width: 'auto'}}>
                 <div className="form-group m-2">
                 {this.props.options.map((element, i) => { 
                     return (<React.Fragment key={i}>
                                    <label className="mr-1 ml-2">{element.header}:</label>
                                    <select className="form-control-sm col-md-2">
                                    {element.body.map((option, j) => { 
                                    return( <option key={j}>{option}</option>)
                                    })}
                                    </select>
                            </React.Fragment>)
                            })}
                       </div>
                 </div>
            </div>
        )
    }
}

FilterBar.propTypes = {
    options: PropTypes.arrayOf(Object)
}
