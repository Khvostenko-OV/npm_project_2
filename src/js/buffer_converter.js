import getBuffer from "./buffer";

export default class ArrayBufferConverter {
  constructor() {
    this.buffer = getBuffer();
  }

  load(buffer) {
    this.buffer = buffer
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    return bufferView.reduce((str, item) => str + String.fromCharCode(item), '');
  }
}