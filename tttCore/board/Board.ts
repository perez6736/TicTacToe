type Cell = string | null;
type Cells = Cell[][];

export class Board {
  private cells;

  constructor() {
    this.cells = Array.from({ length: 3 }, () =>
      Array.from({ length: 3 }, () => null),
    );
  }

  getCell(row: number, col: number): Cell | undefined {
    return this.cells[row]![col]!;
  }
}
