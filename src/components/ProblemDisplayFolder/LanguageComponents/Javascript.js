import React, { Component } from 'react';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import brace from 'brace';
import ProblemText from '../Problems/Javascript/CodeEditorValues/ProblemOne'
// Import a Theme (okadia, github, xcode etc)
import 'brace/theme/twilight';
import { connect } from 'react-redux';
import { Button, Segment } from 'semantic-ui-react'

class Javascript extends Component {
  takeQuiz = (event) => {
    event.preventDefault()
    if(!this.props.state.quiz.takingQuiz){
        const data = {
          takingQuiz: true,
        }
        this.props.dispatch({
          type:'QUIZ_SELECT',
          payload: data});
      }
    }

  goHome = (event) => {
    event.preventDefault()
      this.props.dispatch({
          type:'RESET',
        });
    }

    problemCode = () => {
      const problemIndex = this.props.state.problems.selectedProblem
      const problem = this.props.state.problems.problems[problemIndex -1]
      return problem.code
    }

    goToProblemContainer = (event) => {
      event.preventDefault()
      const data = {
        selectedProblem: null,
        quizJSONToDisplay: null,
        problemDisplay: false,
        problemTitle: null,
        takingQuiz: false

      }
      this.props.dispatch({
        type:'RENDER_PROBLEM',
        payload: data});
    }


  render() {
    return (
      <div className="problemFieldParent">
        <div className='problemFieldChild'>
          <div id='problemEditor'>
              <AceEditor
              mode="javascript"
              theme="twilight"
              name="blah2"
              onLoad={this.onLoad}
              onChange={this.onChange}
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              editorProps={{
                  $blockScrolling: true
              }}
              value={this.problemCode()}

            setOptions={{
              resize: true,
              enableBasicAutocompletion: true,
              enableLiveAutocompletion: true,
              enableSnippets: false,
              showLineNumbers: true,
              tabSize: 2,
              }}
              />
          </div>
        </div>
        <div className='take-quiz-button-container'>
          <button className="ui white button, small ui button" id={1} onClick={(event)=>this.goHome(event)}>Home</button>
          <button className="ui white button, small ui button" id={2} onClick={(event)=>this.goToProblemContainer(event)}>Problem List</button>
          <button className="ui primary button, small ui button" id={3} onClick={(event)=>this.takeQuiz(event)}>Take Quiz</button>
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

export default connect(mapStateToProps)(Javascript);
