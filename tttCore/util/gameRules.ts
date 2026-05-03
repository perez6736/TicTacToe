import { aBoard } from '../board/board';

export function didWin(boardstate: aBoard): boolean {
  //define win patterns for 3x3 - this wont scale to larger boards
  const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // loop through winningpositions and check to see if Board.cell[winningPositions[i][j]] all have same character.
  for (const pattern of winningPositions) {
    const firstCell = boardstate[pattern[0]!];
    if (!firstCell) continue; //if the first cell we check is empty move to next pattern.
    // if every index in pattern is same there is a win.
    const allMatch = pattern.every((index) => boardstate[index] === firstCell);
    if (allMatch) return true;
  }
  return false;
}

export function isGameOver(boardstate: aBoard): boolean {
  // are there any vlaid moves left on the board
  // loop through board array and if there is null - valid spot open - game not over
  for (let spot of boardstate) {
    if (spot === null) {
      return false;
    }
  }
  return true;
}
