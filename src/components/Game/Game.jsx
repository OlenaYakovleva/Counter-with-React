import { useState } from "react";
import { GameTitle } from "./GameTitle";
import { GameTurn } from "./GameTurn";
import styles from "./Game.module.css";

import { checkDraw, checkWinner } from "./utils";

export function Game() {
  console.log("render Game component");
  const title = "Гра христики-нулики";

  const [gameBoard, setGameBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState("X");

  const winner = checkWinner(gameBoard);
  const draw = checkDraw(gameBoard);

  const handlerClickCell = (index) => {
    if (gameBoard[index] || winner || draw) return;

    const newGameBoard = [...gameBoard];
    newGameBoard[index] = currentPlayer;
    setGameBoard(newGameBoard);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setCurrentPlayer("X");
    setGameBoard(Array(9).fill(null));
  };

  console.log(styles);

  return (
    <div className={styles.game}>
      <GameTitle title={title} />
      <GameTurn>
        {winner
          ? `Виграш гравця ${winner.winner}`
          : draw
          ? "Нічья!"
          : `Хід гравця ${currentPlayer}`}
      </GameTurn>
      <div className={styles.board}>
        {gameBoard.map((cell, index) => {
          return (
            <div
              key={index}
              className={`${styles.cell} ${
                cell === "X" ? `${styles["x-mark"]}` : `${styles["o-mark"]}`
              } ${
                winner?.combination.includes(index) ? `${styles.winner}` : ""
              }`}
              onClick={() => handlerClickCell(index)}
            >
              {cell}
            </div>
          );
        })}
      </div>
      <button className={styles.reset} onClick={resetGame}>
        Скинути гру
      </button>
    </div>
  );
}
