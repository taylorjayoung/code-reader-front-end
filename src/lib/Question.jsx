import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Question extends Component {
  constructor(props){
    super(props);
    this.state = {
      incorrectAnswer: false,
      correctAnswer: false,
      showNextQuestionButton: false,
      endQuiz: false,
      currentQuestionIndex: 0,
      buttons: {},
      buttonClasses: {},
      correct: [],
      incorrect: [],
    };
  }

  renderFinishedButtons =() =>{
     const data = {
       renderQuizDirectoryButtons: true,
     }
     this.props.dispatch({
       type:'RENDER_QUIZ_BUTTONS',
       payload: data});
   }

  checkAnswer = (index, correctAnswer) => {
    const { correct, incorrect, currentQuestionIndex } = this.state;
    if(index == correctAnswer) {
      if( incorrect.indexOf(currentQuestionIndex) < 0 && correct.indexOf(currentQuestionIndex) < 0) {
        correct.push(currentQuestionIndex)
      }

      this.setState({
        correctAnswer: true,
        incorrectAnswer: false,
        showNextQuestionButton: true,
        correct: correct
      })

      let disabledAll = {
        0: {disabled: true},
        1: {disabled: true},
        2: {disabled: true},
        3: {disabled: true}
      }

      this.setState((prevState) => {
        const buttons = Object.assign(
          {},
          prevState.buttons,
          {
            ...disabledAll,
            [index-1]: {
              className: (index == correctAnswer)? "correct" : ""
            },
          }
        );
        return { buttons };
      })
    } else {
      if( correct.indexOf(currentQuestionIndex) < 0 && incorrect.indexOf(currentQuestionIndex) < 0 ) {
        incorrect.push(currentQuestionIndex)
      }

      this.setState({
        incorrectAnswer: true,
        correctAnswer: false,
        incorrect: incorrect
      })
      this.setState((prevState) => {
        const buttons = Object.assign(
          {},
          prevState.buttons,
          {
            [index-1]: {
              disabled: !prevState.buttons[index-1]
            }
          }
        );
        return { buttons };
      });
    }
  }

  nextQuestion = (currentQuestionIndex) => {
    const { questions } = this.props;

    var initState = {
      incorrectAnswer: false,
      correctAnswer: false,
      showNextQuestionButton: false,
      buttons: {},
    }

    if(currentQuestionIndex + 1 == questions.length) {
      this.setState({
        ...initState,
        endQuiz: true
      }, () => {this.renderFinishedButtons()})
    } else {
      this.setState({
        ...initState,
        currentQuestionIndex: currentQuestionIndex + 1,
      })
    }
  }

  render() {
    const { questions } = this.props;
    let question = questions[this.state.currentQuestionIndex];
    return (
      <div className="questionWrapper">
        {!this.state.endQuiz &&
          <div className="questionWrapperBody">
            <div className="questionModal">
              {this.state.incorrectAnswer &&
                <div className="alert incorrect">Incorrect answer. Please try again.</div>
              }
              {this.state.correctAnswer &&
                <div className="alert correct">You are correct. Please click Next to continue.</div>
              }
            </div>
            <div>Question {this.state.currentQuestionIndex + 1}:</div>
            <h3>{question.question}</h3>
            {
              question.answers.map( (answer, index) => {
                if(this.state.buttons[index] != undefined) {
                  return (
                    <button key={index} disabled={ this.state.buttons[index].disabled || false } className={`${this.state.buttons[index].className} answerBtn btn`}  onClick={() => this.checkAnswer(index+1, question.correctAnswer)}>
                      { question.questionType == 'text' && <span>{answer}</span> }
                      { question.questionType == 'photo' && <img src={answer} /> }
                    </button>
                  )
                } else {
                  return (
                    <button key={index} onClick={() => this.checkAnswer(index+1, question.correctAnswer)} className="answerBtn btn">
                    { question.questionType == 'text' && answer }
                    { question.questionType == 'photo' && <img src={answer}/> }
                    </button>
                  )
                }
              })
            }
            {this.state.showNextQuestionButton &&
              <div><button onClick={() => this.nextQuestion(this.state.currentQuestionIndex)} className="nextQuestionBtn btn">Next</button></div>
            }
          </div>
        }
        {this.state.endQuiz &&
            <div className="card-body">
              <h2>You have completed the quiz. You got {this.state.correct.length} out of {questions.length} questions. <br/></h2>
              {
                this.state.correct.length > 0 &&
                <div>
                  {
                    this.state.correct.map( (questionIdx, index) => {
                    let question = questions[questionIdx];
                      return (
                        <div key={index}>
                          <h3>
                            Q{questionIdx+1}: {questions[questionIdx].question}
                          </h3>
                          {
                            <button disabled={true} className="answerBtn btn">
                              { question.questionType == 'text' && <span>{ question.answers[question.correctAnswer - 1] }</span> }
                              { question.questionType == 'photo' && <img src={ question.answers[question.correctAnswer -1] } /> }
                            </button>
                          }
                        </div>
                      )
                    })
                  }
                </div>
              }

              {
                this.state.incorrect.length > 0 &&
                  <div>
                    <h2>You may need to revise on the following question(s):</h2>
                    {
                      this.state.incorrect.map( (questionIdx, index) => {
                      let question = questions[questionIdx];
                        return (
                          <div key={index}>
                            <h3>
                              Q{questionIdx+1}: {questions[questionIdx].question}
                            </h3>
                            {
                              <button disabled={true} className="answerBtn btn">
                                { question.questionType == 'text' && <span>{ question.answers[question.correctAnswer - 1] }</span> }
                                { question.questionType == 'photo' && <img src={ question.answers[question.correctAnswer -1] } /> }
                              </button>
                            }
                          </div>
                        )
                      })
                    }
                  </div>
              }
            </div>
        }
        </div>
    );
  }
}


Question.propTypes = {
  questions: PropTypes.array,
};


let mapStateToProps = (state) => {
  return {
    state
  }
}
export default connect(mapStateToProps)(Question);
