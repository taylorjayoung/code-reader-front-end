import React, { Component } from 'react';
import QuizForm from './QuizForm';
import QuizFormResult from './QuizFormResult';

class QuizFormMaster extends Component {
  constructor(props){
  	super(props);
  	this.state = {
  		result : null
  	}
  }

  setResult = (values) =>{
	  this.setState({
	  	result : JSON.stringify(values, null, 2)
	  })
  }

  render() {
    return (
      <div className="QuizFormMaster">
       	<QuizForm onSubmit={this.setResult} />
       	<QuizFormResult result={this.state.result}/>
      </div>
    );
  }
}

export default QuizFormMaster;
