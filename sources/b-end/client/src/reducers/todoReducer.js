const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  // di sini kita coba untuk menggunakan if else
  if (action.type === "todos/setTodos") {
    return {
      ...state,
      todos: action.payload,
    };
  } else {
    return state;
  }
};

export default todoReducer;
