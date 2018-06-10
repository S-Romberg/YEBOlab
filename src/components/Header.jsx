import React, { Component } from 'react';
import mainLogo from '../corner-logo.png'
class Header extends Component {
  render() {
    return (
        <header className="App-header">
            <img className='main-logo' src={mainLogo} alt='logo'/>
            <h1>YEBOLab</h1>
      </header>
    );
  }
}

export default Header;