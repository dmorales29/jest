const text = 'Hola mundo';
const fruits = ['Manzana', 'Melón', 'Banana'];

test('Debe contener un tesxto', () => {
  expect(text).toMatch(/mundo/);
});

test('¿Tenemos una banana?', () => {
  expect(fruits).toContain('Banana');
});

test('Mayor que', () => {
  expect(10).toBeGreaterThan(9);
});

test('Verdadero', () => {
  expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''));
};

test('Probar un callback', () => {
  reverseString('Hola', (str) => {
    expect(str).toBe('aloH');
  });
});
