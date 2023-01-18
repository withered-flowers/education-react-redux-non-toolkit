import {
  COUNTER_INCREMENT_FIRSTNUMBER,
  COUNTER_INCREMENT_SECONDNUMBER,
  COUNTER_DECREMENT_FIRSTNUMBER,
  COUNTER_DECREMENT_SECONDNUMBER,
  COUNTER_RESET_NUMBER,
} from "../actionType";

// Initial State
const stateYangAwal = {
  firstNumber: 20,
  secondNumber: 50,
};

// Reducer
const counterReducer = (state = stateYangAwal, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT_FIRSTNUMBER:
      return {
        ...state,
        firstNumber: state.firstNumber + 1,
      };
    case COUNTER_INCREMENT_SECONDNUMBER:
      return {
        ...state,
        secondNumber: state.secondNumber + 1,
      };
    case COUNTER_DECREMENT_FIRSTNUMBER:
      return {
        ...state,
        firstNumber: state.firstNumber - 1,
      };
    case COUNTER_DECREMENT_SECONDNUMBER:
      return {
        ...state,
        secondNumber: state.secondNumber - 1,
      };
    case COUNTER_RESET_NUMBER:
      return {
        firstNumber: 20,
        secondNumber: 50,
      };
    default:
      return state;
  }
};

export default counterReducer;
