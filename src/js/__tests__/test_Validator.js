import Validator from "../validator";

const val = new Validator();

test('Testing validate short name', () => {
  expect(val.validateUsername('A')).toBe(false);
});

test('Testing validate first letter', () => {
  expect(val.validateUsername('_Aa')).toBe(false);
});

test('Testing validate last letter', () => {
  expect(val.validateUsername('Aa1')).toBe(false);
});

test('Testing validate wrong char', () => {
  expect(val.validateUsername('A@a')).toBe(false);
});

test('Testing validate too many digital in succession', () => {
  expect(val.validateUsername('A1234a')).toBe(false);
});

test('Testing validate right name', () => {
  expect(val.validateUsername('A-_1_-a')).toBe(true);
});

test('Testing validate right name2', () => {
  expect(val.validateUsername('A_123-456_a')).toBe(true);
});
