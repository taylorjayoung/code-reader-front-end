
const initialState = {
  takingQuiz: null,
  renderQuizDirectoryButtons: false
}

const quizReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'QUIZ_SELECT':
      return Object.assign(
          {},
          state,{
          takingQuiz: action.payload.takingQuiz
        });
    case 'RENDER_QUIZ_BUTTONS':
      return Object.assign(
          {},
          state,{
          renderQuizDirectoryButtons: action.payload.renderQuizDirectoryButtons
        });
    default:
      return state;
  }
}


export default quizReducer
