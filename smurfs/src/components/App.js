import React, { Component } from "react";
import "./App.css";
import SmurfForm from './SmurfForm'
import SmurfData from './SmurfData'
//import SmurfList from './SmurfList'
import { getSmurfData } from '../actions/actions'

import { connect } from 'react-redux'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <SmurfData />
        
      </div>
    );
  }
};

const mapsStateToProps = state => {
  return {
    smurf: state.smurf
  }
}

export default connect(
  mapsStateToProps,
  {getSmurfData}
  )(App);
