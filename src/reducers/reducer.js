import { combineReducers } from 'redux'
import displayReducer from './displayReducer'
import languageReducer from './languageReducer'
import skillReducer from './skillReducer'
import categoryReducer from './categoryReducer'
import quizReducer from './quizReducer'
import contributorReducer from './contributorReducer'
import problemsReducer from './problemsReducer'
import {reducer as formReducer} from 'redux-form'
const appReducer = combineReducers({
  display: displayReducer,
  language: languageReducer,
  skill: skillReducer,
  category: categoryReducer,
  quiz: quizReducer,
  contributor: contributorReducer,
  form: formReducer,
  problems: problemsReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET') {
    state = undefined
  }
  return appReducer(state, action)
}




export default rootReducer
