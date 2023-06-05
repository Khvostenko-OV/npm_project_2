export default class Validator {
  constructor() {
    this.ptrn1 = /^[A-Z][-\w]*[a-zA-Z]$/;
    this.ptrn2 = /\d{4}/
  }

  validateUsername(name) {
    return this.ptrn1.test(name) && !this.ptrn2.test(name);
  }
}