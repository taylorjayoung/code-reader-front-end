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
