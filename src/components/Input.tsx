import { ChangeEvent } from "react";
import { styled } from "styled-components";

type InputType = {
  callBack: (value: string) => void;
  type: string;
  value: string;
  error: string | null;
};

export function Input(props: InputType) {
  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    props.callBack(event.currentTarget.value);

  return (
    <InputStyles
      redColor={
        props.error === "Incorrect value!"
      }
      type={props.type}
      value={props.value}
      onChange={onChangeHandler}
    />
  );
}

type InputStyleType = {
  redColor: boolean
}

const InputStyles = styled.input<InputStyleType>`

  font-family: "Courier New", Courier, monospace;
  font-weight: 800;
  color: rgb(115, 239, 115);
  border: 1px solid green;
  border-radius: 5px;
  width: 80px;
  height: 20px;
  text-align: center;
  background-color: ${props=>props.redColor ? "red" : "green"};

  &:hover {
    background-color: ${props=>props.redColor ? "red" : "black"};
    color: rgb(115, 239, 115);
    border: 1px solid green;
  }
  &:focus {
    background-color: ${props=>props.redColor ? "red" : "black"};
    color: rgb(115, 239, 115);
    border: 1px solid green;
    outline: none;
  }
`;
