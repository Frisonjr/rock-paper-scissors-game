import React, { useState } from "react";
require("./Game.scss");

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
      <div className="game-container">
        <h2>Rock Paper Scissors</h2>
        <div className="choices-container">
          <button className="choice" onClick={() => playGame("rock")}>
            <img
              src="/images/rock.png"
              alt="Rock"
              style={{
                width: "300px",
                height: "300px",
                backgroundSize: "cover",
              }}
            />
          </button>
          <button className="choice" onClick={() => playGame("paper")}>
            <img
              src="/images/paper.png"
              alt="Paper"
              style={{
                width: "300px",
                height: "300px",
                backgroundSize: "cover",
              }}
            />
          </button>
          <button className="choice" onClick={() => playGame("scissors")}>
            <img
              src="/images/scissor.webp"
              alt="Scissors"
              style={{
                width: "300px",
                height: "300px",
                backgroundSize: "cover",
              }}
            />
          </button>
        </div>
      </div>
      <div className="score-container">
        <p>Your choice: {playerChoice}</p>
        <p>Computer's choice: {computerChoice}</p>
        <p>{result}</p>
        <div className="score">
          <p>Player Score: {playerScore}</p>
          <p>Computer Score: {computerScore}</p>
        </div>
      </div>
    </div>
  );
};

export default Game;
