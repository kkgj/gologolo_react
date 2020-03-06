import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: {
                color: this.props.logo.textColor,
                fontSize: this.props.logo.fontSize + "%",
                backgroundColor : this.props.logo.backgroundColor,
                borderColor : this.props.logo.borderColor,
                borderRadius : this.props.logo.borderRadius + "px",
                borderWidth : this.props.logo.borderWidth + "px",
                borderStyle : "solid",
                padding : this.props.logo.padding + "px",
                margin : this.props.logo.margin + "px",
                left : "40%",
                position : "absolute",
                width : "auto",
                // overflow : "scroll"
            }
        }
        return (
            <div className="col s8" 
                style={ styles.container }>
                {this.props.logo.text}
            </div>
        )
    }
}

export default TextEditWorkspace