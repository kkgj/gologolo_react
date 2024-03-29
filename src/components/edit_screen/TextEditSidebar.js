import React, { Component } from 'react'
import {Range, Modal, Button, TextInput} from 'react-materialize'

class TextEditSidebar extends Component {
    constructor(props) {
        super(props);

        // WE'LL MANAGE THE UI CONTROL
        // VALUES HERE
        this.state = {
            textColor : this.props.logo.textColor,
            fontSize : this.props.logo.fontSize,
            backgroundColor : this.props.logo.backgroundColor,
            text : this.props.logo.text,
            borderColor : this.props.logo.borderColor,
            borderRadius : this.props.logo.borderRadius,
            borderWidth : this.props.logo.borderWidth,
            padding : this.props.logo.padding,
            margin : this.props.logo.margin,
            input : "",
            message : null,
            errorM : ""
        }
    }

    componentDidUpdate = (prevProps) => {
        if(this.props.logo !== prevProps.logo){
            this.setState({
                textColor : this.props.logo.textColor,
                fontSize : this.props.logo.fontSize,
                backgroundColor : this.props.logo.backgroundColor,
                text : this.props.logo.text,
                borderColor : this.props.logo.borderColor,
                borderRadius : this.props.logo.borderRadius,
                borderWidth : this.props.logo.borderWidth,
                padding : this.props.logo.padding,
                margin : this.props.logo.margin
            });
        }
    }

    handleUndo = () => {
        this.props.undoCallback();
    }

    handleRedo = () => {
        this.props.redoCallback();
    }

    handleBorderColor = (event) => {
        this.setState({ borderColor: event.target.value }, this.completeUserEditing);
    }

    handleBorderRadius = (event) => {
        this.setState({ borderRadius: event.target.value }, this.completeUserEditing);
    }

    handleBorderWidth = (event) => {
        this.setState({ borderWidth: event.target.value }, this.completeUserEditing);
    }

    handlePadding = (event) => {
        this.setState({ padding: event.target.value }, this.completeUserEditing);
    }

    handleMargin = (event) => {
        this.setState({ margin: event.target.value }, this.completeUserEditing);
    }

    handleTextColorChange = (event) => {
        console.log("handleTextColorChange to " + event.target.value);
        this.setState({ textColor: event.target.value }, this.completeUserEditing);
    }

    handleFontSizeChange = (event) => {
        console.log("handleTextColorChangeComplete to " + event.target.value);
        this.setState({ fontSize: event.target.value }, this.completeUserEditing);
    }

    handleBackgroundColorChange = (event) => {
        console.log(event.target.value)
        this.setState({ backgroundColor: event.target.value }, this.completeUserEditing);
    }

    completeUserEditing = () => {
        console.log("completeUserEditing");
        console.log("this.state.textColor: " + this.state.textColor);
        this.props.changeLogoCallback(this.props.logo, this.props.logo.key,
        this.state.text, this.state.textColor, this.state.fontSize, 
        this.state.backgroundColor, this.state.borderColor, this.state.borderRadius, 
        this.state.borderWidth, this.state.padding, this.state.margin);
    }

    handleEditText = (event) => {
        this.setState({ input: event.target.value });
        if (event.target.value.trim().length < 1) {
            this.setState({ message: null, errorM: "Logo name cannot be empty!" });
        } else {
            this.setState({ message: "close", errorM: "" });
        }
    }

    handleEnter = () => {
        if(this.state.input.trim().length < 1)
            this.setState({ errorM: "Logo name cannot be empty!"});
        else
            this.setState({ text: this.state.input }, this.completeUserEditing); 
    }

    handleCancel = () => {
        this.setState({ errorM: "" })
    }

    render() {
        let undoDisabled = !this.props.canUndo();
        let undoClass = "waves-effect waves-light btn-small";
        if (undoDisabled)
            undoClass += " disabled";
        
        let redoClass = "waves-effect waves-light btn-small";    
        let redoDisabled = !this.props.canRedo();
        if (redoDisabled)
            redoClass +=" disabled";    
        return (
            <div className="card-panel col s4">
                <div className="card orange darken-1">
                    <div className="card-content white-text">
                        <Modal 
                            actions={[
                                <Button flat modal={this.state.message} node="button" waves="green" onClick={this.handleEnter}>Enter</Button>,
                                <Button flat modal="close" node="button" waves="green" onClick={this.handleCancel}>Cancel</Button>
                            ]}
                            bottomSheet={false}
                            fixedFooter={false}
                            header="EDIT LOGO TEXT"
                            footer="hi"
                            id="modal-0"
                            options={{
                            dismissible: true,
                            endingTop: '10%',
                            inDuration: 250,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            opacity: 0.4,
                            outDuration: 250,
                            preventScrolling: true,
                            startingTop: '4%'
                            }}
                            trigger={<Button className="waves-effect waves-light btn-small" node="button">&#9998;</Button>}>
                            <h6>
                                Enter new logo name here: 
                            </h6>
                            <TextInput placeholder="Editing..." onChange={this.handleEditText}/>
                            <p style={{ color: 'red' }}>
                                {this.state.errorM}
                            </p>
                        </Modal>
                        <button className={undoClass} onClick={this.handleUndo}>Undo</button>
                        <button className={redoClass} onClick={this.handleRedo}>Redo</button>
                    </div>
                </div>
                <div className="card orange darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Text</span>
                        <div className="row">
                            <div className="col s4">Color:</div>
                            <div className="col s8">
                                <input type="color"
                                    value={this.props.logo.textColor || "goLogoLo Logo"}
                                    onChange={this.handleTextColorChange}/>
                            </div>
                        </div>
                        
                        <div className="row">
                            <div className="col s4">Font Size:</div>
                            <div className="col s8">
                                <Range type="range" min="4" max="144" 
                                    value={this.props.logo.fontSize || 40} 
                                    onChange={this.handleFontSizeChange}/>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s4">Background Color:</div>
                            <div className="col s8">
                                <input type="color"
                                    value={this.props.logo.backgroundColor || "#FF0000"}
                                    onChange={this.handleBackgroundColorChange}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Color:</div>
                            <div className="col s8">
                                <input type="color"
                                    value={this.props.logo.borderColor || "#8A2BE2"}
                                    onChange={this.handleBorderColor}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Radius:</div>
                            <div className="col s8">
                                <Range type="range" min="0" max="150" 
                                    value={this.props.logo.borderRadius || 8}
                                    onChange={this.handleBorderRadius}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Border Thickness:</div>
                            <div className="col s8">
                                <Range type="range" min="4" max="50" 
                                    value={this.props.logo.borderWidth || 10}
                                    onChange={this.handleBorderWidth}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Padding:</div>
                            <div className="col s8">
                                <Range type="range" min="0" max="80" 
                                    value={this.props.logo.padding || 0}
                                    onChange={this.handlePadding}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4">Margin:</div>
                            <div className="col s8 ">
                                <Range type="range" min="0" max="200" 
                                    value={this.props.logo.margin || 10}
                                    onChange={this.handleMargin}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextEditSidebar