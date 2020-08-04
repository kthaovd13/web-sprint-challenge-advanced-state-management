import React, { Component } from "react";
import "./App.css";
import SmurfForm from './SmurfForm'
import SmurfData from './SmurfData'
import { getSmurfData, addNewSmurf } from '../actions/actions'

import { connect } from 'react-redux'



class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm getSmurfData={getSmurfData}/>
        {/* <SmurfList /> */}
        <SmurfData addNewSmurf={addNewSmurf}/>
      </div>
    );
  }
};

const mapsStateToProps = state => {
  return {
    smurfs: state.smurfs
  }
}

export default connect(
  mapsStateToProps,
  { getSmurfData, addNewSmurf }
  )(App);
