
const apiBaseUrl = '';

let currentGame = {
  id: 0,
  startWord: ''
};


export const initGame = () => {
  const url = `${apiBaseUrl}/newgame`;
  fetch(url).then(response => {
    currentGame = resposne.data;
  });
}

/**
 * must come from API to ensure consistency
 */
export const getStartingWord = () => {
  // TODO: create API
  const url = `${apiBaseUrl}/game/${currentGame.id}/startword`;
  return fetch(url).then(resp => resp.json());
}


export const validateWord = testWord => {
  // TODO: validate from API
  const url = `${apiBaseUrl}/game/${currentGame.id}/validate/${testWord}`;
  return fetch(url).then(response => response.ok);

}

export const submitWord = (playerName, word) => {
  const url = `${apiBaseUrl}/game/${currentGame.id}/player/${playerName}/word/${word}`;
  return fetch(url).then(resp => resp.json());
}


export const getTopScores = () => {
  // TODO: retrieve from API
  const url = `${apiBaseUrl}/game/${currentGame.id}/leaderboard`;
  return fetch(url).then(resp => resp.json());
}