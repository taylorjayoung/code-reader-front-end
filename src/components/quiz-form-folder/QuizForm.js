import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, FieldArray, reduxForm, formValueSelector } from 'redux-form';
import range from 'lodash/range'
import validate from './validate';

class QuizForm extends Component {
  render() {

 const {questionType} = this.props;
 const renderInputField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} type={type} placeholder={label} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);


const renderSelectField = ({ input, label, type, meta: { touched, error }, children }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input} >
      	{children}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderSelectQuestionTypeField = ({ input, label, type, meta: { touched, error }, children }) => (
  <div>
    <label>{label}</label>
    <div>
      <select {...input} >
        {children}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const renderTextAnswers = ({ fields, question, meta: { error } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push()}>Add Answer</button>
    </li>
    {fields.map((answer, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Answer"
          onClick={() => fields.remove(index)}
        />
        <Field
          name={answer}
          type="text"
          component={renderInputField}
          label={`Answer #${index + 1}`}
        />
      </li>
    ))}
        <li>
       	<Field
          name={`${question}.correctAnswer`}
          component={renderSelectField}
          label="Correct Answer"
        >
        	<option value="">Please select correct answer</option>
	         {fields.map((answer, index) => (
	         	<option key={index+1} value={index+1}>{`Answer #${index + 1}`}</option>
	         ))}
        </Field>
        </li>

    {error && <li className="error">{error}</li>}
  </ul>
);


const renderQuestions = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul>
    <li>
      <button type="button" onClick={() => fields.push({})}>Add Question</button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((question, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Question"
          onClick={() => fields.remove(index)}
        />
        <h4>Question #{index + 1}</h4>
        <Field
          name={`${question}.question`}
          type="text"
          component={renderInputField}
          label="Question Title"
        />
        <Field
          name={`${question}.questionType`}
          component={renderSelectQuestionTypeField}
          label="Question Type"
        >
          <option value="">Please select a question type</option>
          <option value="text">Text</option>
          <option value="photo">Photo</option>
        </Field>
        <FieldArray name={`${question}.answers`} component={renderTextAnswers} question={question} />
      </li>
    ))}
  </ul>
);

  const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div className="QuizForm">
         <form name="quiz-form" onSubmit={handleSubmit}>
	      <Field
	        name="quizTitle"
	        type="text"
	        component={renderInputField}
	        label="Quiz Title"
	      />
	      <FieldArray name="questions" component={renderQuestions} />
	      <div>
	        <button type="submit" disabled={submitting}>Submit</button>
	        <button type="button" disabled={pristine || submitting} onClick={reset}>
	          Clear Values
	        </button>
	      </div>
	    </form>
      </div>
    );
  }
}

QuizForm = reduxForm({
  form: 'quizForm',
  destroyOnUnmount: false,
  validate
})(QuizForm);

const selector = formValueSelector('quizForm');

QuizForm = connect(
  state => {
    const questions = selector(state, 'questions');
    const questionType = questions && questions.map(question => question.questionType);

    return { questionType: questionType }
  }
)(QuizForm)


export default QuizForm;
