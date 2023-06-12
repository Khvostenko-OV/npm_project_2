import Character from "../characters/character";
import Team from "../team";

test('Testing addAll Characters', () => {
  const bob = new Character('Bob', 'Bowman');
  const sam = new Character('Sam', 'Swordsman');
  const zak = new Character('Zak', 'Zombie');
  const team = new Team();
  team.addAll(bob, sam, zak, sam, zak, bob);
  const result = new Set([bob, sam, zak]);
  expect(team.members).toEqual(result);
});
