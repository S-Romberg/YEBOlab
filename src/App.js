import React, { Component } from 'react';
import './App.css';


import Header from './components/Header'
import Footer from './components/Footer'
import Landing from './components/Landing'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      Landing: false
    }
  }

  // componentDidMount(){

  //   }

  render() {

    return (
      <div className="App">
      {this.state.Landing ? 
        <Landing /> :
        <div>
        <Header />
        <Footer />
        </div> }
      </div>
    );
  }
}

export default App;
