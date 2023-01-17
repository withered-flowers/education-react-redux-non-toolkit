// Write example code with redux here
const { legacy_createStore: createStore } = require("redux");

// Ingat: state ini sifatnya immutable
const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "counter/incrementCounter") {
    // Return state baru
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "counter/decrementCounter") {
    // Return state baru
    return {
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

store.subscribe(() => console.log(store.getState()));

store.dispatch({
  type: "counter/incrementCounter",
});

store.dispatch({
  type: "counter/incrementCounter",
});

store.dispatch({
  type: "counter/decrementCounter",
});

store.dispatch({
  type: "counter/decrementCounter",
});
