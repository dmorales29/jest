const randomStrings = require('../index');
const randomString = require('../index');

describe('Probar funcionalidades de randomStrings', () => {
  test('Probar funcionalidad', () => {
    expect(typeof randomString()).toBe('string');
  });

  test('Comprobar ciudad', () => {
    expect(randomString()).not.toMatch(/Cordoba/);
  });
});
