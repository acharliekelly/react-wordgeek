const { 
  getStartingWord, 
  validateWord, 
  initTilesArray, 
  shuffleArray
} = require('../src/api/clientGameLogic');


const startWord = 'areallylongword';


test('get starting word', () => {
  const expected = startWord;
  expect(getStartingWord()).toBe(expected)
})

test('validate a word', () => {
  const testWord = 'ally';
  expect(validateWord(testWord)).toBe(true);
})

test('invalidate a word', () => {
  expect(validateWord('grape')).toBe(false);
})

test('initilize tiles array', () => {
  const tiles = initTilesArray(startWord);
  expect(tiles[0].letter).toBe('a')
  expect(tiles[0].clicked).toBe(false)
})

test('shuffle array', () => {
  const tiles = initTilesArray(startWord);
  const shuffled = shuffleArray(tiles);
  expect(tiles.length).toEqual(shuffled.length)
  expect(tiles).not.toEqual(shuffled)
})