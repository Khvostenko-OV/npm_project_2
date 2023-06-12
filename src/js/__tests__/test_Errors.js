import ErrorRepository from "../errors";

test('Testing translate(code)', () => {
  const err = new ErrorRepository();
  expect(err.translate(1)).toBe('Type error!');
});

test('Testing translate(code) unknown', () => {
  const err = new ErrorRepository();
  expect(err.translate(100500)).toBe('Unknown error');
});
