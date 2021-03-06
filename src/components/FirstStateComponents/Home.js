import React, { Component, Fragment } from 'react';
import '../../App.css';
import { Button, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import $ from 'jquery';




class Home extends Component {

  homeClickHandler = (event) => {
    event.preventDefault()
    const data = {
      selectedUserType: event.target.id,
      homePage: false,
      logoSelection: true
    }
    this.props.dispatch({
      type:'SAVE_HOME_SELECTION',
      payload: data});
  }


  render() {
    return (
      <>
        <div className="homeContainer">
          <h1 className='main-title'>Bit Book </h1>
          <h2 className='sub-title'>Are You Here To </h2>
          <div className="ui inverted segment">
            <button className="ui inverted primary button, huge ui button" id={1} onClick={(event)=>this.homeClickHandler(event)}>Read</button> <span className='text'> &nbsp;   &nbsp;&nbsp;</span>
            <button className="ui inverted primary button, huge ui button" id={2} onClick={(event)=>this.homeClickHandler(event)}>Write</button>
          </div>
        </div>
      < />
    );
  }
}

let mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(Home);
