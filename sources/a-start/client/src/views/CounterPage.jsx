import { useState } from "react";

const CounterPage = () => {
  const [counter, setCounter] = useState(0);

  const counterIncrement = () => {
    setCounter(counter + 1);
  };

  const counterDecrement = () => {
    setCounter(counter - 1);
  };

  const counterReset = () => {
    setCounter(0);
  };

  return (
    <section class="flex flex-col gap-4 rounded bg-gray-100 p-4">
      <p className="text-2xl font-bold">CounterPage</p>

      <p className="text-xl">
        Nilai counter sekarang adalah{" "}
        <span className="font-semibold">{counter}</span>
      </p>

      <section className="flex flex-row gap-4">
        <button
          className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
          onClick={counterIncrement}
        >
          +
        </button>
        <button
          className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
          onClick={counterReset}
        >
          RESET
        </button>
        <button
          className="rounded bg-sky-200 py-2 px-4 hover:bg-sky-400 hover:text-white"
          onClick={counterDecrement}
        >
          -
        </button>
      </section>
    </section>
  );
};

export default CounterPage;
