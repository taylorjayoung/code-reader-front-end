import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import ListComponent from './ListComponent'
import ProblemDisplay from './ProblemDisplay'



class ProblemsContainerDisplay extends Component {

  fetchProblems = () => {

    fetch('http://localhost:3000/api/v1/problems')
    .then(r => r.json())
    .then(r => this.props.dispatch({
            type:'FETCH_PROBLEMS',
            payload: {problems: r}})
          )
  }

  displayProblems = () => {
    return this.props.state.problems.problems.map(problem =>{
      return ( <ListComponent key={problem.id} problem={problem}/>)}
      )}

  render() {
    return (
      <div className="ProblemContainer">
        {this.props.state.problems.problems.length === 0 ? this.fetchProblems() : null}
        <div className='ProblemContainerChild'>
          {this.props.state.problems.selectedProblem ? <ProblemDisplay /> : this.displayProblems()}
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

export default connect(mapStateToProps)(ProblemsContainerDisplay);
