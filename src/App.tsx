import "./App.css";
import { Counter } from "./components/pages/counter/Counter";
import { Controller } from "./components/pages/controller/Controller";
import styled from "styled-components";
import { useState } from "react";
import { log } from "console";

export function App() {
  //Counter data
  let [counter, setCounter] = useState(0);
  let [buttonIncr, setButtonIncr] = useState(false);
  let [buttonReset, setButtonReset] = useState(true);

  //Controller data
  let [startValue, setStartValue] = useState("0");
  let [maxValue, setMaxValue] = useState("5");
  let [buttonDisabled, setButtonDisabled] = useState(true);

  //Error
  let [error, setError] = useState<string | null>(null);

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

  //Error

  const checkError = (value: string) => {
    if (
      +value < 0 ||
      +startValue < 0 ||
      +maxValue < 0 ||
      +startValue >= +maxValue
    ) {
      setError("Incorrect value!");
    } else {
      setError("Enter values and press 'Set'");
    }
    console.log(error, value, startValue, maxValue);
  };

  //Controller functions
  const changeStartValue = (value: string) => {
    checkError(value);

    if (error === "Incorrect value!") {
      setStartValue(value);
      setButtonDisabled(true);
    } else {
      setStartValue(value);
      setButtonDisabled(false);
    }
  };

  const changeMaxValue = (value: string) => {
    checkError(value);

    if (error === "Incorrect value!") {
      setMaxValue(value);
      setButtonDisabled(true);
    } else {
      setMaxValue(value);
      setButtonDisabled(false);
    }
  };

  const changeCounterValue = () => {
    setCounter(+startValue);
    setError(null);
  };

  return (
    <FlexWrapper>
      <Controller
        changeMaxValue={changeMaxValue}
        maxValue={maxValue}
        changeStartValue={changeStartValue}
        startValue={startValue}
        buttonDisabled={buttonDisabled}
        changeCounterValue={changeCounterValue}
        error={error}
      />
      <Counter
        counter={counter}
        increment={increment}
        buttonIncr={buttonIncr}
        reset={reset}
        buttonReset={buttonReset}
        maxValue={maxValue}
        error={error}
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
