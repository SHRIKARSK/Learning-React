import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  const obj = {
    name: 'Shrikar',
    project1: "Calculator",
    project2: 'Portfolio'
  }
  const obj1 = {
    name: 'Omkar',
    project1: "F1",
    project2: 'Valorant'
  }

  const arrobj = [
    obj,obj1
  ]

  return (
    <>
      {arrobj.map((item) => {
        return <Card mobj={item}/>
})}
    </>
  );
}

export default App;
