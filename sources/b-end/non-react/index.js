// Write example code with redux here
const { legacy_createStore: createStore } = require("redux");

const obj = {
  a: 0,
  b: 1,
  a: 100,
};

console.log(obj); // { a: 100, b: 1 }

// Ingat: state ini sifatnya immutable
const initialState = {
  counter: 0,
  todos: [],
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "counter/incrementCounter") {
    // Return state baru
    return {
      ...state,
      counter: state.counter + 1,
    };
  } else if (action.type === "counter/decrementCounter") {
    // Return state baru
    return {
      ...state,
      counter: state.counter - 1,
    };
  } else {
    // Ingat pada semua reducer yang ada
    // HARUS ada default baru yang bisa mengembalikan state yang semua agar tidak merusak
    // object (value) yang sudah ada
    return state;
  }
};

const store = createStore(counterReducer);

// store.subscribe(() => console.log(store.getState()));

store.dispatch({
  type: "counter/incrementCounter",
});

console.log("State setelah increment pertama", store.getState());

store.dispatch({
  type: "counter/incrementCounter",
});

console.log("State setelah increment kedua", store.getState());

store.dispatch({
  type: "counter/decrementCounter",
});

console.log("State setelah decrement pertama", store.getState());

store.dispatch({
  type: "counter/decrementCounter",
});

console.log("State setelah decrement kedua", store.getState());
