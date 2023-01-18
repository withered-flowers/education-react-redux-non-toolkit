// Akan menaruh di storenya
// createStore
import { legacy_createStore as createStore, combineReducers } from "redux";

import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

const store = createStore(rootReducer);

export default store;
