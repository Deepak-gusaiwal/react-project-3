import React, { useEffect, useState } from "react";
import { Container } from "../styledComp";
import Score from "./Score";
import NumberSelector from "./NumberSelector";
import { styled } from "styled-components";
import RollDice from "./RollDice";

const Game = () => {
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [totalScore, setTotalScore] = useState(0);
  const [hasRolled, setHasRolled] = useState(false);
  const [selectionErr,setSelectionErr] = useState(false)

  const RollingDice = (max, min) => {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;

    if(selectedNumber){
      setCurrentDice(num);
      setHasRolled(true);
      console.log('selectedNumber in RollDice',selectedNumber)
      updateScore();
      setSelectedNumber(undefined)
      setSelectionErr(false)
    }else{
      setSelectionErr(true)
    }
  };

  const resetScore = () => {
    alert("resetScore");
  };

  const updateScore = () => {
    if (hasRolled) {
      console.log('selected number in updateScore',selectedNumber)
      if (currentDice == selectedNumber) {
        setTotalScore(totalScore + currentDice);
      } else {
        setTotalScore(totalScore - 2);
      }
      setHasRolled(false);
    }
  };

  useEffect(() => {
    updateScore();
  }, [currentDice, hasRolled,selectedNumber]);


  return (
    <Container>
      <GameTopBox>
        <Score TotalScore={totalScore} />
        <NumberSelector
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
          selectionErr={selectionErr}
        />
      </GameTopBox>

      <RollDice
        RollingDice={RollingDice}
        resetScore={resetScore}
        currentDice={currentDice}
      />
    </Container>
  );
};
const GameTopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  flex-wrap: wrap;
`;

export default Game;
