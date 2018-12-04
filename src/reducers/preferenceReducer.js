
const initialState = {
  difficulty_id: null,
  category_id: null
}

const preferenceReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SAVE_PREFERENCE':
      return Object.assign(
          {},
          state,{
            difficulty_id: action.payload.difficulty_id,
            category_id: action.payload.category_id
          });
    default:
      return state;
  }
}


export default preferenceReducer
