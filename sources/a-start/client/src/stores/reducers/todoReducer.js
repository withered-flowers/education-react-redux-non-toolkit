import { TODO_SET_TODOS } from "../actionType";

// Initial State
const initialState = {
  todos: [],
};

// Reducer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_SET_TODOS:
      return {
        todos: action.payload,
      };
    default:
      return state;
  }
};

// Export Reducer
export default todoReducer;
