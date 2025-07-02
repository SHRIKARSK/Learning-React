import { useCallback, useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(4);
  const [numIncluded, setNumIncluded] = useState(true);
  const [speIncluded, setSpeIncluded] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const handleSlider = (e) => {
    setLength(Number(e.target.value));
  };

  const handleCheck = (e) => {
    if (e.target.name == "spe_included") setSpeIncluded((prev) => !prev);
    if (e.target.name == "num_included") setNumIncluded((prev) => !prev);
  };

  const handleClick = (e) => {
    if (e.target.innerHTML == "-" && length > 5) setLength(length - 1);
    if (e.target.innerHTML == "+" && length < 30) setLength(length + 1);
  };

  const copyPasswordToClip = () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(temp)
    
  }

  const generateRandom = useCallback(() => {
    let res = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const specialChars = "`!@#$%^&*()_+[]{};':,.<>/?";
    if (speIncluded) str += specialChars;
    if (numIncluded) str += num;

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * str.length + 1);
      res += str.charAt(index);
    }

    setPassword(res);
  }, [length, numIncluded, speIncluded, setPassword]);

  useEffect(() => {
    generateRandom();
  }, [length, numIncluded, speIncluded, setPassword]);
  return (
    <>
      <div className="m-10 flex justify-center">
        <div className="flex flex-col justify-center w-200 bg-amber-100 rounded-md">
          <div className="flex justify-center mt-5 ">
            <h1 className="flex justify-center top-30 text-xl text-gray-700 font-sans font-bold">
              Password Generator
            </h1>
            <br />
          </div>
          <div className="mt-3 flex justify-center">
            <input
              value={password}
              ref={passwordRef}
              className="bg-white border-none rounded-l-md w-100"
              type="text"
            />
            <button
            onClick={copyPasswordToClip}
            className="bg-cyan-300 p-2 rounded-r-md">Copy</button>
          </div>
          <div className="flex justify-between">
            <div className="p-5">
              <button
                onClick={handleClick}
                className="px-2 rounded-full bg-amber-800 text-white"
              >
                -
              </button>
              <input
                onChange={handleSlider}
                type="range"
                min={5}
                max={30}
                label={length}
              />
              <button
                onClick={handleClick}
                className="px-2 rounded-full bg-amber-800 text-white"
              >
                +
              </button>
              <label className="px-3">Length : {length} | </label>

              <input
                onClick={handleCheck}
                type="checkbox"
                defaultChecked={numIncluded}
                name="num_included"
              />
              <label className="px-3" htmlFor="num_included">
                Number Included
              </label>

              <input
                onChange={handleCheck}
                type="checkbox"
                defaultChecked={speIncluded}
                name="spe_included"
              />
              <label className="px-3" htmlFor="spe_included">
                Special Char Included
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
