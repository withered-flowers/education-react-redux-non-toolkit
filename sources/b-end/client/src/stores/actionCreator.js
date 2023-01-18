import { COUNTER_FIRSTNUMBER_INCREMENT } from "./actionType";

export const counterFirstNumberIncrement = () => ({
  type: COUNTER_FIRSTNUMBER_INCREMENT,
});

export const counterSecondNumberIncrement = () => ({
  type: "counter/secondNumberIncrement",
});

export const counterFirstNumberDecrement = () => ({
  type: "counter/firstNumberDecrement",
});

export const counterSecondNumberDecrement = () => ({
  type: "counter/secondNumberDecrement",
});

export const counterResetNumber = () => ({
  type: "counter/resetNumber",
});

// Karena ini ada menerima parameter payload
// Maka fungsinya ini juga harus menerima parameter
export const todosSetTodos = (payload) => ({
  type: "todos/setTodos",
  // shorthand karena nama props dan value yang digunakan sama
  payload,
});
