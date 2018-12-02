import React, { Component, Fragment } from 'react';
import './App.css';
import Home from './components/FirstStateComponents/Home'
import ProblemsContainerDisplay from './components/ProblemDisplayFolder/ProblemsContainerDisplay'
import FirstStateContainer from './FirstStateContainer'
import Contributor from './components/Contributor/Contributor'
import { connect } from 'react-redux';


class App extends Component {
  displayChecker = () => {
    return this.props.state.display.selectedUserType === '1' ?  <FirstStateContainer /> : <Contributor />
  }

  render() {
    return (
      <>
        {this.props.state.display.homePage ? <Home /> : this.props.state.display.problemContainerDisplay ? <ProblemsContainerDisplay /> : this.displayChecker()}
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
