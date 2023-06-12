import Character from "../characters/character";
import Team from "../team";

test('Testing Team.members toArray', () => {
  const bob = new Character('Bob', 'Bowman');
  const sam = new Character('Sam', 'Swordsman');
  const zak = new Character('Zak', 'Zombie');
  const team = new Team();
  team.addAll(bob, sam, zak);
  const result = [bob, sam, zak];
  expect(team.toArray()).toEqual(result);
});
