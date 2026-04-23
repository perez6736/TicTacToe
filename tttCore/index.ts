import { Game } from './game/game';
import { Menu, gameMode } from './menu/menu';

async function main() {
  const mode: gameMode = await Menu.selectGameMode();
  const game = new Game(mode);
  await game.start();
}

main();
