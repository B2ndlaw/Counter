import { useState } from "react";

export function Counter() {
  let [counter, setCounter] = useState(0);
  let [buttonIncr, setButtonIncr] = useState(false);
  let [buttonReset, setButtonReset] = useState(true);

  const increment = () => {
    if (counter < 5) {
      setCounter((counter += 1));
    }
    if (counter > 0) {
      setButtonReset(false);
    }

    if (counter === 5) {
      setButtonIncr(true);
    }
  };

  const reset = () => {
    setCounter(0);
    setButtonIncr(false);
    setButtonReset(true);
  };

  return (
    <div className="App">
      <div className="frame">
        <div className="counter">
          <p id="p" className={counter < 5 ? "" : "color-red"}>
            {counter}
          </p>
        </div>
        <div className="buttonArea">
          <button onClick={increment} disabled={buttonIncr}>
            inc
          </button>
          <button onClick={reset} disabled={buttonReset}>
            reset
          </button>
        </div>
      </div>
    </div>
  );
}
