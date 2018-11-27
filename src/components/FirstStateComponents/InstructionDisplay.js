import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubmitButton from './SubmitButton'


class InstructionDisplay extends Component {
  displayFinder = (props) => {

    if(props.state.skill.selectedSkillLevel){
      return(
        <>
      <h1 className='titles'>Choose Some Categories </h1>
        < />
    )}
    else if(props.state.language.selectedLanguage){
      return (
      <h1 className='titles'>Choose a Skill Level </h1>
    )}
    else if(!props.state.display.homePage){
      return(
        <h1 className='titles'>Choose a Language </h1>
    )}
  }


  render() {
    return (
      <div className='mover' >
        <div className='titleDiv'>
          {this.displayFinder(this.props)}
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

export default connect(mapStateToProps)(InstructionDisplay);
