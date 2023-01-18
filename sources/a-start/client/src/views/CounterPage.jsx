// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { COUNTER_INCREMENT_FIRSTNUMBER } from "../stores/actionType";
import {
  actionCounterDecrementFirstNumber,
  actionCounterDecrementSecondNumber,
  actionCounterIncrementFirstNumber,
  actionCounterIncrementSecondNumber,
  actionCounterResetNumber,
} from "../stores/actionCreator.js";

const CounterPage = () => {
  // useSelector adalah sebuah Hooks(fungsi)
  // dia menerima sebuah parameter adalah suatu "CALLBACK"
  // CALLBACK ini menerima sebuah parameter bernama "state"
  // dan akan RETURN suatu value dari state yang terpilih

  const {
    firstNumber: firstNumberFromRedux,
    secondNumber: secondNumberFromRedux,
  } = useSelector((state) => state.counter);

  // Hooks yang bernama useDispatch
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

    // dispatcher({
    //   type: COUNTER_INCREMENT_FIRSTNUMBER,
    // });

    dispatcher(actionCounterIncrementFirstNumber());
  };

  const counterSecondNumberIncrement = () => {
    // setCounter({
    //   ...counter,
    //   secondNumber: counter.secondNumber + 1,
    // });

    // dispatcher({
    //   type: "counter/incrementSecondNumber",
    // });

    dispatcher(actionCounterIncrementSecondNumber());
  };

  const counterFirstNumberDecrement = () => {
    // setCounter({
    //   ...counter,
    //   firstNumber: counter.firstNumber - 1,
    // });

    // dispatcher({
    //   type: "counter/decrementFirstNumber",
    // });

    dispatcher(actionCounterDecrementFirstNumber());
  };

  const counterSecondNumberDecrement = () => {
    // setCounter({
    //   ...counter,
    //   secondNumber: counter.secondNumber - 1,
    // });

    // dispatcher({
    //   type: "counter/decrementSecondNumber",
    // });

    dispatcher(actionCounterDecrementSecondNumber());
  };

  const counterReset = () => {
    // setCounter({
    //   firstNumber: 0,
    //   secondNumber: 0,
    // });

    // dispatcher({
    //   type: "counter/resetNumber",
    // });

    dispatcher(actionCounterResetNumber());
  };

  return (
    <section class="flex flex-col gap-4 rounded bg-gray-100 p-4">
      <p className="text-2xl font-bold">Counter Page</p>

      <p className="text-xl">
        Nilai <i>firstNumber</i> sekarang adalah{" "}
        {/* <span className="font-semibold">{counter.firstNumber}</span> */}
        <span className="font-semibold">{firstNumberFromRedux}</span>
      </p>

      <p className="text-xl">
        Nilai <i>secondNumber</i> sekarang adalah{" "}
        {/* <span className="font-semibold">{counter.secondNumber}</span> */}
        <span className="font-semibold">{secondNumberFromRedux}</span>
      </p>

      <section className="flex flex-row gap-4">
        <button
          className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
          onClick={counterFirstNumberIncrement}
        >
          + (First)
        </button>
        <button
          className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
          onClick={counterSecondNumberIncrement}
        >
          + (Second)
        </button>

        <button
          className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
          onClick={counterReset}
        >
          RESET
        </button>
        <button
          className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
          onClick={counterFirstNumberDecrement}
        >
          - (First)
        </button>
        <button
          className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
          onClick={counterSecondNumberDecrement}
        >
          - (Second)
        </button>
      </section>
    </section>
  );
};

export default CounterPage;
