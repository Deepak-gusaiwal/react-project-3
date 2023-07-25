import React from "react";
import { styled } from "styled-components";
import { Button } from "../styledComp";

const RollDice = ({currentDice,RollingDice,resetScore}) => {
  return (
    <RollDiceBox>
      <img
        onClick={() => {
            RollingDice(6, 1);
        }}
        src={`/img/dice_${currentDice}.png`}
        alt="dice img"
      />
      
      <h4>Click On Dice To Roll</h4>
      <Button onClick={resetScore}>Reset Score</Button>
      <Button isFilled>Show Rules</Button>
    </RollDiceBox>
  );
};

const RollDiceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  img {
    width: max(12vw, 80px);
    cursor: pointer;
  }
`;

export default RollDice;
