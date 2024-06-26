import "./App.css";
import { Counter } from "./components/pages/Counter";
import { Controller } from "./components/pages/Controller";
import styled from "styled-components";

export function App() {
  return (
    <FlexWrapper>
      <Controller />
      <Counter />
    </FlexWrapper>
  );
}

const FlexWrapper = styled.section`
background: url("https://img.goodfon.com/original/1680x1050/b/6a/fallout-vault-boy-bethesda.jpg") no-repeat center / cover;
height: 100vh;
width: 100%;
display: flex;
align-items: center;
`


