import React, { Component, Fragment } from 'react';
import './App.css';
import Home from './components/FirstStateComponents/Home'
import ProblemsContainer from './components/ProblemDisplayFolder/ProblemsContainer'
import FirstStateContainer from './FirstStateContainer'
import Contributor from './components/Contributor/Contributor'
import { connect } from 'react-redux';


class App extends Component {
  display = () => {
    if(this.props.state.display.selectedUserType === '1'){
      return <FirstStateContainer />
    }
    return <Contributor />
  }

  render() {
    return (
      <>
        {this.props.state.display.homePage ? <Home /> : this.props.state.display.problemContainerDisplay ? <ProblemsContainer /> : this.display()}
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
