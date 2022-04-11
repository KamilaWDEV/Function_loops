const printVowels = require('./ex_4');



test('Result', () => {
  expect(printVowels('hello world')).toBe('eoo');
  expect(printVowels('kangaroo')).toBe('aaoo');
  expect(printVowels('cheeseburger')).toBe('eeeue');
  expect(printVowels('rhythm').toBe(''));
});
 