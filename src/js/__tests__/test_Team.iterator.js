import Character from "../characters/character";
import Team from "../team";

test('Testing Team.iterator', () => {
  const c1 = new Character('C1', 'Bowman', 40, 10);
  const c2 = new Character('C2', 'Bowman', 40, 10);
  const c3 = new Character('C3', 'Bowman', 40, 10);
  const c4 = new Character('C4', 'Bowman', 40, 10);
  const team = new Team();
  team.addAll(c1, c2, c3, c4);
  const teamArray = [];
  for (let c of team) {
    teamArray.push(c);
  }
  const result = [c1, c2, c3, c4];
  expect(teamArray).toEqual(result);
});
