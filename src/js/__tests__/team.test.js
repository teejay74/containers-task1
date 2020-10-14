import Team from '../team';

const zombie = {
  type: 'zombie',
  name: 'shaun',
  health: 100,
  level: 1,
  attack: 40,
  defence: 10,
};
const magician = {
  type: 'magician',
  name: 'kain',
  health: 100,
  level: 1,
  attack: 10,
  defence: 40,
};

test('Добавление персонажа', () => {
  const character = zombie;
  const team = new Team();
  team.add(character);
  expect(team.members.has(character)).toBe(true);
});

test('Тест ошибки добавления персонажа', () => {
  const character = magician;
  const team = new Team();
  team.add(character);
  expect(() => team.add(character)()).toThrow();
});

test('Тест на дубль', () => {
  const character1 = zombie;
  const character2 = magician;
  const team = new Team();
  team.addAll(character1, character2, character1);
  expect(team.members.has(character1) && team.members.has(character2)).toBe(true);
  expect(team.members.size).toBe(2);
});

test('Тест преобразования в массив', () => {
  const character1 = zombie;
  const character2 = magician;
  const team = new Team();
  team.addAll(character1, character2);
  team.toArray();
  expect(team.members).toEqual([zombie, magician]);
});
