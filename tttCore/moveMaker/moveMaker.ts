export class moveMaker {
  constructor() {}

  static playerMove(answer: string): number {
    const inputMove = Number(answer);
    const move = inputMove - 1;
    return move;
  }
}
