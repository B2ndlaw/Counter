import "./App.css";
import { Counter } from "./components/pages/counter/Counter";
import { Controller } from "./components/pages/controller/Controller";
import styled from "styled-components";
import { useEffect, useState } from "react";

export function App() {
  //Counter data
  let [counter, setCounter] = useState(0);
  let [buttonIncr, setButtonIncr] = useState(false);
  let [buttonReset, setButtonReset] = useState(true);

  //Controller data
  let [startValue, setStartValue] = useState("0");
  let [maxValue, setMaxValue] = useState("5");

  //useEffect counter
  useEffect(() => {
    let valueAsString = localStorage.getItem("counterValue");
    if (valueAsString) {
      let newValue = JSON.parse(valueAsString);
      setCounter(newValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("counterValue", JSON.stringify(counter));
  }, [counter]);

  //useEffect startValue

  useEffect(() => {
    let startValueAsString = localStorage.getItem("startValue");
    if (startValueAsString) {
      let newStartValue = JSON.parse(startValueAsString);
      setStartValue(newStartValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("startValue", JSON.stringify(startValue));
  }, [startValue]);

  //useEffect maxValue
  useEffect(() => {
    let maxValueAsString = localStorage.getItem("maxValue");
    if (maxValueAsString) {
      let newMaxValue = JSON.parse(maxValueAsString);
      setMaxValue(newMaxValue);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("maxValue", JSON.stringify(maxValue));
  }, [maxValue]);

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

  //Controller functions
  const changeStartValue = (value: string) => {
    setStartValue(value);

    if (+value < 0 || +value >= +maxValue) {
      setError("Incorrect value!");
    } else {
      setError("Enter values and press 'Set'");
    }
    console.log(error);
  };

  const changeMaxValue = (value: string) => {
    setMaxValue(value);

    if (+startValue < 0 || +startValue >= +value) {
      setError("Incorrect value!");
    } else {
      setError("Enter values and press 'Set'");
    }
  };

  const changeCounterValue = () => {
    setCounter(+startValue);
    setError(null);
  };
  const buttonDisabled = error === "Incorrect value!";

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
