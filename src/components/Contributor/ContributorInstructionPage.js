import React, { Component, Fragment } from 'react';
import NavBar from '../FirstStateComponents/NavBar'
import WelcomeContributor from '../FirstStateComponents/WelcomeContributor'
import LogoContainer from '../FirstStateComponents/LogoContainer'
import { connect } from 'react-redux';
import NoLanguageSelectedModal from '../ModalConductor/NoLanguageSelected'

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
    <NavBar />

    <div className="contributorInstructionsPage">
      <div className='submit-a-problem'>
        <WelcomeContributor />
        <LogoContainer />

        <button className="ui primary button, big ui button, contributor language button" id={1} onClick={(event)=>this.createProblem(event)}>Submit A Problem</button>
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
