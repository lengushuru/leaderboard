import './styles.css';
import renderForm from './form.js';
import renderBoard from './leaderboard.js';
import renderFooter from './footer.js';
import { getScores, addScore } from './game.js';

renderForm();
renderBoard();
renderFooter();

const form = document.querySelector('#form');
const list = document.querySelector('.list');
const refresh = document.querySelector('button');
const gameID = "ZaHvL1jySJfC6zqpNjAk";


const renderList = async () => {  
  const scores = await getScores(gameID);
  scores.sort((a, b) => b.score - a.score);
  console.log('this is scores');
  console.log(scores);
  for(let i = 0; i < scores.length; i += 1) {
    const li = document.createElement('li');
    if(i%2 === 0) {
      li.classList.add('dark');
    } 
    li.innerHTML = `${scores[i].user}: ${scores[i].score}`;
    list.appendChild(li);

  }

};

const addToList = async (name, score) => {
  const li = document.createElement('li');
  li.innerHTML = `${name}: ${score}`;
  list.appendChild(li);
};

const refreshList = async () => {
  list.innerHTML = '';
  renderList();
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  await addScore(gameID, name, score);
  addToList(name, score);
  form.reset();
});

refresh.addEventListener('click', refreshList);

renderList();

