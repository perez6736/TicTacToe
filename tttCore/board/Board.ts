type Cell = playerMark | null;
type aBoard = Cell[];
import { Player, playerMark } from '../player/player';

export class Board {
  private board: aBoard;

  constructor() {
    this.board = Array.from({ length: 9 }, () => null);
  }

  getBoard(): aBoard {
    return this.board;
  }

  getCell(cell: number): Cell | undefined {
    return this.board[cell]!;
  }

  placeMove(move: number, player: Player) {
    this.board[move] = player.getPlayer();
  }

  isValidSpot(move: number): boolean {
    //if cell is not null its not valid.
    return this.getCell(move) === null;
  }

  printBoard() {
    console.log(this.board);
  }

  getValidMoves(): number[] {
    return this.board
      .map((cell, i) => {
        if (cell === null) {
          return i;
        } else {
          return -1;
        }
      })
      .filter((i) => i !== -1);
  }
}
