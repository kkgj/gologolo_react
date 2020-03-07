import React from 'react'

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
      <nav className="white">
        <div className="nav-wrapper">
          <div  className='brand-logo'
                style={ {cursor: "pointer", color: "black"} }
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right">
            <li style={ {cursor: "pointer"} }
                onClick={this.handleDeleteWork}>
            &#128465;</li>
          </ul>
        </div>
      </nav>
    )
  };
}

export default Navbar;