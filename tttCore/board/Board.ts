type Cell = string | null;
type aBoard = Cell[];

export class Board {
  private board;

  constructor() {
    this.board = Array.from({ length: 9 }, () => null);
  }

  getBoard(): aBoard {
    return this.board;
  }

  getCell(row: number, col: number): Cell | undefined {
    return this.board[row]![col]!;
  }
}
