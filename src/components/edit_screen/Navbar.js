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

  render() {
    return (
      <nav className="grey darken-4">
        <div className="nav-wrapper">
          <div  className='brand-logo'
                style={ {cursor: "pointer", left:"5%"} }
                onClick={this.handleGoHome}>
            goLogoLo
          </div>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li style={ {cursor: "pointer"} }>&#128465;</li>
          </ul>
        </div>
      </nav>
    )
  };
}

export default Navbar;