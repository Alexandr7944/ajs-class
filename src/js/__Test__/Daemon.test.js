import Daemon from '../Daemon';

test('Daemon test name', () => {
  const obj = new Daemon('name', 'parent');
  expect(obj.name).toBe('name');
});
test('Daemon test attack', () => {
  const obj = new Daemon('name', 'parent');
  expect(obj.attack).toBe(10);
});
