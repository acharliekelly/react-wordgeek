const { getStartingWord, validateWord, getTopScores, initGame, submitWord } = require('../api/apiGameLogic');


test('start game', () => {
  initGame()
  expect(getStartingWord()).not.toBe('areallylongword')
})

test('submit a word', () => {
  const player = 'Player1'
  const word = 'word'
  expect(submitWord(player, word)).toBe(true)
  // check top scores for entry
})

test('get starting word', () => {
  const expected = 'areallylongword'
  expect(getStartingWord()).toBe(expected)
})

test('get top scores', () => {
  const expectedCount = 10
  const actual = getTopScores(10)
  expect(actual.length).toBe(expectedCount)
})

test('validate a valid word', () => {
  const testWord = 'ally';
  expect(validateWord(testWord)).toBe(true);
})

test('invalidate a word', () => {
  expect(validateWord('grape')).toBe(false);
})
