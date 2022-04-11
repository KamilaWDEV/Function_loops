const displayName = require('./ex_1');

test('Result', () => {
  expect(displayName('James','Bond')).toBe('My name is Bond, James Bond');
});