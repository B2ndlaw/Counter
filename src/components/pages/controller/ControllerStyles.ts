import { styled } from "styled-components";


const DisplayController = styled.div`
  margin: 10px auto;
  border: 3px solid green;
  width: 93%;
  height: 60%;
  text-align: center;
  border-radius: 5px;
  align-content: center;
  background: url("https://c.wallhere.com/photos/16/83/Fallout_3_video_games_Pip_Boy_lines-140360.jpg!d")
  no-repeat center/ cover;
  /* background: url("https://gamefarm.ru/wp-content/uploads/2017/05/Vault-tec.jpg") no-repeat center / cover; */
  display: flex;
  flex-wrap: wrap;
`;

const Line = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 15px;
  background: transparent;
`;

const DisplayText = styled.h4`
    padding-left: 5px;
  text-align: left;
  font-size: 30px;
  font-weight: 800;
  font-family: 'Courier New', Courier, monospace;
  color: rgb(115, 239, 115);
  background-color: transparent;
`


export const S2 = {
  DisplayController,
  Line,
  DisplayText

}