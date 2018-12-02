import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';





class ListComponent extends Component {
  renderProblem = (event) => {
    event.preventDefault()
    const data = {
      selectedProblem: this.props.problem.id,
      problemDisplay: true
    }
    this.props.dispatch({
      type:'RENDER_PROBLEM',
      payload: data});
  }

  render() {
    return (
      <div className='problemDisplayDiv' onClick={(event) => this.renderProblem(event)}>
        <h1>Title - {this.props.problem.title} </h1>
        <h1>Category - {this.props.problem.category_id} </h1>
        <h1>Author - {this.props.problem.contributor_id} </h1>
        <h1>Difficult - {this.props.problem.difficulty_id} </h1>
        <h1>Language - {this.props.problem.language_id} </h1>
      </div>
    );
  }
}


let mapStateToProps = (state) => {
  return {
    state
  }
}

export default connect(mapStateToProps)(ListComponent);
