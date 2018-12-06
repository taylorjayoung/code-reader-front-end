import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import ListComponent from './ListComponent'
import ProblemDisplay from './ProblemDisplay'



class ProblemsContainerDisplay extends Component {

  fetchProblems = () => {

    fetch('http://localhost:3001/api/v1/problems')
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



  languagesButtonHandler = (event) => {
    event.preventDefault()
    this.props.dispatch({
      type: 'RESET'
    }, () => {this.updateSelection()})


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
          <a className="item" onClick={(event) => this.languagesButtonHandler(event)}>
            Change Language
          </a>
          <a className="item">
            Become an Author
          </a>
          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..." onChange={(event) =>this.searchHandler(event)} />
                <i className="search link icon"></i>
              </div>
            </div>
            <a className="ui item">
              Login
            </a>
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

export default connect(mapStateToProps)(ProblemsContainerDisplay);
