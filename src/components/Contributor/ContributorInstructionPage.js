import React, { Component, Fragment } from 'react';
import NavBar from '../FirstStateComponents/NavBar'
import WelcomeContributor from '../FirstStateComponents/WelcomeContributor'
import LogoContainer from '../FirstStateComponents/LogoContainer'
import { connect } from 'react-redux';
import NoLanguageSelectedModal from './Modal'

class ContributorInstructionPage extends Component {
  createProblem = (event) => {
    event.preventDefault()
    if(!this.props.state.contributor.contributorLanguage)
      return <NoLanguageSelectedModal />
    else{
      const data = {
        readInstructions: false,
        submitProblem: true
      }
      this.props.dispatch({
        type:'PROBLEM_PROMPT',
        payload: data});}
    }

  render(){

  return(<>
    <div className="contributorInstructionsPage">
    <div id='contributor-logo-container'>
      <LogoContainer />
    </div>
    <div id='contributor-welcome-message-container'>
      <WelcomeContributor />
    </div>
    <div className='submit-a-problem'>
      <button className="ui primary button, huge ui button, contributor language button" id='contributor-button' onClick={(event)=>this.createProblem(event)}>Submit A Problem</button>
    </div>
    </div>
  < />)
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(ContributorInstructionPage);
