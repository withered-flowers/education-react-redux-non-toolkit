// import { useState } from "react";

// Supaya bisa memilih apa yang ada di dalam state redux
// Kita akan menggunakan sebuah hooks, namanya: useSelector
import { useSelector } from "react-redux";

// Supaya bisa mengubah state yang ada di dalam state redux
// Kita akan menggunakan sebuah hooks, namanya: useDispatch
import { useDispatch } from "react-redux";

import {
  counterFirstNumberIncrement as actionFirstNumberIncrement,
  counterSecondNumberIncrement as actionSecondNumberIncrement,
  counterFirstNumberDecrement as actionFirstNumberDecrement,
  counterSecondNumberDecrement as actionSecondNumberDecrement,
  counterResetNumber as actionResetNumber,
} from "../stores/actions/actionCreator";

const CounterPage = () => {
  // Kita akan memilih (select) state dengan menggunakan useSelector
  // useSelector menerima SEBUAH FUNGSI yang digunakan untuk memilih state
  const { counter: counterFromRedux } = useSelector((state) => state);

  // Kita akan menggunakan dispatch (penjalan action) dalam redux via useDispatch
  // menerima sebuah fungsi yang bisa kita invoke
  const dispatcher = useDispatch();

  // const [counter, setCounter] = useState({
  //   firstNumber: 0,
  //   secondNumber: 0,
  // });

  const counterFirstNumberIncrement = () => {
    // setCounter({
    //   ...counter,
    //   firstNumber: counter.firstNumber + 1,
    // });

    // dispatcher akan menerima sebuah parameter: action
    // INGAT: action adalah sebuah object, yang menerima 2 props -> type dan payload
    // dispatcher({
    //   type: "counter/firstNumberIncrement",
    // });

    // Dispatcher after actionCreator
    dispatcher(actionFirstNumberIncrement());
  };

  const counterSecondNumberIncrement = () => {
    // setCounter({
    //   ...counter,
    //   secondNumber: counter.secondNumber + 1,
    // });

    // dispatcher({
    //   type: "counter/secondNumberIncrement"
    // })

    // Dispatcher after actionCreator
    dispatcher(actionSecondNumberIncrement());
  };

  const counterFirstNumberDecrement = () => {
    // setCounter({
    //   ...counter,
    //   firstNumber: counter.firstNumber - 1,
    // });

    // dispatcher({
    //   type: "counter/firstNumberDecrement",
    // });

    dispatcher(actionFirstNumberDecrement());
  };

  const counterSecondNumberDecrement = () => {
    // setCounter({
    //   ...counter,
    //   secondNumber: counter.secondNumber - 1,
    // });

    // dispatcher({
    //   type: "counter/secondNumberDecrement",
    // });

    dispatcher(actionSecondNumberDecrement());
  };

  const counterReset = () => {
    // setCounter({
    //   firstNumber: 0,
    //   secondNumber: 0,
    // });

    // dispatcher({
    //   type: "counter/resetNumber",
    // });

    dispatcher(actionResetNumber());
  };

  return (
    <section className="flex flex-col gap-4 rounded bg-gray-100 p-4">
      <p className="text-2xl font-bold">Counter Page</p>

      <p className="text-xl">
        Nilai <i>firstNumber</i> sekarang adalah{" "}
        {/* <span className="font-semibold">{counter.firstNumber}</span> */}
        <span className="font-semibold">{counterFromRedux.firstNumber}</span>
      </p>

      <p className="text-xl">
        Nilai <i>secondNumber</i> sekarang adalah{" "}
        {/* <span className="font-semibold">{counter.secondNumber}</span> */}
        <span className="font-semibold">{counterFromRedux.secondNumber}</span>
      </p>

      <section className="flex flex-row gap-4">
        <button
          className="rounded bg-sky-200 px-4 py-2 hover:bg-sky-400 hover:text-white"
          onClick={counterFirstNumberIncrement}
        >
          + (First)
        </button>
        <button
          className="rounded bg-sky-200 px-4 py-2 hover:bg-sky-400 hover:text-white"
          onClick={counterSecondNumberIncrement}
        >
          + (Second)
        </button>

        <button
          className="rounded bg-sky-200 px-4 py-2 hover:bg-sky-400 hover:text-white"
          onClick={counterReset}
        >
          RESET
        </button>
        <button
          className="rounded bg-sky-200 px-4 py-2 hover:bg-sky-400 hover:text-white"
          onClick={counterFirstNumberDecrement}
        >
          - (First)
        </button>
        <button
          className="rounded bg-sky-200 px-4 py-2 hover:bg-sky-400 hover:text-white"
          onClick={counterSecondNumberDecrement}
        >
          - (Second)
        </button>
      </section>
    </section>
  );
};

export default CounterPage;
