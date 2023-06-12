import ArrayBufferConverter from "../buffer_converter";

test('Testing ArrayBufferConverter.load', () => {
  const conv = new ArrayBufferConverter();
  conv.load(new ArrayBuffer(2));
  const result = new ArrayBuffer(2);
  expect(conv.buffer).toEqual(result);
});

test('Testing ArrayBufferConverter.toString', () => {
  const conv = new ArrayBufferConverter();
  expect(conv.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
