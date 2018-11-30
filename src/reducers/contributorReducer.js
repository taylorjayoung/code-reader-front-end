
const initialState = {
  readInstructions: true,
  submitProblem: false,
  contributorCode: '',
  contributorQuiz: null,
  contributorLanguage: null,
  displayQuizForm: false
}

const displayReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SAVE_CONTRIBUTOR_LANGUAGE':
      return Object.assign(
          {},
          state,{
            readInstructions: action.payload.readInstructions,
            contributorLanguage: action.payload.contributorLanguage
          });
    case 'PROBLEM_PROMPT':
      return Object.assign(
          {},
          state,{
            readInstructions: action.payload.readInstructions,
            submitProblem: action.payload.submitProblem
          });
    case 'SAVE_CONTRIBUTOR_CODE':
      return Object.assign(
          {},
          state,{
            readInstructions: action.payload.readInstructions,
            contributorCode: action.payload.contributorCode,
            displayQuizForm: action.payload.displayQuizForm,
            submitProblem: action.payload.submitProblem
          });
    case 'QUIZ_SUBMITTED':
      return Object.assign(
          {},
          state,{
            contributorQuizJSON: action.payload.contributorQuizJSON,
            quizSubmitted: action.payload.quizSubmitted,
            displayQuizForm: false,

          });
    default:
      return state;
  }
}


export default displayReducer
