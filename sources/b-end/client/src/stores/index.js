import { legacy_createStore as createStore, combineReducers } from "redux";

import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

// Nah di sini cuma menerima satu reducer, padahal kita punya 2 reducer
// (counter dan todo), jadi bagaimana?

// Gabungkan dengan combineReducer !
// (biasanya hasilnya bernama "rootReducer")

// combineReducer menerima sebuah object yang berisi seluruh reducer
// yang akan digabungkan.

// Property dari objectnya adalah "nama alias" dari reducernya
const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

const store = createStore(rootReducer);

// store.subscribe(() => console.log(store.getState()));

export default store;
