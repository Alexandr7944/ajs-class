import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type) {
    super(name, type, 40, 10);
  }
}