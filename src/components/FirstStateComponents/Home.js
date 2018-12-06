import React, { Component } from 'react';
import '../../App.css';
import { Button, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux';
import $ from 'jquery';




class Home extends Component {

  componentDidMount(){
    const odometer = document.getElementById('odometer')
    setTimeout(function(){
    odometer.innerHTML = 217;
}, 200);
  }


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

  propsChecker = () => {
    if (this.props.state.display.homePage === true ){
      return (<div>
        <div id="odometer" class="odometer">123 </div>
        <h3 id='odometer-caption'>Pages and Counting</h3>
      </div>)
    }
  }

  render() {
    return (
      <div className="homeContainer">
        <div className="home">
          <h1 className='main-title'>Bit Book </h1>
          {this.propsChecker()}
          <h2 className='sub-title'>Are You Here To </h2>
          <div className="ui inverted segment">
            <button className="ui inverted primary button, huge ui button" id={1} onClick={(event)=>this.homeClickHandler(event)}>Read</button> <span className='text'> &nbsp; Or  &nbsp;&nbsp;</span>
            <button className="ui inverted primary button, huge ui button" id={2} onClick={(event)=>this.homeClickHandler(event)}>Write</button>
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
