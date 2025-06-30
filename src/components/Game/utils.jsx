 
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Рядки (горизонтальні лінії)
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Стовпці (вертикальні лінії)
  [0, 4, 8],
  [2, 4, 6], // Діагоналі
];
 
export function checkWinner(gameBoard) {
  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      return {
        winner: gameBoard[a],
        combination,
      };
    }
  }
  return null;
}
 
export function checkDraw(gameBoard) {
  return gameBoard.every((cell) => cell !== null);
}
 
 