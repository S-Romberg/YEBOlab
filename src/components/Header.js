import React, { Component } from 'react';
import mainLogo from '../corner-logo.png'
class Header extends Component {
  render() {
    return (
        <header className="App-header">
            <img className='mainLogo' src={mainLogo} alt='logo'/>
            <h1>YEBOlab</h1>
      </header>
    );
  }
}

export default Header;