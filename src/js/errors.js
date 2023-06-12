export default class ErrorRepository {
  constructor() {
    this.errorMap = new Map([
      [1, 'Type error!'],
      [2, 'Неверный тип персонажа!'],
      [3, 'Недопустимое имя (длина 2-10 символов)!'],
      [4, 'Персонаж уже в команде!'],
      [5, 'Персонаж мёртв!'],
    ]);
  }

  translate(code) {
    return this.errorMap.get(code) || 'Unknown error';
  }
}

export const GameErrors = new ErrorRepository();
