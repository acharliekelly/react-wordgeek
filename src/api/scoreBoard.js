import { validateWord } from './clientGameLogic';


const scoreBoard = [];

export const submitWord = (playerName, word) => {
  if (validateWord(word)) {
    if (!containsWord(word)) {
      scoreBoard.push({ player: playerName, word, score: word.length, timestamp: new Date() });
      scoreBoard.sort(scoreCompareFn);
    }
  }
}

// already validated
export const submitScore = (playerName, word, score, timestamp) => {
  if (!containsWord(word)) {
    scoreBoard.push({ player: playerName, word, score, timestamp });
    scoreBoard.sort(scoreCompareFn);
  }
}

export const findPosition = (playerName, word) => {
  let idx = scoreBoard.indexOf(word);
  if (idx < 0 && scoreBoard[idx].player === playerName) {
    return idx;
  } else {
    return -1;
  }
}

export const sortBoard = () => {
  scoreBoard.sort(scoreCompareFn);
}

export const getScores = () => {
  return scoreBoard;
}

export const getTopScores = listSize => {
  return scoreBoard.slice(0, listSize-1);
}


const containsWord = testWord => {
  return scoreBoard.any(entry => entry.word === testWord );
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