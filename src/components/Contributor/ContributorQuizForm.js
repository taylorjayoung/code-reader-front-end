import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import {reduxForm, Field} from 'redux-form'
import QuizMaster from '../quiz-form-folder/QuizMaster'

const validate = values => {
  const errors = {}
  if(!values.firstName){
    errors.firstName = 'Required'
  }
  if(!values.lastName){
    errors.lastName = 'Required'
  }
  if(!values.favPet){
    errors.favPet = 'Required'
  }
  if(!values.city){
    errors.city = 'Required'
  }
  return errors
}

const createRenderer= render =>({input, meta, label}) => {
  return <>
    <div className={[
      meta.error && meta.touched ? 'error' : '',
      meta.active ? 'active' : ''
  ].join(' ')}>
      <label> {label} </label>
      {render(input,label)}
      {meta.error &&
          meta.touched &&
            <span>
            {meta.error}
            </span>}
    </div>
  < />
}
const RenderInput = createRenderer((input,label) =>
  <input {...input} placeholder={label}/>
)
const RenderSelect = createRenderer((input,label) =>
  <select {...input} />
)


const  functionNow = () => {
    console.log('work')
  }

let DemoForm = ({handleSubmit, submitting}) =>

  <form onSubmit={handleSubmit(functionNow)}>
      <Field name='title' label="Title" component={RenderInput} />
      <Field name='difficulty' label='Difficulty' component={RenderSelect} />
      <Field name='favPet' label='Fav Pet' component={RenderInput} />
      <Field name='city' label='City' component={RenderInput} />
      <button type="Submit" disabled={submitting}>Submit</button>
  </form>

DemoForm = reduxForm({
  form: 'demo',
  destroyOnUnmount: false,
  validate
})(DemoForm)



export default DemoForm
