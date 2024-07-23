import { Button } from "../../Button";
import { S } from "../counter/CounterStyles";

type CounterType = {
  counter: number;
  increment: () => void;
  buttonIncr: boolean;
  reset: () => void;
  buttonReset: boolean;
  maxValue: string;
  error: string | null;
};

export function Counter(props: CounterType) {
  return (
    <S.Frame>
      <S.Display>
        <S.CounterDisplayNumber
          redColor={
            +props.maxValue === props.counter ||
            props.error === "Incorrect value!"
          }
          errorText={props.error !== null}
        >
          {props.error === null ? props.counter : props.error}
        </S.CounterDisplayNumber>
      </S.Display>
      <S.ButtonsPanel>
        <Button
          name={"inc"}
          callBack={props.increment}
          buttonDisabled={props.buttonIncr}
        />
        <Button
          name={"reset"}
          callBack={props.reset}
          buttonDisabled={props.buttonReset}
        />
        {/* <Button name={"set"} callBack={reset} buttonState={false} /> */}
      </S.ButtonsPanel>
    </S.Frame>
  );
}
