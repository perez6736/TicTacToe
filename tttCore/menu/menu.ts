import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export type gameMode = 'pvp' | 'pvc';

export class Menu {
  constructor() {}

  static async selectGameMode(): Promise<gameMode> {
    const rl = readline.createInterface({ input, output });
    while (true) {
      const gamemode = await rl.question('1 player or 2 players? - 1 | 2 - ');

      if (gamemode === '1') {
        rl.close();
        return 'pvp';
      } else if (gamemode === '2') {
        rl.close();
        return 'pvc';
      } else {
        console.log('please select a valid game mode - 1 or 2.');
      }
    }
  }
}
