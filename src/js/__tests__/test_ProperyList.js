import Character from '../characters/character';
import PropertyList from '../propery_list';

test('Testing PropertyList', () => {
  const hero = new Character('hero', 'Bowman');
  const result = [
    { key: 'type', value: 'Bowman' },
    { key: 'name', value: 'hero' },
    { key: 'attack', value: 0 },
    { key: 'defence', value: 0 },
    { key: 'health', value: 100 },
    { key: 'level', value: 1 },
    { key: 'special', value: [] },
  ];
  expect(PropertyList(hero, ['type', 'name'])).toEqual(result);
});
