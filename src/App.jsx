import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [history, setHistory] = useState([]);

  const handleIncrement = () => {
    setCount(count + step);
    setHistory([`Added ${step} - Total : ${count}`, ...history]);
  };

  const handleDecrement = () => {
    setCount(count - step);
    setHistory([`Subtracted ${step} - Total : ${count}`, ...history]);
  };

  const handleReset = () => {
    setCount(0);
    setStep(1);
    setHistory([`Reset to 0 - Total : ${count}`, ...history]);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 font-sans py-10 gap-8 px-4 text-white">
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_0_40px_rgba(79,70,229,0.15)] p-10 w-full max-w-md text-center transition-transform hover:scale-[1.02] duration-500">
        <div className="flex justify-center mb-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-wider uppercase text-indigo-300">
            Interactive Mode
          </div>
        </div>

        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-300 mb-8 tracking-tight drop-shadow-sm">
          Advanced Counter
        </h1>

        <div className="text-8xl md:text-9xl font-black mb-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 drop-shadow-lg font-mono tracking-tighter hover:scale-105 transition-transform duration-300">
          {count}
        </div>

        <div className="flex items-center justify-center gap-4 mb-10 bg-black/20 p-4 rounded-2xl border border-white/5">
          <label className="text-indigo-200/80 font-medium text-sm uppercase tracking-wide">
            Step Size
          </label>
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
            className="w-24 p-2 bg-white/5 border border-white/20 rounded-xl text-center text-xl font-bold text-white focus:border-indigo-400 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/30 transition-all"
          />
        </div>

        <div className="flex justify-center gap-4 mb-2">
          <button
            onClick={handleDecrement}
            className="flex-1 bg-gradient-to-br from-rose-500 to-pink-600 hover:from-rose-400 hover:to-pink-500 active:scale-95 text-white font-bold py-4 px-6 rounded-2xl text-2xl shadow-lg shadow-rose-500/25 transition-all duration-300"
          >
            -
          </button>
          <button
            onClick={handleReset}
            className="px-6 bg-white/10 hover:bg-white/20 active:scale-95 text-white/90 font-semibold py-4 rounded-2xl text-lg backdrop-blur-md border border-white/10 transition-all duration-300"
          >
            Reset
          </button>
          <button
            onClick={handleIncrement}
            className="flex-1 bg-gradient-to-br from-emerald-400 to-teal-500 hover:from-emerald-300 hover:to-teal-400 active:scale-95 text-white font-bold py-4 px-6 rounded-2xl text-2xl shadow-lg shadow-emerald-500/25 transition-all duration-300"
          >
            +
          </button>
        </div>
      </div>

      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl w-full max-w-md h-[32rem] flex flex-col relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5">
          <h2 className="text-lg font-semibold text-white/90 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-indigo-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            Activity Log
          </h2>
          <button
            onClick={clearHistory}
            className="text-xs font-bold uppercase tracking-wider text-rose-400 hover:text-rose-300 hover:bg-rose-400/10 px-3 py-1.5 rounded-lg transition-colors"
          >
            Clear
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
          {history.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center opacity-40">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mb-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-white text-center font-medium">
                No activity recorded
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {history.map((log, index) => (
                <li
                  key={index}
                  className="group bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 p-4 rounded-2xl text-white/80 text-sm font-medium transition-all duration-300 flex items-center justify-between"
                >
                  <span>{log}</span>
                  <span className="opacity-0 group-hover:opacity-100 text-xs text-indigo-300 transition-opacity">
                    Record
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
