import Character from '../characters/character';

test('Testing Character.levelUp', () => {
  const hero = new Character('hero', 'Bowman', 25, 25);
  hero.levelUp();
  const result = {
    name: 'hero', type: 'Bowman', health: 100, level: 2, attack: 30, defence: 30,
  };
  expect(hero).toEqual(result);
});

test('Testing Character.levelUp of dead', () => {
  expect(() => {
    const hero = new Character('hero', 'Bowman', 25, 25);
    hero.health = 0;
    hero.levelUp();
  }).toThrow(new Error('Персонаж мёртв!'));
});
