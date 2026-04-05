import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

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

  //neds list of valid moves
  static randomComputerMove(validmoves: number[]): number {
    const randomIndex = Math.floor(Math.random() * validmoves.length);
    const randomMove = validmoves[randomIndex]!;
    return randomMove;
  }
}
