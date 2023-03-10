import './styles.css';

const leader = document.querySelector('#leaderboard');

const form = `
<div class="form">
  <h2>Add your score</h2>
  <form id = 'form'> 
    <input type="text" placeholder="Enter your name" id="name" required>
    <input type="number" placeholder="Enter your score" id="score" required>
    <button type="submit">Submit</button>
  </form>
</div>`;

const renderForm = () => {
  leader.insertAdjacentHTML('beforeend', form);
};

export default renderForm;