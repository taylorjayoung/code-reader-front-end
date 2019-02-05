import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import ListComponent from './ListComponent'
import ProblemDisplay from './ProblemDisplay'
import Popup from 'react-popup';



class ProblemsContainer extends Component {

  fetchProblems = () => {

    // fetch('https://still-refuge-99143.herokuapp.com/api/v1/problems')
    fetch('http://localhost:8000/api/v1/problems')
    .then(r => r.json())
    .then(r => this.props.dispatch({
            type:'FETCH_PROBLEMS',
            payload: {problems: r}})
          )
  }

  displayProblems = () => {
    const categories = this.props.state.category.categories
    const language = this.props.state.language.selectedLanguage
    const problemMatches = this.props.state.problems.problems.filter( problem => {

      return problem.language_id === parseInt(language) && problem.title.toLowerCase().includes(this.props.state.display.searchTerm.toLowerCase())
    })

    return problemMatches.map(problem =>{
      const uuidv1 = require('uuid/v1');
      return <ListComponent key={uuidv1()} problem={problem}/>}
      )}



  buttonAlert = (event) => {
    event.preventDefault()
    Popup.alert(`Thanks for trying to check out all of our features. Unfortunately this one isn't built out yet. Take a look at our problem list!`);
  }


  homeButtonHandler = (event) => {
    event.preventDefault()
      this.props.dispatch({
          type:'RESET',
        });
    }

  updateSelection = () => {
    const data = {
      selectedUserType: 1,
      homePage: false,
      logoSelection: true
    }

    this.props.dispatch({
     type: 'SAVE_HOME_SELECTION',
    })
  }

  searchHandler = (event) => {
    event.preventDefault()
    const data = {
      searchTerm: event.target.value
    }

    this.props.dispatch({
     type: 'SAVE_SEARCH',
     payload: data
   })
  }

  render() {
    return (
      <>
      <div className='ProblemContainerNavBar'>
        <div className="ui secondary  menu">
          <a className="item" onClick={(event) => this.homeButtonHandler(event)}>
            Home
          </a>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..." onChange={(event) =>this.searchHandler(event)} />
                <i className="search link icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ProblemListContainer">
        {this.props.state.problems.problems.length === 0 ? this.fetchProblems() : null}
        <div className='ProblemListContainerChild'>
          {this.props.state.problems.selectedProblem ? <ProblemDisplay /> : this.displayProblems()}
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

export default connect(mapStateToProps)(ProblemsContainer);
