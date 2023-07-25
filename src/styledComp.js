import { styled } from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;
`;
export const Button = styled.button`
  padding: 10px 18px;
  color: ${({isFilled})=>isFilled ? "white":"black"};
  background-color: ${({isFilled})=>isFilled ? "black":"transparent"};
  border: none;
  max-width: 100%;
  width: 220px;
  cursor: pointer;
  border: 1px solid ${({isFilled})=>!isFilled ? "black":"transparent"};
  transition: 500ms background ease-in;
  font-weight: 600;

  &:hover{
    background-color: ${({isFilled})=>isFilled ? "transparent":"black"};
    border: 1px solid black;
    color: ${({isFilled})=>!isFilled ? "white":"black"};
    transition: 300ms background ease-in;
  }
`;