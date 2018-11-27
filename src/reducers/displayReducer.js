
const initialState = {
  homePage: true,
  categorySelection: false,
  logoSelection: false,
  selectedSkill: null,
  selectedCategories: {},
  selectedUserType: null,
}

const displayReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SAVE_HOME_SELECTION':
      return Object.assign(
          {},
          state,{
          selectedUserType: action.payload.selectedUserType,
          logoSelection: action.payload.logoSelection,
          homePage: false});
    case 'RENDER_PROBLEMS':
      return Object.assign(
          {},
          state,{
          problemDisplay: action.payload.problemDisplay,
          });
    default:
      return state;
  }
}


export default displayReducer
