import React, { Component } from 'react';
import PromptContainer from './PromptContainer';
import QuizComponent from './QuizComponent';
import '../../App.css';
import { connect } from 'react-redux';
import Javascript from './LanguageComponents/Javascript'
import Ruby from './LanguageComponents/Ruby'



class ProblemDisplay extends Component {

  problemDisplayFunction = () => {
    const languageIndex = this.props.state.language.selectedLanguage
    const languagesArray = this.props.state.language.languages
    const lang  = languagesArray[languageIndex][languageIndex]
    if (lang === "Javascript")
    {return  <Javascript /> }
    else { return <Ruby />  }
  }

  promptDisplayFunction = () => {
    return this.props.state.quiz.takingQuiz ? <QuizComponent /> : <PromptContainer />
  }

  render() {
    return (
      <div className="ProblemContainer">
        {this.promptDisplayFunction()}
        {this.problemDisplayFunction()}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(ProblemDisplay);
