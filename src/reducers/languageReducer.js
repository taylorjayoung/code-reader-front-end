
const initialState = {
  selectedLanguage: null,
  skillSelection: false,
  languages: [{9: 'Android'}, {1: 'C'}, {2:'Javascript'}, {3:'JS'}, {4: 'PHP'}, {5:'Rails'}, {6:'Vue'}, {7: 'Java'}, {8: 'C#'}]
}


const languageReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SAVE_LANGUAGE_SELECTION':
      return Object.assign(
          {},
          state,{
          selectedLanguage: action.payload.selectedLanguage,
          skillSelection: action.payload.skillSelection
          });
    default:
      return state;
  }
}


export default languageReducer
