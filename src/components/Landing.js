import React, { Component } from 'react';
import logo from '../yebo-logo.png'

class Landing extends Component {
  render() {
    return (
      <div className='landing'>
          <header>
             <img className='logo' src={logo} />
             <h1>Relevent. Innovative. Impactful.</h1>
          </header>

      </div>
    );
  }
}

export default Landing;