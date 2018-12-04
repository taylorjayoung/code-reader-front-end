
const initialState = {
  problems: [],
  selectedProblem: null,
  quizJSONToDisplay: null
}


const problemsReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_PROBLEMS':
      return Object.assign(
          {},
          state,{
          problems: action.payload.problems
          });
    case 'RENDER_PROBLEM':
      return Object.assign(
          {},
          state,{
          selectedProblem: action.payload.selectedProblem,
          problemDisplay: true,
          quizJSONToDisplay: action.payload.quizJSONToDisplay
          });
    default:
      return state;
  }
}


export default problemsReducer
