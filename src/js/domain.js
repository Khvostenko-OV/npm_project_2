export const typeList = ['Bowman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type, health = 100, level = 1, attack = 1, defence = 1) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Недопустимое имя (длина 2-10 символов)!');
    }
    if (!typeList.includes(type)) {
      throw new Error('Неверный тип персонажа!');
    }
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Персонаж мёртв!');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    this.health = Math.max(0, this.health - points * (1 - this.defence / 100));
  }
}

export class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman', 100, 1, 25, 25);
  }
}

export class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon', 100, 1, 10, 40);
  }
}

export class Magician extends Character {
  constructor(name) {
    super(name, 'Magician', 100, 1, 10, 40);
  }
}

export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman', 100, 1, 40, 10);
  }
}

export class Undead extends Character {
  constructor(name) {
    super(name, 'Undead', 100, 1, 25, 25);
  }
}

export class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie', 100, 1, 40, 10);
  }
}
