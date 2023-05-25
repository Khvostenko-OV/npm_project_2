import Character from '../characters/character';

const hero = new Character('hero', 'Bowman', 100, 1, 25, 25);

test('Testing Character.damage', () => {
  hero.damage(100);
  expect(hero.health).toBe(25);
});
