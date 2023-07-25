import React from "react";
import { styled } from "styled-components";
import { Container, Button } from "../styledComp";

const Home = ({ startGame }) => {
  return (
    <Container>
      <HeroSection>
        <HeroImgBox>
          <img src="/img/dices.png" alt="dices.png" />
        </HeroImgBox>
        <HeroContentBox>
          <h1>DICE GAME</h1>
          <Button
            onClick={() => {
              startGame(true);
            }}
          >
            Play Now
          </Button>
        </HeroContentBox>
      </HeroSection>
    </Container>
  );
};

const HeroSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-top: max(5vw, 2rem);
`;
const HeroImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 250px;
`;
const HeroContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 250px;

  h1 {
    font-size: max(6vw, 2rem);
  }
`;

export default Home;
