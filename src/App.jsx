import { useState } from 'react'
import './App.css'
import { Btn, Close } from './components/button';
import { Expectancy } from './components/head';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div id="container">
      <Expectancy />
      <Close id="question1" iconX="_.png" question="question2"/>
      <p id="fissh">fissh</p>
      <img src='doesfishpng.png' alt='entity' id="fishy" ></img>
      <Btn label="ok" />

      <Btn label="ok" />

      <Btn label="dont" />

    </div>
  );
}

export default App
