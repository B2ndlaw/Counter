import { styled } from "styled-components";

type ButtonType = {
  name: string;
  callBack: () => void;
  buttonDisabled: boolean;
};

export function Button(props: ButtonType) {
  const onClickHandler = () => props.callBack();

  return (
    <ButtonStyles onClick={onClickHandler} disabled={props.buttonDisabled}>
      {props.name}
    </ButtonStyles>
  );
}

const ButtonStyles = styled.button`
  padding: 0;
  width: 90px;
  height: 40px;
  background-color: green;
  border-radius: 5px;

  font-family: "Courier New", Courier, monospace;
  font-size: 25px;
  font-weight: 800;
  color: black;
  cursor: pointer;
  border: 2px solid black;

  &:nth-child(2) {
    background-color: #be0505;
  }

  &:disabled {
    opacity: 0.5;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
