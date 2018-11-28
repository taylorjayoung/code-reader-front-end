import React, { Component } from 'react';
import PromptContainer from './PromptContainer';
import QuizComponent from './QuizComponent';
import '../../App.css';
import { connect } from 'react-redux';
import Javascript from './LanguageComponents/Javascript'
import Ruby from './LanguageComponents/Ruby'



class ProblemDisplay extends Component {

  displayFunction = () => {
    const languageIndex = this.props.state.language.selectedLanguage
    const languagesArray = this.props.state.language.languages
    const lang  = languagesArray[languageIndex][languageIndex]

    if (lang === "Javascript"){
      return <Javascript />
    }

    else {
      return <Ruby />
    }
  }

  render() {
    return (
      <div className="ProblemContainer">
        <PromptContainer />
        {this.displayFunction()}
        <QuizComponent />
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
