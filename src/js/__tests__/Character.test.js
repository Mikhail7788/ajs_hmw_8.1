import Character from '../Character';

test('new Character', () => {
  const newChar = new Character('personal');
  expect(newChar).toEqual({
    name: 'personal',
    level: 1,
    health: 100,
  });
});