import Undead from '../Undead';

test('Undead test attack', () => {
  const obj = new Undead('name', 'parent');
  expect(obj.attack).toBe(25);
});

test('Undead test name', () => {
  function setName() {
    return new Undead('n', 'parent');
  }

  expect(setName).toThrow('Имя должно состоять от 2 до 11 символов');
});

test('Undead test type', () => {
  function setName() {
    return new Undead('name', 1);
  }

  expect(setName).toThrow('Тип должен быть строчным значением');
});
