import React, { useState } from "react";
import { styled } from "styled-components";

const NumberSelector = ({selectedNumber,setSelectedNumber,selectionErr}) => {
  const Numbers = [...Array(6).keys()];
  
  return (
    <Wrapper>
      {
        selectionErr ?
        <p>your have not selected any number</p>
        :
        ""
      }
      <NumberBoxesContainer>
        {Numbers.map((item, index) => (
          <NumberBox
            isActive={selectedNumber === index+1}
            onClick={() => {
              setSelectedNumber(index + 1);
            }}
            key={index * Math.random()}
          >
            {index + 1}
          </NumberBox>
        ))}
      </NumberBoxesContainer>
      <h3>Select Number</h3>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    text-align: right;
    margin-top: 0.6rem;
  }
  max-width: 400px;
  width: 100%;

  p{
    color: red;
    margin-bottom: 0.5rem;
    text-align: right;
    text-transform: capitalize;
  }
`;
const NumberBoxesContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
const NumberBox = styled.div`
  display: flex;
  flex: 1;
  aspect-ratio: 1/1;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: 700;
  border: 1px solid black;
  background-color: ${({isActive})=>(isActive ? "black":"white")};
  color: ${({isActive})=>(isActive ? "white":"black")};
`;
export default NumberSelector;
