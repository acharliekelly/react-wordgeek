const { getStartingWord, validateWord, getTopScores } = require('../api/clientGameLogic');

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