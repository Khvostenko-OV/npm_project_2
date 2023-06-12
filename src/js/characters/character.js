import { GameErrors } from "../errors";

export const typeList = ['Bowman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type, attack = 0, defence = 0) {
    if (name.length < 2 || name.length > 10) {
      throw new Error(GameErrors.translate(3));
    }
    if (!typeList.includes(type)) {
      throw new Error(GameErrors.translate(2));
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
    this.special = [];
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error(GameErrors.translate(5));
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.defence < 100) {
      this.health = Math.max(0, this.health - points * (1 - this.defence / 100));
    }
  }

  hit(distance=1) {
    return this.attack
  }

  addSpecial(id, name, icon, description = '') {
    for (const spec of this.special) {
      if (id === spec.id) {
        return;
      }
    }
    this.special.push({ id, name, icon });
    if (description) {
      this.special[this.special.length - 1].description = description;
    }
  }
}
