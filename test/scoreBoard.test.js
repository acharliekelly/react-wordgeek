const { submitWord, submitScore, getTopScores } = require('../src/api/scoreBoard');
const { mockScoresList } = require('./mockScores');

const mockEntry = {
  player: 'Player1',
  word: 'land',
  score: 4,
  timestamp: '2022-09-07T09:10:11'
}

test('submit a score', () => {
  const listSize = mockScoresList.length;
  const updatedList = submitScore(mockEntry);
  expect(updatedList).not.toBeNull()
  expect(updatedList.length).toBeGreaterThan(listSize)
})

test('submit valid word', () => {
  const listSize = mockScoresList.length;
  const player = mockEntry.player
  const word = mockEntry.word
  const updatedList = submitWord(player, word)
  expect(updatedList).not.toBeNull()
  expect(updatedList.length).toBeGreaterThan(listSize)
})

test('submit invalid word', () => {
  const updatedList = submitWord('player1', 'grape')
  expect(updatedList).toBeNull()
})

test('get top scores', () => {
  const listSize = mockScoresList.length
  const topScores = getTopScores(mockScoresList, 5)
  expect(topScores.length).toBe(5)
})