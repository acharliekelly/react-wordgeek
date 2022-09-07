import { validateWord } from './clientGameLogic';



export const submitWord = (playerName, word, scoresList) => {
  if (validateWord(word)) {
    const entry = { player: playerName, word, score: word.length, timestamp: new Date() };
    return submitScore(entry, scoresList);
  }
  return null;
}

// already validated
export const submitScore = (entry, scoresList) => {
  console.log(`submitted score: word=${entry.word}, checking ${scoresList.length} entries`);
  if (!containsWord(entry.word, scoresList)) {
    const tmp = [...scoresList, entry];
    tmp.sort(scoreCompareFn);
    return tmp;
  }
  return null;
}

export const sortBoard = (scoresList) => {
  return scoresList.sort(scoreCompareFn);
}


export const getTopScores = (scoresList, listSize) => {
  if (scoresList.length === 0)
    return [];
  else if (scoresList.length < listSize) {
    return scoresList;
  } else {
    return scoresList.slice(0, listSize-1);
  }
}


const containsWord = (testWord, scoresList) => {
  if (!scoresList || scoresList.length === 0) {
    return false;
  } else if (scoresList.length === 1) {
    return (scoresList[0].word === testWord);
  } else {
    return scoresList.includes(entry => entry.word === testWord);
  }
}


// first: highest score, earliest time
const scoreCompareFn = (scoreA, scoreB) => {
  if (scoreA.score === scoreB.score) {
    if (scoreA.timestamp === scoreB.timestamp)
      return 0;
    else
      return scoreA.timestamp > scoreB.timestamp ? 1 : -1;
  } else {
    return scoreA.score > scoreB.score ? -1 : 1;
  }
}