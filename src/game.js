const baseURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

const createNewGame = async (newGame) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ name: newGame }),
  };
  const response = await fetch(`${baseURL}games/`, options);
  const output = await response.json();
  return output.result.split(' ')[3];
};

const getScores = async (gameId) => {
  const response = await fetch(`${baseURL}games/${gameId}/scores/`);
  const output = await response.json();
  console.log(output.result);
  return output.result;
};

const addScore = async (gameId, name, score) => {
  const options = {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ user: name, score }),
  };
  const response = await fetch(`${baseURL}games/${gameId}/scores/`, options);
  const output = await response.json();
  return output;
};

export { createNewGame, getScores, addScore };