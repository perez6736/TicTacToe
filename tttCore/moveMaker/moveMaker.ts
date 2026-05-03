import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { aBoard } from '../board/board';
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
}
