import { styled } from "styled-components";

type CounterDisplayNumberType = {
  redColor: boolean
  errorText: boolean
}

const Frame = styled.div`

  width: 400px;
  height: 350px;
  margin: 20vh auto 0;
  border-radius: 15px;
  border: 3px solid green;
 

`;
const Display = styled.section`
  margin: 10px auto;
  border: 3px solid green;
  width: 93%;
  height: 60%;
  text-align: center;
  border-radius: 5px;
  align-content: center;
  background-color: #389942;
  background: url("https://c.wallhere.com/photos/16/83/Fallout_3_video_games_Pip_Boy_lines-140360.jpg!d")
    no-repeat center/ cover;
`;
const CounterDisplayNumber = styled.p<CounterDisplayNumberType>`

  font-family: "Courier New", Courier, monospace;
  font-size: ${props=>props.errorText ? "35px" : "55px"};
  font-weight: 800;
  color: rgb(115, 239, 115);
  color: ${props=>props.redColor ? "red" : "rgb(115, 239, 115)"};
  background-color: transparent;
`;

const ButtonsPanel = styled.section`

margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
border: 3px solid green;
  border-radius: 5px;
  background-color: transparent;
  height: 28%;
`;

export const S = {
  Frame,
 Display,
  CounterDisplayNumber,
  ButtonsPanel

}