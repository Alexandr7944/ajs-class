import Character from './Character';

export default class Bowerman extends Character {
  constructor(name, type, defense) {
    super(name, type, defense);
    this.attack = 25 / 25;
  }
}
