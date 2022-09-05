
const apiBaseUrl = 'http://localhost:8080/';

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
  const url = `${apiBaseUrl}/games/${currentGame.id}/startword`;
  return fetch(url).then(resp => resp.json());
}


export const validateWord = testWord => {
  // TODO: validate from API
  const url = `${apiBaseUrl}/game/${currentGame.id}/validate/${testWord}`;
  return fetch(url).then(response => response.ok);

}

export const submitWord = (playerName, word) => {
  // TODO: create post request
  //  send score to API
  const url = `${apiBaseUrl}/scores/`;
  
}


export const getTopScores = () => {
  // TODO: retrieve from API
  const url = `${apiBaseUrl}/scores`
  return fetch(url).then(resp => resp.json());
}