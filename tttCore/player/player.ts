import { moveMaker } from '../moveMaker/moveMaker';

export type playerMark = 'X' | 'O';
export type playerType = 'Human' | 'Non-Human';

export class Player {
  private player: playerMark;
  private playerType: playerType;

  constructor(player: playerMark, playerType: playerType) {
    this.player = player;
    this.playerType = playerType;
  }

  getPlayer(): playerMark {
    return this.player;
  }

  isHuman() {
    return this.playerType === 'Human';
  }

  move(validmoves: number[]): Promise<number> {
    if (this.isHuman()) {
      let move = moveMaker.playerMove();
      return move;
    } else {
      let randomMove = moveMaker.randomComputerMove(validmoves);
      return Promise.resolve(randomMove);
    }
  }
}
