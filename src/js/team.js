import Character from "./characters/character";
import { GameErrors } from "./errors";

export default class Team {
  constructor() {
    this.members = new Set();
  }

// Решение через итератор:

//  [Symbol.iterator]() {
//    return this.members[Symbol.iterator]();
//  }


// Решение через генератор:

  *[Symbol.iterator]() {
    for (let m of this.members) {
      yield m;
    }
  }

  add(person) {
    if (!(person instanceof Character)) {
      throw new Error(GameErrors.translate(1));
    }
    if (this.members.has(person)) {
      throw new Error(GameErrors.translate(4));
    }
    this.members.add(person);
  }

  addAll(...rest) {
    rest.forEach(param => this.members.add(param));
  }

  toArray() {
    return Array.from(this.members)
  }
}
