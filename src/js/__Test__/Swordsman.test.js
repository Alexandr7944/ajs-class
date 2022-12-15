import Swordsman from '../Swordsman';

test('Swordsman test name', () => {
  const obj = new Swordsman('name', 'parent');
  expect(obj.name).toBe('name');
});
test('Swordsman test defence', () => {
  const obj = new Swordsman('name', 'parent');
  expect(obj.defence).toBe(10);
});
