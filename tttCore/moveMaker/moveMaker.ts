import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { aBoard, Board } from '../board/board';
import { playerMark } from '../player/player';
import { didWin, isGameOver } from '../util/gameRules';

export class moveMaker {
  constructor() {}

  static async playerMove(): Promise<number> {
    const rl = readline.createInterface({ input, output });
    const answer = await rl.question('Enter a move (1-9): ');
    const inputMove = Number(answer);
    const move = inputMove - 1;
    rl.close();
    return move;
  }

  //needs list of valid moves
  static randomComputerMove(validmoves: number[]): number {
    const randomIndex = Math.floor(Math.random() * validmoves.length);
    const randomMove = validmoves[randomIndex]!;
    return randomMove;
  }

  //this will be a bit smarter than random.
  //will look at all moves to see if it can win and then place winning move
  //else it will look at all moves where oppenent can win and block them from winning
  //else it will place in middle if possible (since that is prob the stongest move)
  //else random move (already implmeneted.)
  static mediumComputermove(
    boardState: aBoard,
    aiMark: playerMark,
    oppMark: playerMark,
    validmoves: number[],
  ): number {
    let winningMove = moveMaker.findWinningMove(boardState, aiMark, validmoves);
    let oppenentWinning = moveMaker.findWinningMove(
      boardState,
      oppMark,
      validmoves,
    );
    if (winningMove !== -1) {
      return winningMove;
    } else if (oppenentWinning !== -1) {
      return oppenentWinning;
    } else if (validmoves.includes(4)) {
      return 4;
    } else {
      return moveMaker.randomComputerMove(validmoves);
    }
  }

  // find winning move
  // return a number or null(or return a negative number) - you either find a winning move or nothing
  static findWinningMove(
    boardState: aBoard,
    aMark: playerMark,
    validmoves: number[],
  ): number {
    for (const spot of validmoves) {
      const boardCopy = [...boardState];
      boardCopy[spot] = aMark;
      if (didWin(boardCopy)) {
        return spot;
      }
    }
    return -1;
  }

  // loop through each valid move and see if computer wins or player wins - assign score based on who wins
  // then loop through each valid move for the oppenent and do same thing
  // keep looping until someone wins
  static bestMove(
    boardState: aBoard,
    validmoves: number[],
    maxPlayer: playerMark,
    minPlayer: playerMark,
  ): number {
    let bestScore = -Infinity;
    let move;
    //loop through each valid move and do minimax
    for (let spot of validmoves) {
      const boardCopy = [...boardState];
      boardCopy[spot] = maxPlayer;
      let newValidMoves = Board.getValidMoves(boardCopy);
      let score = moveMaker.minimax(
        boardCopy,
        newValidMoves,
        maxPlayer,
        minPlayer,
        10,
        false,
      );
      if (score > bestScore) {
        bestScore = score;
        move = spot;
      }
    }
    return move;
  }

  static minimax(
    boardState: aBoard,
    validmoves: number[],
    maxPlayer: playerMark,
    minPlayer: playerMark,
    depth: number,
    isMaximizing: boolean,
  ): number {
    // need terminal conditions before doing minimax
    if (didWin(boardState, minPlayer)) return -1;
    if (didWin(boardState, maxPlayer)) return 1;
    if (validmoves.length === 0) return 0;

    // for max player
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let spot of validmoves) {
        const boardCopy = [...boardState];
        boardCopy[spot] = maxPlayer;
        let newValidMoves = Board.getValidMoves(boardCopy);
        let score = this.minimax(
          boardCopy,
          newValidMoves,
          maxPlayer,
          minPlayer,
          depth - 1,
          false,
        );
        bestScore = Math.max(score, bestScore);
      }
      return bestScore;
    }
    // for min player
    if (!isMaximizing) {
      let bestScoreForOpp = Infinity;
      for (let spot of validmoves) {
        const boardCopy = [...boardState];
        boardCopy[spot] = minPlayer;
        let newValidMoves = Board.getValidMoves(boardCopy);
        let score = this.minimax(
          boardCopy,
          newValidMoves,
          maxPlayer,
          minPlayer,
          depth - 1,
          true,
        );
        bestScoreForOpp = Math.min(score, bestScoreForOpp);
      }
      return bestScoreForOpp;
    }
  }
}
