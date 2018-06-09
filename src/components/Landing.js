import React, { Component } from 'react';
import logo from '../Yebo-logo.png'

class Landing extends Component {
  render() {
    return (
      <div className='landing'>
          <header>
             <img className='logo' src={logo} />
          </header>

      </div>
    );
  }
}

export default Landing;