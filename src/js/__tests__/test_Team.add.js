import Character from "../characters/character";
import Team from "../team";

test('Testing add Character', () => {
  const bob = new Character('Bob', 'Bowman');
  const team = new Team();
  team.add(bob);
  const result = new Set([bob]);
  expect(team.members).toEqual(result);
});

test('Testing add no-Character', () => {
  expect(() => {
    const team = new Team();
    team.add(1);
  }).toThrow(new Error('Type error!'));
});

test('Testing add twice', () => {
  expect(() => {
    const bob = new Character('Bob', 'Bowman');
    const team = new Team();
    team.add(bob);
    team.add(bob);
  }).toThrow(new Error('Персонаж уже в команде!'));
});
