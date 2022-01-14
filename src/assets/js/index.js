import Tasks from '../../Components/Tasks.js';
import {
  refreshPage,
} from '../../Components/domManupulation.js';

import '../css/index.css';

(() => {
  const count = Tasks.load();
  document.querySelector('.number-label').innerText = count;
  const refresh = document.querySelector('.refrecher');
  refresh.addEventListener('click', () => refreshPage(refresh));
})();

const submitData = () => {
  const description = document.querySelector('#taskname');
  if (description.value !== '') {
    const taskObj = new Tasks(description.value, Tasks.db().length);
    const count = Tasks.addTask(taskObj);
    document.querySelector('.number-label').innerText = count;
    description.value = '';
  }
};

document.querySelector('#addItem').addEventListener('submit', (e) => {
  e.preventDefault();
  submitData();
});

document.querySelector('.enter-submit').addEventListener('click', (e) => {
  e.preventDefault();
  submitData();
});

document.querySelectorAll('.current-task').forEach((form) => {
  form.addEventListener('submit', (el) => {
    el.preventDefault();
    if (el.target.children[0].value !== '') {
      Tasks.updateData(el.target.children[0].getAttribute('data-task-id'), el.target.children[0].value);
      el.target.children[0].blur();
    }
  });
});