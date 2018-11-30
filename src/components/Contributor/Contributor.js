import React, { Component, Fragment } from 'react';
import NavBar from '../FirstStateComponents/NavBar'
import WelcomeContributor from '../FirstStateComponents/WelcomeContributor'
import ContributorCodeEditor from './ContributorCodeEditor'
import ContributorInstructionPage from './ContributorInstructionPage'
import PracticeForm from './PracticeForm'
import ContributorQuizForm from './ContributorQuizForm'
import ConfirmationPage from './ConfirmationPage'
import { connect } from 'react-redux';


class Contributor extends Component {
   setResult = () => {
    debugger
  }
  render(){
  return(<>
    <NavBar />

    <div className="contributorPage">
      {this.props.state.contributor.readInstructions ? <ContributorInstructionPage /> : null}
      {this.props.state.contributor.submitProblem ? <ContributorCodeEditor /> : null}
      {this.props.state.contributor.displayQuizForm ? <PracticeForm /> : null}
      {this.props.state.contributor.quizSubmitted ? <ConfirmationPage /> : null}
    </div>
  < />)
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Contributor);
