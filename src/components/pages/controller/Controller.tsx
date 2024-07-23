import { useState } from "react";
import { S } from "../counter/CounterStyles";
import { S2 } from "../controller/ControllerStyles";
import { Button } from "../../Button";
import { Input } from "../../Input";

type ControllerType = {
  changeMaxValue: (value: string) => void;
  maxValue: string;
  changeStartValue: (value: string) => void;
  startValue: string;
  buttonDisabled: boolean;
  changeCounterValue: () => void;
  error: string | null;
};

export function Controller(props: ControllerType) {
  return (
    <S.Frame>
      <S2.DisplayController>
        <S2.Line>
          <S2.DisplayText>max value</S2.DisplayText>
          <Input
            callBack={props.changeMaxValue}
            type={"number"}
            value={props.maxValue}
            error={props.error}
          />
        </S2.Line>
        <S2.Line>
          <S2.DisplayText>start value</S2.DisplayText>
          <Input
            callBack={props.changeStartValue}
            type={"number"}
            value={props.startValue}
            error={props.error}
          />
        </S2.Line>
      </S2.DisplayController>
      <S.ButtonsPanel>
        <Button
          name={"set"}
          callBack={props.changeCounterValue}
          buttonDisabled={props.buttonDisabled}
        />
      </S.ButtonsPanel>
    </S.Frame>
  );
}
