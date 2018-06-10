import React, { Component } from 'react';
import './App.css';


import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './components/Landing'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      Landing: true
    }
  }

  // componentDidMount(){

  //   }

  render() {

    return (
      <div className="App Site">
      {this.state.Landing ? 
        <div>
        <Header />
        <div className="Site-content">
        <Landing /> 
        </div>
        <Footer />
        </div> :
        <div>
        <Header />
        <div className="Site-content">
        </div>
        <Footer />
        </div> }
    
      </div>
        )
  }
}

export default App;
