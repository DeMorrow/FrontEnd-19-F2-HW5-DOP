import { useState } from "react";

function App() {
  let interval;
  function set() {
        let interval = setInterval(() =>{
          setRhyme(rhyme - 1)
        }, 1000)
  }
  const [time, setTime] = useState(0)
  const [rhyme, setRhyme] = useState(10)
  return (
    <div className="App">
      <h1 id="1">{time}</h1>
      <input type="text" placeholder={rhyme}/>
      <button onClick={() => {
        set();
        if (rhyme === 0) {
          setRhyme(0)
          clearInterval(interval)
        } 
      }}>START!!!</button>
      <button onClick={() => {
        setTime(time + 1)       
      }}>ULTRACLICK</button>
      <button onClick={() => {
        let one = document.getElementById("1")
        one.innerHTML = 0
        
      }}>RESET</button>
    </div>
  );
}

export default App;
