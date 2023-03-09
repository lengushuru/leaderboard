import './styles.css';

const leader = document.querySelector('#leaderboard');

const footer = `
<div class="footer">
  <p>Created by <a href="#" target="_blank">lengushuru charles</a> - <a href="#" target="_blank">Microverse</a> 2021</p>
</div>`;

const renderFooter = () => {
  leader.insertAdjacentHTML('afterend', footer);
};

export default renderFooter;
