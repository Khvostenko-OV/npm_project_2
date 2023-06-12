import Bowman from "../characters/bowman";
import Daemon from "../characters/daemon";
import Magician from "../characters/magician";

test('Testing Bowman.hit', () => {
  const bob = new Bowman('Bob');
  expect(bob.hit(4)).toBe(25);
});

test('Testing Daemon.hit', () => {
  const dan = new Daemon('Dan')
  expect(dan.hit(4)).toBe(7);
});

test('Testing Daemon.hit too far', () => {
  const dan = new Daemon('Dan')
  expect(dan.hit(12)).toBe(0);
});


test('Testing Magician.hit stoned', () => {
  const mak = new Magician('Mak');
  mak.stoned = true;
  expect(mak.hit(2)).toBe(4);
});
