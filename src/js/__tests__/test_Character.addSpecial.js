import Character from '../characters/character';

test('Testing Character.addSpecial', () => {
  const hero = new Character('hero', 'Bowman');
  hero.addSpecial(1, '1', '1');
  hero.addSpecial(2, '2', '2', '2');
  hero.addSpecial(1, '3', '3', '3');
  const result = {
    name: 'hero',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 0,
    defence: 0,
    special: [{ id: 1, name: '1', icon: '1' }, {
      id: 2, name: '2', icon: '2', description: '2',
    }],
  };
  expect(hero).toEqual(result);
});
