const rockPaperScissors = require('./ex_3');


test('Result', () => {
  expect(rockPaperScissors('paper', 'scissors')).toBe('Second player wins');
  expect(rockPaperScissors('rock', 'potatoes')).toBe('Argument error');
  expect(rockPaperScissors('glue', 'scissors' )).toBe('Argument error');
  expect(rockPaperScissors('rock', 'rock')).toBe('Draw');
});
