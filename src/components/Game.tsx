import React, { useState } from "react";

const Game: React.FC = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const choices = ["rock", "paper", "scissors"];

  const playGame = (choice: string) => {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);

    if (choice === computerChoice) {
      setResult("It's a tie!");
    } else if (
      (choice === "rock" && computerChoice === "scissors") ||
      (choice === "paper" && computerChoice === "rock") ||
      (choice === "scissors" && computerChoice === "paper")
    ) {
      setResult("You win!");
      setPlayerScore(playerScore + 1);
    } else {
      setResult("Computer wins!");
      setComputerScore(computerScore + 1);
    }
  };

  return (
    <div>
      <h2>Rock Paper Scissors</h2>
      <div>
        <button onClick={() => playGame("rock")}>Rock</button>
        <button onClick={() => playGame("paper")}>Paper</button>
        <button onClick={() => playGame("scissors")}>Scissors</button>
      </div>
      <p>Your choice: {playerChoice}</p>
      <p>Computer's choice: {computerChoice}</p>
      <p>{result}</p>
      <p>Player Score: {playerScore}</p>
      <p>Computer Score: {computerScore}</p>
    </div>
  );
};

export default Game;
