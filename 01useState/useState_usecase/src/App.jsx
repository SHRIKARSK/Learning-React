import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function increaseCnt () {
    if(count<20)
      setCount(count+1)
  }

  function decreaseCnt () {
    if(count>=1)
      setCount(count-1)
  }

  return (
    <>
      <h1>Learning React</h1>
      <p>Click below buttons to increase the count or decrease the same </p>

      <h4>Current Count </h4>
      <h2>{count}</h2>
      <button onClick={increaseCnt}>Increase</button>
      <br></br>
      <br></br>
      <button onClick={decreaseCnt}>Decrease</button>
    </>
  )
}

export default App
