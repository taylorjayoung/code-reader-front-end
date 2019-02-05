import React, {Fragment, Component } from 'react';
import { connect } from 'react-redux';


class InstructionDisplay extends Component {

  displayFinder = (props) => {
    if(props.state.skill.selectedSkillLevel){
      return(
        <>
      <h1 className='titles categories'>Choose Some Categories</h1>
        < />
    )}
    else if(props.state.language.selectedLanguage){
      return (
      <h1 className='titles skill'>Choose Skill Level</h1>
    )}
    else if(!props.state.display.homePage){
      return(
        <h1 className='titles language'>Choose Language</h1>
    )}
  }


  render() {
    return (
        <div className="instruction-div">
          {this.displayFinder(this.props)}
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
