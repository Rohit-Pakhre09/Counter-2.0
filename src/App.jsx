import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const checkPrimeNum = (num) => {
    let divisible = 0;

    if(num == 0)  return false;
    for (let i = 1; i <= num; i++) { 
      if (num % i === 0) {
        divisible++;
      }
    }

    return divisor === 2 ? true : false;
  };

  return (
    <main className="min-h-screen bg-gray-200 flex items-center justify-center p-5">
      <section className="w-100 sm:w-120 h-auto p-5 rounded-xl shadoow-md bg-white">
        <header>
          <p className="font-bold text-center text-2xl uppercase">
            Counter App
          </p>
          <hr className="mt-3 opacity-10" />
        </header>

        <section className="flex gap-5 justify-center items-center p-3">
          <button
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
            className="bg-blue-500 w-10 text-2xl p-2 rounded-md text-white font-medium cursor-pointer shadow-md hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            -
          </button>
          <span className="text-3xl font-bold w-15 text-center">{count}</span>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-blue-500 w-10 text-2xl p-2 rounded-md text-white font-medium cursor-pointer shadow-md hover:bg-blue-700"
          >
            +
          </button>
        </section>

        <section className="flex justify-center items-center mb-5">
          <button
            onClick={() => setCount(0)}
            className="bg-red-500 text-1xl w-30 p-2 rounded-md text-white font-medium cursor-pointer shadow-md hover:bg-red-700"
          >
            Reset
          </button>
        </section>

        <p className="text-gray-700 italic font-medium text-center">
          Is counter is even or odd:
          {count % 2 === 0 ? (
            <span className="text-emerald-500">Even</span>
          ) : (
            <span className="text-red-500">Odd</span>
          )}
        </p>
        <p className="text-gray-700 italic font-medium text-center">
          Is counter is prime or not prime:
          {checkPrimeNum(count) ? <span className="text-yellow-400">Prime</span> : <span className="text-yellow-600">Not Prime</span> }
        </p>
      </section>
    </main>
  );
}

export default App;
