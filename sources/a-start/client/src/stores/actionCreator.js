import {
  COUNTER_INCREMENT_FIRSTNUMBER,
  COUNTER_DECREMENT_FIRSTNUMBER,
  COUNTER_INCREMENT_SECONDNUMBER,
  COUNTER_DECREMENT_SECONDNUMBER,
  COUNTER_RESET_NUMBER,
  TODO_SET_TODOS,
} from "./actionType";

// Kumpulan fungsi yang akan mengembalikan ACTION yang digunakan !
// Biasanya dipakai di dispatch !
export const actionCounterIncrementFirstNumber = () => {
  return {
    type: COUNTER_INCREMENT_FIRSTNUMBER,
  };
};

export const actionCounterDecrementFirstNumber = () => {
  return {
    type: COUNTER_DECREMENT_FIRSTNUMBER,
  };
};

export const actionCounterIncrementSecondNumber = () => {
  return {
    type: COUNTER_INCREMENT_SECONDNUMBER,
  };
};

export const actionCounterDecrementSecondNumber = () => {
  return {
    type: COUNTER_DECREMENT_SECONDNUMBER,
  };
};

export const actionCounterResetNumber = () => {
  return {
    type: COUNTER_RESET_NUMBER,
  };
};

export const actionTodoSetTodos = (payload) => {
  return {
    // Nanti ambil dari actionType
    type: TODO_SET_TODOS,
    payload,
  };
};
