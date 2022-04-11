const abbrev = require('./ex_7');



test('Result', () => {
  expect(subDigits(12)).toBe(9);
  expect(subDigits(4000000)).toBe(3999996);
  expect(subDigits(0)).toBe(0);
  expect(subDigits(451).toBe(441));
  expect(subDigits(-12).toBe('Argument Error'));
});
 