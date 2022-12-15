import Bowerman from '../Bowerman';

test('Bowerman test name', () => {
  const obj = new Bowerman('name', 'parent');
  expect(obj.name).toBe('name');
});
test('Bowerman test attack', () => {
  const obj = new Bowerman('name', 'parent');
  expect(obj.attack).toBe(25);
});
