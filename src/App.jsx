import React, { useState } from "react";
import Home from "./components/Home";
import "./App.css";
import Game from "./components/Game";
const App = () => {
  const [gameStarted, setGameStarted] = useState(false);
  return <>{gameStarted ? <Game startGame={setGameStarted} /> :  <Home startGame={setGameStarted} />}</>;
};

export default App;
