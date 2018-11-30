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
        <button className="ui red button, small ui button" id={1} onClick={(event)=>this.takeQuiz(event)}>Start Over</button>
        <button className="ui blue button, small ui button" id={2} onClick={(event)=>this.takeQuiz(event)}>Next Problem</button>
        < />
      )
    }
  }
  render() {
    return (
      <div className="quizContainer">
        <div id="quiz">
        <Quiz quiz={quiz}/>
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
