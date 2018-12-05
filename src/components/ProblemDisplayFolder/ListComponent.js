import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';





class ListComponent extends Component {
  renderProblem = (event) => {
    event.preventDefault()
    const data = {
      selectedProblem: this.props.problem.id,
      quizJSONToDisplay: this.props.problem.quiz,
      problemDisplay: true,
      problemTitle: this.props.problem.title
    }
    this.props.dispatch({
      type:'RENDER_PROBLEM',
      payload: data});
  }

  // displayInfo = () => {
  //   const cat = this.props.problem.category_id -1
  //   const lang = this.props.problem.language_id -1
  //   const diff = this.props.problem.difficulty_id -1
  //   return(
  //     <div className='problemDescriptionItem'>
  //       <div className ='problemItemTitle'> <h1>{this.props.problem.title} </h1></div>
  //       <div className ='problemItemInfo' ><h2>Category - {Object.values(this.props.state.category.categories[cat])[0]} </h2>
  //       <h2>Difficulty - {Object.values(this.props.state.skill.skills[diff])[0]} </h2>
  //       <h2>Language - {Object.values(this.props.state.language.languages[lang])[0]} </h2> </div>
  //     </div>
  //   )
  // }
  displayInfo = () => {
    const cat = this.props.problem.category_id -1
    const lang = this.props.problem.language_id
    const diff = this.props.problem.difficulty_id -1
    return(
      <div className='problemDescriptionItem'>
        <button type="button" class="list-group-item list-group-item-primary">
          <div className ='problemItemTitle'> <h1>{this.props.problem.title} </h1></div>
          <div className ='problemItemInfo' ><p>Category - {Object.values(this.props.state.category.categories[cat])[0]} </p>
          <p>Difficulty - {Object.values(this.props.state.skill.skills[diff])[0]} </p>
          <p>Language - {Object.values(this.props.state.language.languages[lang])[0]} </p> </div>
        </button>

      </div>
    )
  }

  // <div>
  // {this.displayInfo()}
  // </div>
  render() {
    return (
      <div className='problemDisplayDiv' onClick={(event) => this.renderProblem(event)}>

        <div className="list-group">
          <button type="button" class="list-group-item list-group-item-primary" disabled>
          </button>
          {this.displayInfo()}

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

export default connect(mapStateToProps)(ListComponent);
