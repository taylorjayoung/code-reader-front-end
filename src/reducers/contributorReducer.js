
const initialState = {
  readInstructions: true,
  submitProblem: false,
  contributorCode: '',
  contributorQuiz: null,
  contributorLanguage: null,
  contributorSkillId: null,
  contributorCategoryId: null,
  displayQuizForm: false,
  contributorQuizJSON: null,
  quizSubmitted: false,
  problemTitle: null,
  prompt: null,
  description: null,
  notes: null
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
            displayQuizForm: action.payload.displayQuizForm

          });
    case 'SAVE_CATEGORY_ID':
      return Object.assign(
          {},
          state,{
            contributorCategoryId: action.payload.contributorCategoryId

          });
    case 'SAVE_SKILL_ID':
      return Object.assign(
          {},
          state,{
            contributorSkillId: action.payload.contributorSkillId

          });
    case 'SAVE_PROBLEM_TITLE':
      return Object.assign(
          {},
          state,{
            problemTitle: action.payload.problemTitle

          });
    case 'SAVE_NOTES':
      return Object.assign(
          {},
          state,{
            notes: action.payload.notes

          });
    case 'SAVE_DESCRIPTION':
      return Object.assign(
          {},
          state,{
            description: action.payload.description

          });
    case 'SAVE_PROMPT':
      return Object.assign(
          {},
          state,{
            prompt: action.payload.prompt

          });
    default:
      return state;
  }
}


export default displayReducer
