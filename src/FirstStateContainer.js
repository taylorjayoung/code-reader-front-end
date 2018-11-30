import React, { Component, Fragment } from 'react';
import NavBar from './components/FirstStateComponents/NavBar'
import InstructionDisplay from './components/FirstStateComponents/InstructionDisplay'
import LogoContainer from './components/FirstStateComponents/LogoContainer'
import WelcomeLearner from './components/FirstStateComponents/WelcomeLearner'
import WelcomeContributor from './components/FirstStateComponents/WelcomeContributor'
import Home from './components/FirstStateComponents/Home'
import { connect } from 'react-redux';


class FirstStateContainer extends Component {

  render(){
    return(
      <>
      <NavBar />
      <div className="FirstStateContainer">
        {this.props.state.display.logoSelection ? <LogoContainer /> : null}
      </div>
      <div>
        {this.props.state.display.logoSelection ? <InstructionDisplay /> : null}
      </div>
      <div className="welcome">
         {this.props.state.display.selectedUserType === '1' ? <WelcomeLearner /> : <WelcomeContributor />}
      </div>

      < />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(FirstStateContainer);
