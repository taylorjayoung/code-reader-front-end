
const initialState = {
  selectedCategories: [],
  categories: [{ 1: "Context Based Solving"},{ 2: "Guessing Output"},{ 3: "Debugging" },{ 4: "Syntax"},{ 5: "Execution Contexts"},{ 6: "Breakpoints"},{ 7: "Efficiency Improvements"},{ 8: "Server Side"}],
  submitButton: null
}

const categoryReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SAVE_CATEGORY_SELECTION':
      return Object.assign(
          {},
          state,{
            selectedCategories:  action.payload.selectedCategories,
            submitButton:  action.payload.submitButton
          });
    default:
      return state;
  }
}


export default categoryReducer
