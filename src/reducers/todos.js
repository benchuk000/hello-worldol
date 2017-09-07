import * as types from '../actionTypes/actionTypes';

function todos(state = {}, action) {
    switch (action.type) {
      case types.ADD_TODO:
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              text: action.text,
              completed: false
            }
          ]
        }
      default:
        return state
    }
  }

  export default todos;