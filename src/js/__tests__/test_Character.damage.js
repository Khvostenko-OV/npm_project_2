import Character from '../characters/character';

test('Testing Character.damage', () => {
  const hero = new Character('hero', 'Bowman', 25, 25);
  hero.damage(100);
  const result = {
    name: 'hero', type: 'Bowman', health: 25, level: 1, attack: 25, defence: 25, special: [],
  };
  expect(hero).toEqual(result);
});

test('Testing Character.damage health is 0', () => {
  const hero = new Character('hero', 'Bowman', 25, 25);
  hero.damage(200);
  const result = {
    name: 'hero', type: 'Bowman', health: 0, level: 1, attack: 25, defence: 25, special: [],
  };
  expect(hero).toEqual(result);
});
