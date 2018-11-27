
const initialState = {
  selectedSkill: null,
  skills: [{ 1: "Beginner"},{ 2: "Intermediate"},{ 3: "Hard"},{ 4: "Advanced"},{ 5: "Impossible"}]
}

const skillReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SAVE_SKILL_SELECTION':
      return Object.assign(
          {},
          state,{
          categorySelection: action.payload.categorySelection,
          selectedSkillLevel: action.payload.selectedSkillLevel
          });
    default:
      return state;
  }
}


export default skillReducer
