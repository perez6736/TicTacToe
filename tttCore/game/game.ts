import { Board } from '../board/Board';
import { Player } from '../player/player';

export class Game {
  private currentTurn!: Player;
  private board!: Board;
  private player1!: Player;
  private player2!: Player;

  constructor() {}

  // game loop
  start() {
    // setup new board and new players
    this.board = new Board();
    this.player1 = new Player('X');
    this.player2 = new Player('O');
    this.currentTurn = this.player1;
    // ask current player to make a move
    // current player makes a move - update board state
    // check if he won or if game is over
    // player 2 makes a move
    // check if he won or if game is over
    // if player wins - end game and say playerx won!
    // if Tie - end game and say it is a tie
    // exit game loop
  }

  getCurrentTurn() {}

  isValidSpot() {}

  didWin() {}

  isGameOver() {}
}
