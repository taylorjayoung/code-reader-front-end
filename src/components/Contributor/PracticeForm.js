import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import brace from 'brace';
import 'brace/theme/twilight';
import { connect } from 'react-redux';
import QuizMaster from '../quiz-form-folder/QuizMaster'


class ContributorCodeEditor extends Component {
  state = {
    code: ''
  }

  getCode = (newValue) => {
    this.setState({code:newValue})
  }

  submitState = (event)=> {
    event.preventDefault()
    const data = {
      readInstructions: false,
      contributorCode: this.state.code,
      submitProblem: false,
      displayQuizForm: true
    }
    this.props.dispatch({
      type:'SAVE_CONTRIBUTOR_CODE',
      payload: data});
  }


  render() {
    return (
      <>
      <div className="practiceQuiz">
        <QuizMaster />
      </div>
      <div className="quizInfo">
        <h2>QUIZ FORM UNDER CONSTRUCTION</h2>
        <p>This is normally where the quiz form for making your own quiz and answers goes.</p>
        <p>Unfortunately the library I've been using is deprecated. Until then Use this autofil button.</p>
        <p>When I find a good quiz library I will be sure to upload it.</p>
      </div>
      < />
    );
  }
}


const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(ContributorCodeEditor);
