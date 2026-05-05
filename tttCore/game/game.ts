import { aBoard, Board } from '../board/board';
import { Player } from '../player/player';
import { gameMode, Menu } from '../menu/menu';
import { GameState } from './gameState';
import { didWin, isGameOver } from '../util/gameRules';

export class Game {
  private currentTurn!: Player;
  private board!: Board;
  private player1!: Player;
  private player2!: Player;
  private gameState: GameState = GameState.NotStarted;
  private turnNumber: number = 0;
  private gameMode: gameMode;

  constructor(mode: gameMode) {
    this.gameMode = mode;
    this.board = new Board();
    this.player1 = new Player('X', 'Human');
    this.gameMode === 'pvc'
      ? (this.player2 = new Player('O', 'Non-Human'))
      : (this.player2 = new Player('O', 'Human'));
    // setup new board and new players
    this.currentTurn = this.player1;
  }

  // game loop
  async start() {
    this.gameState = GameState.Playing;
    // we will keep looping turns untill game is over.
    while (this.gameState === GameState.Playing) {
      this.turnNumber++;
      console.log('Turn number - ' + this.turnNumber);

      await this.doAturn();
      console.log(this.board.getBoard());
    }

    console.log('game over');
  }

  // this function will perform all steps to execute a single turn in tictactoe
  async doAturn() {
    while (true) {
      const move = await this.currentTurn.move(
        Board.getValidMoves(this.board.getBoard()),
        this.board.getBoard(),
        this.getCurrentTurn().getPlayer(),
        this.getCurrentTurn().getPlayer() === 'X' ? 'O' : 'X',
      );

      if (!this.board.isValidSpot(move)) {
        console.log('not a valid move');
        continue;
      }

      this.board.placeMove(move, this.currentTurn);
      break;
    }

    if (didWin(this.board.getBoard(), this.currentTurn.getPlayer())) {
      console.log(this.currentTurn.getPlayer() + ' has won');
      this.gameState = GameState.Won;
      return;
    }
    if (isGameOver(this.board.getBoard())) {
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
}
