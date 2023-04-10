import './styles.css';

const leader = document.querySelector('#leaderboard');

const board = `
<div class="leaderboard">
<div class = 'board-top'>
   <h2>Resent scores</h2>
  <button>Refresh</button>
</div>
  <ul class="list">
   
  </ul>
    </div>`;
const renderBoard = () => {
  leader.insertAdjacentHTML('afterbegin', board);
};

export default renderBoard;