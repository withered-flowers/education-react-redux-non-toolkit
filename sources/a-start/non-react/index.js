// Write example code with redux here
const { legacy_createStore: createStore } = require("redux");

const initialState = {
  counter: 100,
};

// object
// - type => aksi apa yang akan dilakukan
// - payload => data apa yang diterima untuk aksi tersebut
const counterReducer = (state = initialState, action) => {
  // maka kita akan mengubah berdasarkan aksi yang diterima
  // pengkondisian berdasarkan tipe dari aksinya

  switch (action.type) {
    // counter/tipeAksinyaApa
    case "counter/incrementNumber":
      // Return suatu state yang baru !
      return {
        counter: state.counter + 1,
      };
    case "counter/incrementNumberByAmount":
      return {
        counter: state.counter + action.payload,
      };
    // KONDISI KETIKA TIPE TIDAK ADA APA APA
    default:
      return state;
  }
};

// store
const store = createStore(counterReducer);

// Pengen ngecek nih storenya sekarang isinya apa sih?
console.log(store.getState());

store.dispatch({
  type: "counter/incrementNumber",
});

console.log(store.getState());

store.dispatch({
  type: "counter/incrementNumberByAmount",
  payload: 50,
});

console.log(store.getState());
