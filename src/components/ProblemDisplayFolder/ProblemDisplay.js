import React, { Component } from 'react';
import PromptContainer from './PromptContainer';
import ProblemField from './ProblemField';
import '../../App.css';



class ProblemDisplay extends Component {
  render() {
    return (
      <div className="ProblemContainer">
        <PromptContainer />
        <ProblemField />
      </div>
    );
  }
}

export default ProblemDisplay;
