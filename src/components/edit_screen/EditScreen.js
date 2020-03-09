// IMPORT ALL THE THINGS NEEDED FROM OTHER JAVASCRIPT SOURCE FILES
import React, { Component } from 'react'
import Navbar from './Navbar.js'
import TextEditSidebar from './TextEditSidebar.js'
import TextEditWorkspace from './TextEditWorkspace.js'

export class EditScreen extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen constructor");

        this.state = {  
            deleteModalVisible: false
        }
    }

    componentDidMount = () => {
        console.log("\tEditScreen component did mount");
    }

    componentWillUnmount = () => {
        console.log("\tEditScreen component will unmount");
    }

    handleKeyPress = (event) => {
        if(event.ctrlKey){
            if(event.which === 90){
                console.log("Z");
                this.props.undoCallback();
            } else if (event.which === 89) {
                console.log("Y");
                this.props.redoCallback();
            }
        }
    }

    render() {
        // DISPLAY WHERE WE ARE
        console.log("\tEditScreen render");
        return (
            <div className="container" tabIndex="0" onKeyDown={this.handleKeyPress}>
                <Navbar 
                    logoKey={this.props.logo.key}
                    goToHomeCallback={this.props.goToHomeCallback} 
                    deleteCallback={this.props.deleteCallback}
                />
                <div className="row">
                    <TextEditSidebar
                        logo={this.props.logo}
                        changeLogoCallback={this.props.changeLogoCallback}
                        undoCallback={this.props.undoCallback}                                          
                        canUndo={this.props.canUndo}            
                        redoCallback={this.props.redoCallback}
                        canRedo={this.props.canRedo}             
                    />
                    <TextEditWorkspace
                        logo={this.props.logo} />
                </div>
            </div>
        )
    }
}

export default EditScreen