import Magician from '../Magician';

test('Magician test name', () => {
  const obj = new Magician('name', 'parent');
  expect(obj.name).toBe('name');
});
test('Magician test attack', () => {
  const obj = new Magician('name', 'parent');
  expect(obj.attack).toBe(10);
});
