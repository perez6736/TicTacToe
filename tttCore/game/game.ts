import { Board } from '../board/board';
import { Player } from '../player/player';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { GameState } from './gameState';

const rl = readline.createInterface({ input, output });

export class Game {
  private currentTurn!: Player;
  private board!: Board;
  private player1!: Player;
  private player2!: Player;
  private gameState: GameState = GameState.NotStarted;
  private turnNumber: number = 0;

  constructor() {}

  // game loop
  async start() {
    // setup new board and new players
    this.board = new Board();
    this.player1 = new Player('X');
    this.player2 = new Player('O');
    this.currentTurn = this.player1;
    this.gameState = GameState.Playing;

    // we will keep looping turns untill game is over.
    while (this.gameState === GameState.Playing) {
      this.turnNumber++;
      console.log('Turn number - ' + this.turnNumber);
      await this.doAturn();
      console.log(this.board.getBoard());
    }

    console.log('game over');
    rl.close();
  }

  // this function will perform all steps to execute a single turn in tictactoe
  async doAturn() {
    while (true) {
      // this moves to new class for humanMoveStragety
      // ask current player to make a move
      const answer = await rl.question('Enter a move (1-9): ');
      // current player makes a move - update board state
      const inputMove = Number(answer);
      const move = inputMove - 1;

      if (!this.board.isValidSpot(move)) {
        console.log('nor a valid move');
        continue;
      }

      this.board.placeMove(move, this.currentTurn);
      break;
    }

    if (this.didWin()) {
      console.log(this.currentTurn.getPlayer() + ' has won');
      this.gameState = GameState.Won;
      return;
    }
    if (this.isGameOver()) {
      console.log('game is tie!');
      this.gameState = GameState.Draw;
      return;
    }

    this.currentTurn =
      this.currentTurn === this.player1 ? this.player2 : this.player1;
  }

  getCurrentTurn() {
    return this.currentTurn;
  }

  didWin(): boolean {
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

  isGameOver(): boolean {
    // are there any vlaid moves left on the board
    // loop through board array and if there is null - valid spot open - game not over
    for (let spot of this.board.getBoard()) {
      if (spot === null) {
        return false;
      }
    }
    return true;
  }
}
