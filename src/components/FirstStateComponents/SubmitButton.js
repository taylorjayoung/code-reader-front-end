import React, {Component, Fragment} from 'react';
import { Button, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';

class SubmitButton extends Component {

 renderProblems =(event) =>{
    event.preventDefault()
    const data = {
      problemDisplay: true,
    }
    this.props.dispatch({
      type:'RENDER_PROBLEMS',
      payload: data});
  }

 resetPreferences =(event) => {
    event.preventDefault()
    this.props.dispatch({
      type:'RESET'
    });
  }

  render(){
    return(
      <div className='buttonTerminalParent'>
        <div className='buttonTerminalChild'>
        <button className="ui inverted red button,  ui button" id='resetBig' onClick={(event)=>this.resetPreferences(event)}>Reset</button>
        <span className='text'> &nbsp;  &nbsp;&nbsp;</span>
        <button className="ui inverted primary button,  ui button" id='submitBig' onClick={(event)=>this.renderProblems(event)}>Submit</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(SubmitButton);
