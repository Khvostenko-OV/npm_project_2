import Character from '../characters/character';
import GetSpecial from '../get_special';

test('Testing GetSpecial', () => {
  const hero = new Character('hero', 'Bowman');
  hero.addSpecial(1, '1', '1');
  hero.addSpecial(2, '2', '2', '2');
  const result = [
    {
      id: 1, name: '1', icon: '1', description: 'Описание недоступно',
    },
    {
      id: 2, name: '2', icon: '2', description: '2',
    },
  ];
  expect(GetSpecial(hero)).toEqual(result);
});
