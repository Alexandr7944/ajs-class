import Zombie from '../Zombie';

test('Zombie test name', () => {
  const obj = new Zombie('name', 'parent');
  expect(obj.name).toBe('name');
});
test('Zombie test defence', () => {
  const obj = new Zombie('name', 'parent');
  expect(obj.defence).toBe(10);
});
