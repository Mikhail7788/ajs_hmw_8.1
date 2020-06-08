import Character from '../Character';
import Team from '../Team';

test('new Team', () => {
  const team = new Team('characters');
  expect(team).toEqual({ name: 'characters', members: new Set() });
});

test('Team add', () => {
  const char = new Character('personal');
  const team = new Team('characters');
  team.add(char);
  expect(team).toEqual({
    name: 'characters',
    members: new Set([{
      name: 'personal',
      level: 1,
      health: 100,
    }]),
  });
});

test('throw error', () => {
  const char = new Character('personal');
  const team = new Team('characters');
  team.add(char);
  expect(() => team.add(char)).toThrow(new Error('Такой персонаж уже в команде'));
});

test('Team addAll', () => {
  const bow = new Character('Bow');
  const sword = new Character('Sword');
  const mage = new Character('Mage');
  const team = new Team('characters');
  team.addAll(bow, sword, mage);
  expect(team).toEqual({
    name: 'characters',
    members: new Set([{
      name: 'Bow',
      level: 1,
      health: 100,
    },
    {
      name: 'Sword',
      level: 1,
      health: 100,
    },
    {
      name: 'Mage',
      level: 1,
      health: 100,
    }]),
  });
});

test('Team toArray', () => {
  const bow = new Character('Bow');
  const sword = new Character('Sword');
  const mage = new Character('Mage');
  const team = new Team('characters');
  team.addAll(bow, sword, mage);
  expect(team.toArray()).toEqual([{
    name: 'Bow',
    level: 1,
    health: 100,
  },
  {
    name: 'Sword',
    level: 1,
    health: 100,
  },
  {
    name: 'Mage',
    level: 1,
    health: 100,
  }]);
});