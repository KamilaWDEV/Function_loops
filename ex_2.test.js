const rockPaperScissors = require('./ex_2');



test('Result', () => {
  expect(rockPaperScissors('rock', 'rock')).toBe('Draw');
  expect(rockPaperScissors('rock', 'paper')).toBe('Second player wins');
  expect(rockPaperScissors('rock','scissors' )).toBe('First player wins');
  expect(rockPaperScissors('paper','scissors')).toBe('Second player wins');
});