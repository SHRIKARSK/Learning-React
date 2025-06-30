import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("bg-black");

  return (
    <>
      <div className={`w-full h-screen flex justify-center ${color}`}>
        <div className="fixed flex flex-wrap bottom-10 justify-center rounded-4xl m-10  bg-current inset-shadow-stone-200">
          <div className="flex px-4 py-1.5  justify-center gap-3 drop-shadow-2xl">
            <button
              onClick={() => setColor("bg-red-800 ")}
              className={`bg-red-800 outline-none rounded-3xl px-4 py-1 `}
            >
              Red
            </button>
            <button
              onClick={() => setColor("bg-green-950")}
              className={`bg-green-950 outline-none rounded-3xl px-4 py-1`}
            >
              Green
            </button>
            <button
              onClick={() => setColor("bg-pink-500")}
              className={`bg-pink-500 outline-none rounded-3xl px-4 py-1 `}
            >
              Pink
            </button>
            <button
              onClick={() => setColor("bg-amber-600")}
              className={`bg-amber-600 outline-none rounded-3xl px-4 py-1 `}
            >
              Orange
            </button>
            <button
              onClick={() => setColor("bg-purple-800")}
              className={`bg-purple-800 outline-none rounded-3xl px-4  `}
            >
              Purple
            </button>
            <button
              onClick={() => setColor("bg-cyan-950")}
              className={`bg-cyan-950 outline-none rounded-3xl px-4 py-1 `}
            >
              Cyan
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
