import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function clickCounter() {
    return setCounter(counter + 1);
  }

  return (
    <div className="app" ontouchstart="">
      <div class="button" onClick={clickCounter}>
        <p>Click Me!</p>
      </div>
      <div className="counter-text">
        {counter === 69 || counter === 420 ? <p>clicks: {counter} hehe</p> : <p>clicks: {counter}</p>}
      </div>
    </div>
  );
}

export default App;
