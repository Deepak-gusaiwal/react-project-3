import React from "react";
import { styled } from "styled-components";

const Score = ({ TotalScore }) => {
  console.log('Total Score in Score.jsx',TotalScore)
  return (
    <ScoreBox>
      <h1>{TotalScore}</h1>
      <span>total score</span>
    </ScoreBox>
  );
};
const ScoreBox = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  flex-direction: column;
  text-transform: capitalize;
  font-weight: bold;
  text-align: center;

  h1{
    font-size: max(3vw,2rem);
  }
`;
export default Score;
