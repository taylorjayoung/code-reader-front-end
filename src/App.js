import React, { Component, Fragment } from 'react';
import './App.css';
import LogoContainer from './components/FirstStateComponents/LogoContainer'
import NavBar from './components/FirstStateComponents/NavBar'
import InstructionDisplay from './components/FirstStateComponents/InstructionDisplay'
import Home from './components/FirstStateComponents/Home'
import ProblemDisplay from './components/ProblemDisplayFolder/ProblemDisplay'
import FirstStateContainer from './FirstStateContainer'
import { connect } from 'react-redux';


class App extends Component {

  render() {
    return (
      <>
        {this.props.state.display.problemDisplay ? <ProblemDisplay /> : <FirstStateContainer />  }
      < />
    );
  }
}

const mapStateToProps = (state) => {

  return {
    state
  }
}

export default connect(mapStateToProps)(App);
