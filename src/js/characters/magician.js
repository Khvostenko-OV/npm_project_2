import Character from './character';

export default class Magician extends Character {
  constructor(name) {
    super(name, 'Magician');
    this.attack = 10;
    this.defence = 40;
    this.state = false;
  }

  set stoned(flag) {
    this.state = flag;
  }

  get stoned() {
    return this.state;
  }

  hit(distance=1) {
    const decr = Math.max(0, Math.min(100, 110 - Number(distance) * 10))
    return Math.max(0, Math.round(this.attack * decr / 100 - Number(this.stoned) * Math.log2(distance) * 5))
  }

}
