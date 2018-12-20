import React, { Component } from 'react';
import QuizForm from './QuizForm';
import QuizFormResult from './QuizFormResult';
import { connect } from 'react-redux';
import {quiz} from '../ProblemDisplayFolder/Problems/Javascript/Quizzes/QuizOne'

class QuizFormMaster extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		result : null
  	}
  }

  setResult = (values) =>{
	  this.setState({
	  	result : JSON.stringify(values, null, 2)
	  })
  }


    storeState = (json) => {
        const data = {
          contributorQuizJSON: json,
          quizSubmitted: true,
          displayQuizForm: false
        }
        this.props.dispatch({
          type:'QUIZ_SUBMITTED',
          payload: data});
    }

  autofillQuiz = () => {
      const data = {
        contributorQuizJSON: quiz,
        quizSubmitted: true,
        displayQuizForm: false
      }
      this.props.dispatch({
        type:'QUIZ_SUBMITTED',
        payload: data});
  }
 //  <QuizForm onSubmit={this.setResult} />
//  <br></br>
//<QuizFormResult result={this.state.result}/>

  render() {
    return (
      <div className="QuizFormMaster">

        <button className="ui primary button, medium ui button" id={2} onClick={(event)=>this.autofillQuiz(event)}>Autofill Default Quiz</button>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(QuizFormMaster);
