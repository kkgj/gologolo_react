import React from 'react'
import {Modal, Button} from 'react-materialize'

class Navbar extends React.Component {
  constructor() {
    super();

    console.log("Navbar constructed");
  }

  componentDidMount = () => {
      console.log("\tNavbar component did mount");
  }

  componentWillUnmount = () => {
      console.log("\tNavbar component will unmount");
  }

  handleGoHome = () => {
    console.log("handleGoHome");
    this.props.goToHomeCallback();
  }

  handleDeleteWork = () => {
    this.props.deleteCallback(this.props.logoKey);
  }

  render() {
    return (
      <nav className="grey lighten-5">
        <div className="nav-wrapper">
          <div  className='brand-logo'
                style={ {cursor: "pointer", color: "black"} }
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right">
          <Modal
          actions={[
            <Button flat modal="close" node="button" waves="green" onClick={this.handleDeleteWork} >Yes</Button>,
            <Button flat modal="close" node="button" waves="green">No</Button>
          ]}
          bottomSheet={false}
          fixedFooter={false}
          header="Modal Header"
          id="modal-0"
          options={{
            dismissible: true,
            endingTop: '10%',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            opacity: 0.5,
            outDuration: 250,
            preventScrolling: true,
            startingTop: '4%'
          }}
          trigger={<li style={ {cursor: "pointer"} }
          >&#128465;</li>}
          >
          <h6>
            Are you sure to delete this Logo?
          </h6>
          </Modal>
          </ul>
        </div>
      </nav>
    )
  };
}

export default Navbar;