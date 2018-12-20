
const initialState = {
  homePage: true,
  categorySelection: false,
  logoSelection: false,
  selectedSkill: null,
  selectedCategories: {},
  selectedUserType: null,
  searchTerm: ''
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

    case 'RENDER_PROBLEMS_CONTAINER':
      return Object.assign(
          {},
          state,{
          problemContainerDisplay: action.payload.problemContainerDisplay,
          });
          
    case 'SAVE_SEARCH':
      return Object.assign(
          {},
          state,{
          searchTerm: action.payload.searchTerm,
          });
    default:
      return state;
  }
}


export default displayReducer
