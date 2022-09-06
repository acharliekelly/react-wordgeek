const DEFAULT_STARTING_WORD = "areallylongword";

let localWordFrequencyMap;

/**
 * must come from API to ensure consistency
 */
export const getStartingWord = () => {

  return DEFAULT_STARTING_WORD;
}

/**
 * get one letter tile
 * @param {string} char 
 * @returns Tile { letter: string, clicked: boolean }
 */
export const letterTile = (char) => {
  return {
    letter: char,
    clicked: false
  }
}

/**
 * get array of tiles from seed word
 * @param {string} startingWord 
 * @returns Array<Tile>
 */
export const initTilesArray = startingWord => {
  const arr = startingWord.split('').map(char => letterTile(char));
  return arr;
}

/**
 * 
 * @returns Map<Character, Integer> of seed word
 */
const getInitialFrequencyMap = () => {
  if (!localWordFrequencyMap || !Object.keys(localWordFrequencyMap).length) {
    
    const seedWord = getStartingWord();
    localWordFrequencyMap = characterFrequencyMap(seedWord);
  }
  
  return localWordFrequencyMap;
}

export const updateFrequencyMap = charMap => {
  localWordFrequencyMap = charMap;
}

export const updateStartingWord = seedWord => {
  localWordFrequencyMap = characterFrequencyMap(seedWord);
}

/**
 * randomize an arry
 * @param {*} array 
 * @returns randomized array
 */
export const shuffleArray = array => {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

export const removeCharFromWord = (word, index) => {
  const before = word.substring(0, index-1);
  const after = word.substring(index+1);
  return before + after;
}

/**
 * 
 * @param {string} testWord 
 * @returns true if word is valid
 */
export const validateWord = testWord => {
  const startingWord = getStartingWord();
  if (testWord.length > startingWord.length)
    return false;
    
  return isAnagram(testWord);
}

const characterFrequencyMap = word => {
  const hash = {};
  word.split('').forEach(ch => {
    if (hash[ch])
      hash[ch]++;
    else
      hash[ch] = 1;
  })
  return hash;
}

// const charMapToString = charMap => {
//   let msg = '{ ';
//   for (const [key, value] of Object.entries(charMap)) {
//     msg += `${key}: ${value}, `
//   }
//   msg += ' }';
//   return msg;
// }

const isAnagram = (testWord) => {

  const master = getInitialFrequencyMap();
  // console.log(`master set: ` + charMapToString(master));
  const testMap = characterFrequencyMap(testWord);
  // console.log(`test set ("${testWord}"): ` + charMapToString(testMap));
  let anagram = true;
  for (const [key, value] of Object.entries(testMap)) {
    if (!master[key] || master[key] < value) {
      // console.log(`NOT VALID: master has ${master[key]} instances of ${key} but test has ${value}`)
      anagram = false;
      break;
    }
  }
  // console.log('VALID')
  return anagram;
}
