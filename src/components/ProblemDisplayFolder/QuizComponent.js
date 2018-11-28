import React, { Component } from 'react';
import '../../App.css';
import { quiz } from './Problems/Javascript/Quizzes/QuizOne';
import Quiz from 'react-quiz-component';


class QuizComponent extends Component {
  render() {
    return (
      <div className="quizContainer">
        <div id="quiz">
        <Quiz quiz={quiz}/>
        </div>
      </div>
    );
  }
}

export default QuizComponent;
