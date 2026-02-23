import { Board } from '../board/Board';
import { Player } from '../player/player';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

export class Game {
  private currentTurn!: Player;
  private board!: Board;
  private player1!: Player;
  private player2!: Player;

  constructor() {}

  // game loop
  async start() {
    // setup new board and new players
    this.board = new Board();
    this.player1 = new Player('X');
    this.player2 = new Player('O');
    this.currentTurn = this.player1;

    // this moves to new class for humanMoveStragety
    // ask current player to make a move
    const answer = await rl.question('Enter a move (0-8): ');
    // current player makes a move - update board state
    const move = Number(answer);

    if (this.board.isValidSpot(move)) {
      this.board.placeMove(move, this.currentTurn);
    }
    // check if player won or if game is over
    if (this.didWin()) {
      return;
    }

    this.currentTurn =
      this.currentTurn === this.player1 ? this.player2 : this.player1;

    // player 2 makes a move
    // this moves to new class for humanMoveStragety
    // ask current player to make a move
    const answer2 = await rl.question('Enter a move (0-8): ');
    // current player makes a move - update board state
    const move2 = Number(answer);

    if (this.board.isValidSpot(move)) {
      this.board.placeMove(move, this.currentTurn);
    }
    // check if player won or if game is over
    if (this.didWin()) {
      return;
    }

    this.currentTurn =
      this.currentTurn === this.player1 ? this.player2 : this.player1;

    //ToDo : -----
    // check if player won or if game is over
    // if player wins - end game and say playerx won!
    // if Tie - end game and say it is a tie
    // exit game loop
  }

  getCurrentTurn() {}

  didWin(): boolean {
    //define win patterns for 3x3 - this wont scale to larger boards
    const winningPositions = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7],
    ];
    // loop through winningpositions and check to see if Board.cell[winningPositions[i][j]] all have same character.
    for (const pattern of winningPositions) {
      const firstCell = this.board.getCell(pattern[0]!);
      if (!firstCell) continue; //if the first cell we check is empty move to next patter.
      // if every index in pattern is same there is a win.
      const allMatch = pattern.every(
        (index) => this.board.getCell(index) === firstCell,
      );
      if (allMatch) return true;
    }
    return false;
  }

  isGameOver() {
    // are there any vlaid moves left on the board
    // loop through board array and if none are null game is over
  }
}
