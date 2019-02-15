import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Quiz from '../../lib/Quiz';
import ConfirmationEditor from './ConfirmationEditor'
import { Button, Segment } from 'semantic-ui-react'

class ConfirmationPage extends Component {
  submitProblemToBackend = (event) => {
    event.preventDefault()
    fetch('https://codereader-backend.herokuapp.com/api/v1/problems', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        problem: {
          code: String(this.props.state.contributor.contributorCode),
          quiz: JSON.stringify(this.props.state.contributor.contributorQuizJSON),
          title: this.props.state.contributor.problemTitle,
          difficulty_id: parseInt(this.props.state.contributor.contributorSkillId),
          language_id: parseInt(this.props.state.contributor.contributorLanguage),
          category_id: parseInt(this.props.state.contributor.contributorCategoryId),
          prompt: this.props.state.contributor.prompt,
          notes: this.props.state.contributor.notes,
          description: this.props.state.contributor.description,
          contributor_id: 1
        }
      })
    }).then(response => response.json())
    .then( r =>   this.props.dispatch({
      type:'RESET'
    }))
  }
  quizCheck = () => {
    const quizText = this.props.state.contributor.contributorQuizJSON
    if (typeof quizText === "string") {
      return quizText
    }
    else {
      return JSON.stringify(quizText)}
  }
  render(){
  return(<>

    <div className="confirmationPage">
      <h1>Thanks for submitting your problem! This is what your code and quiz will look like. Take a look!</h1>
      <div className="redux-code">
        <ConfirmationEditor code={this.props.state.contributor.contributorCode}/>
      </div>
      <div className="redux-quiz">
        <h2>Quiz</h2>

        <Quiz quiz={JSON.parse(this.quizCheck())} />
      </div>
      <div className="contributorSubmitButton">
      <button className="ui red button, big ui button" id='contributor-confirm-button' onClick={(event)=>this.submitProblemToBackend(event)}>Confirm</button>
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
