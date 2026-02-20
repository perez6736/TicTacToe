export type playerMark = 'X' | 'O';

export class Player {
  private player: playerMark;

  constructor(player: playerMark) {
    this.player = player;
  }

  getPlayer(): playerMark {
    return this.player;
  }
}
