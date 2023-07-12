import {
  COUNTER_FIRSTNUMBER_DECREMENT,
  COUNTER_FIRSTNUMBER_INCREMENT,
} from "../actions/actionType";

const initialState = {
  firstNumber: 10,
  secondNumber: 15,
};

// Reducer:
// - parameter pertama = state
// - parameter kedua = action
//    > umumnya action adalah sebuah object
//    > dengan 2 property:
//      - type -> tipe action yang akan dilakukan
//      - payload  -> data yang dibawa untuk melakukan action
const counterReducer = (state = initialState, action) => {
  // Ingat ini harus pure function !
  // di sini akan mencoba untuk menggunakan switch case

  // Apa yang di switch case? type actionnya
  switch (action.type) {
    // Setiap case akan mengembalikan sebuah state yang baru
    // > Ingat state sifatnya immutable, jadi kalau ingin mengganti
    // > TIDAK BOLEH assign value (=), tapi harus buat state yang baru
    // case "counter/firstNumberIncrement":

    // new case setelah actionType dibuat
    case COUNTER_FIRSTNUMBER_INCREMENT:
      return {
        ...state,
        firstNumber: state.firstNumber + 1,
      };

    case COUNTER_FIRSTNUMBER_DECREMENT:
      return {
        ...state,
        firstNumber: state.firstNumber - 1,
      };

    case "counter/secondNumberIncrement":
      return {
        ...state,
        secondNumber: state.secondNumber + 1,
      };

    case "counter/secondNumberDecrement":
      return {
        ...state,
        secondNumber: state.secondNumber - 1,
      };

    case "counter/resetNumber":
      return {
        firstNumber: 0,
        secondNumber: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;
