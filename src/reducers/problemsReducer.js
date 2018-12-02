
const initialState = {
  problems: [],
  selectedProblem: null
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
          selectedProblem: action.payload.selectedProblem
          });
    default:
      return state;
  }
}


export default problemsReducer
