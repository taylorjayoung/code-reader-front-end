import React, { Component } from 'react';
import '../../App.css';
import { quiz } from './Problems/Javascript/Quizzes/QuizOne';
import Quiz from '../../lib/Quiz';
import Question from '../../lib/Question';
import { Button, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';

class QuizComponent extends Component {
  buttonCheck = () => {
    if(this.props.state.quiz.renderQuizDirectoryButtons){
      return(
        <>
        < />
      )
    }
  }


  render() {
    return (
      <div className="quizContainer">
        <div id="quiz">
          <Quiz quiz={this.props.state.problems.quizJSONToDisplay}/>
          <div className='quiz-button-container'>
            {this.buttonCheck()}
          </div>
        </div>
      </div>
    );
  }
}


let mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(QuizComponent);
