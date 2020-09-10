// Mi array y mi string
const text = 'Hola mundo';
const fruits = ['Manzana', 'Melón', 'Banana'];

//Test de texto (string)
test('Debe contener un texto', () => {
  expect(text).toMatch(/mundo/);
});

//Test de array si existe valor (string)
test('¿Tenemos una banana?', () => {
  expect(fruits).toContain('Banana');
});

//Test de un número (valor >)
test('Mayor que', () => {
  expect(10).toBeGreaterThan(9);
});

//Test de un boolean
test('Verdadero', () => {
  expect(true).toBeTruthy();
});

//Test de un Callback
const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''));
};

test('Probar un callback', () => {
  reverseString('Hola', (str) => {
    expect(str).toBe('aloH');
  });
});

//Test de una Promesa
const reverseString2 = (str) => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'));
    }
    resolve(str.split('').reverse().join(''));
  });
};

test('Probar una promesa', () => {
  return reverseString2('Hola').then((string) => {
    expect(string).toBe('aloH');
  });
});

//Test de un async/await
test('Probar async/await', async () => {
  const string = await reverseString2('Hola');
  expect(string).toBe('aloH');
});

//Correr código antes o después de las pruebas
// afterEach(() => console.log('Después de cada prueba'));
// afterAll(() => console.log('Después de todas las pruebas'));

// beforeEach(() => console.log('Antes de cada prueba'));
// beforeAll(() => console.log('Antes de todas las pruebas'));
