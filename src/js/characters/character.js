export const typeList = ['Bowman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type, attack = 0, defence = 0) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Недопустимое имя (длина 2-10 символов)!');
    }
    if (!typeList.includes(type)) {
      throw new Error('Неверный тип персонажа!');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
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
    if (this.defence < 100) {
      this.health = Math.max(0, this.health - points * (1 - this.defence / 100));
    }
  }
}
