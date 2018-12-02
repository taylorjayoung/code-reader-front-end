import React, { Component } from 'react';
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
      <div className="homeContainer">
      {console.log('loade')}
        <div className="home">
          <h1 className='main-title'>Welcome To Bit Book </h1>
          <h2 className='sub-title'>Are You Here To </h2>
          <div className="ui inverted segment">
            <button className="ui inverted primary button, big ui button" id={1} onClick={(event)=>this.homeClickHandler(event)}>Practice</button> <span className='text'> &nbsp; Or  &nbsp;&nbsp;</span>
            <button className="ui inverted primary button, big ui button" id={2} onClick={(event)=>this.homeClickHandler(event)}>Contribute</button>
          </div>

          <div id="myModal" className='modal'>
            <div className='modal-content'>
            <span className="close">&times;</span>
              <p>Some text in the Modal..</p>
            </div>
          </div>
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

export default connect(mapStateToProps)(Home);
