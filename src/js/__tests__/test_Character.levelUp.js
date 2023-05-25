import Character from '../characters/character';

const hero = new Character('hero', 'Bowman', 50, 1, 25, 25);

test('Testing Character.levelUp', () => {
  hero.levelUp();
  expect(hero.level).toBe(2);
  expect(hero.attack).toBe(30);
  expect(hero.defence).toBe(30);
  expect(hero.health).toBe(100);
});
