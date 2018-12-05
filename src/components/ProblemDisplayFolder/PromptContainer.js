import React, { Component } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import Resource from './Resource'


class PromptContainer extends Component {

  resourceFinder = () => {
    return this.props.state.category.selectedCategories.map(category => {
      return <Resource key={category.label} category={category} />
    })
  }

  propChecker ()  {
    debugger
  }
  render() {
    return (
      <div className="prompt">
      {this.propChecker()}
        <div className='promptText'>
        <article>

          <h2 id='ProblemTitle'>{this.props.state.problems.problemTitle}</h2>
          <h3>Prompt</h3>
          <p>What output should be expected from the final function?</p>
          <h3>Background:</h3>
          <p>In this code some data is being pulled form an API. What's happening with that data? Where is it being stored and where is it being referenced? These are questions you'll have to answer before making your final determination.</p>
        </article>
        <br></br>
        <p>Below are some resources that will get you on track should you get stuck. </p>
        <br></br>
        <h3>Resources</h3>
          <div>
            {this.resourceFinder()}
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

export default connect(mapStateToProps)(PromptContainer);
