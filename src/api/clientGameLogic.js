import * as topScores from './topscores.json';

const DEFAULT_STARTING_WORD = "areallylongwords";

let localWordFrequencyMap = {};

/**
 * must come from API to ensure consistency
 */
export const getStartingWord = () => {

  return DEFAULT_STARTING_WORD;
}

const getInitialFrequencyMap = () => {
  if (!localWordFrequencyMap)
    localWordFrequencyMap = characterFrequencyMap(getStartingWord());
  return localWordFrequencyMap;
}


export const validateWord = testWord => {
  const startingWord = getStartingWord();
  if (testWord.length > startingWord.length)
    return false;
    
  return isAnagram(testWord);
}

const characterFrequencyMap = word => {
  const hash = {};
  word.split().forEach(ch => {
    if (hash[ch])
      hash[ch]++;
    else
      hash[ch] = 1;
  })
  return hash;
}

const isAnagram = (testWord) => {

  const master = { ...getInitialFrequencyMap() };
  const testMap = characterFrequencyMap(testWord);

  return Object.keys(testMap).every(ch => {
    return (master[ch]) && (master[ch] >= testMap[ch])
  })

}


export const getTopScores = maxResults => {
  let entries = topScores;
  if (entries.length > maxResults) {
    return entries.slice(0, maxResults - 1);
  }
  return entries;

}