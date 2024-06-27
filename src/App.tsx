import "./App.css";
import { Counter } from "./components/pages/counter/Counter";
import { Controller } from "./components/pages/controller/Controller";
import styled from "styled-components";
import { useState } from "react";

export function App() {
  //Counter data
  let [counter, setCounter] = useState(0);
  let [buttonIncr, setButtonIncr] = useState(false);
  let [buttonReset, setButtonReset] = useState(true);

  //Controller data
  let [startValue, setStartValue] = useState("0");
  let [maxValue, setMaxValue] = useState("5");
  let [buttonSet, setButtonSet] = useState(true);

  //Counter functions
  const increment = () => {
    if (counter < +maxValue) {
      setCounter((counter += 1));
    }
    if (counter > 0) {
      setButtonReset(false);
    }
    if (counter === +maxValue) {
      setButtonIncr(true);
    }
  };

  const reset = () => {
    setCounter(+startValue);
    setButtonIncr(false);
    setButtonReset(true);
  };

  //Controller functions
  const startValueCounter = (value: string) => {
    setStartValue(value);
    setButtonSet(false);
  
  };

  const maxValueCounter = (value: string) => {
    setMaxValue(value);
    setButtonSet(false);
  };

  const counterValue = () => {
    setCounter(+startValue);
    
  }

  return (
    <FlexWrapper>
      <Controller
        maxValueCounter={maxValueCounter}
        maxValue={maxValue}
        startValueCounter={startValueCounter}
        startValue={startValue}
        buttonSet={buttonSet}
        counterValue={counterValue}
      />
      <Counter
        counter={counter}
        increment={increment}
        buttonIncr={buttonIncr}
        reset={reset}
        buttonReset={buttonReset}
        maxValue={maxValue}
      />
    </FlexWrapper>
  );
}

const FlexWrapper = styled.section`
  background: url("https://kalix.club/uploads/posts/2022-12/1671560426_kalix-club-p-follaut-oboi-pinterest-1.jpg")
    no-repeat center / cover;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
`;
