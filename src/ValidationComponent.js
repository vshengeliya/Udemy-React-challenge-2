import React, { Component } from 'react'

class ValidationComponent extends Component {
    render() {
       
        return (
            <div>
            <p> {this.props.texty >5 ? "Text long enough" : "Text too short"} </p>
        </div>
        )
    }
}


export default ValidationComponent
