import React, { Component, Fragment } from 'react';
import App from './App'
import NavBar from './components/FirstStateComponents/NavBar'

import InstructionDisplay from './components/FirstStateComponents/InstructionDisplay'
import LogoContainer from './components/FirstStateComponents/LogoContainer'
import WelcomeLearner from './components/FirstStateComponents/WelcomeLearner'
import WelcomeContributor from './components/FirstStateComponents/WelcomeContributor'

import Home from './components/FirstStateComponents/Home'
import { connect } from 'react-redux';


class FirstStateContainer extends Component {

    whichUserType = (props) => {
      return props.state.display.selectedUserType === "1" ? <WelcomeLearner /> : <WelcomeContributor />
    }

  render(){
  return(<>
    <NavBar />

    <div className="FirstStateContainer">
      {this.props.state.display.homePage ? <Home /> : null}
      {this.props.state.display.logoSelection ? <LogoContainer /> : null}
    </div>
    <div>
      {this.props.state.display.logoSelection ? <InstructionDisplay /> : null}
    </div>
    <div className="welcome">
      {this.props.state.display.selectedUserType ? this.whichUserType(this.props) : null}
    </div>
  < />)
  }
}
const mapStateToProps = (state) => {

  return {
    state
  }
}

export default connect(mapStateToProps)(FirstStateContainer);
