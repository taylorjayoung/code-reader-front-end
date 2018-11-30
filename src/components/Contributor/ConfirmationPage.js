import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Quiz from '../../lib/Quiz';
import ConfirmationEditor from './ConfirmationEditor'
import { Button, Segment } from 'semantic-ui-react'

class ConfirmationPage extends Component {
   setResult = () => {
    debugger
  }
  submitProblemToBackend = (event) => {
    event.preventDefault()
    this.props.dispatch({
      type:'RESET'
    });
  }

  render(){
  return(<>

    <div className="confirmationPage">
      <h1>Thanks for submitting your problem! This is what your code and quiz will look like. Take a look!</h1>
      <div className="redux-code">
        <h3>Code</h3>
        <ConfirmationEditor code={this.props.state.contributor.contributorCode}/>
      </div>
      <div className="redux-quiz">
        <h2>Quiz</h2>
        <Quiz quiz={JSON.parse(this.props.state.contributor.contributorQuizJSON)} />
      </div>
      <div className="contributorSubmitButton">
      <button className="ui red button, big ui button" id={1} onClick={(event)=>this.submitProblemToBackend(event)}>Confirm</button>
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

export default connect(mapStateToProps)(ConfirmationPage);
