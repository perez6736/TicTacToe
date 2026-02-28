type Cell = string | null;
type aBoard = Cell[];
import { Player } from '../player/player';

export class Board {
  private board;

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
    //update cell with move
    throw new Error('Method not implemented.');
  }

  isValidSpot(move: number): boolean {
    //if cell is not null its not valid.
    return this.getCell(move) != null;
  }

  printBoard() {
    console.log(this.board);
  }
}
