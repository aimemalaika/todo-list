import {
  setEditable,
  addEventsListerners,
  setNonEditable,
} from './domManupulation.js';

class Tasks {
  constructor(descption, index) {
    this.descption = descption;
    this.completed = false;
    this.index = index;
  }

  static list = document.querySelector('ul');

  static db = () => ((window.localStorage.getItem('tasks') !== null) ? JSON.parse(window.localStorage.getItem('tasks')) : [])

  static load = () => {
    this.db().forEach((task) => {
      this.createElement(task);
    });
    addEventsListerners();
    return this.db().length;
  }

  static addTask = (task) => {
    const data = this.db();
    data.push(task);
    this.createElement(task);
    window.localStorage.setItem('tasks', JSON.stringify(data));
  }

  static removeBook = (button) => {
    const result = this.db().filter((task) => task.index !== parseInt(button.getAttribute('data-task-id'), 10));
    button.parentElement.remove();
    result.forEach((row) => {
      row.index = result.length;
    });
    window.localStorage.setItem('tasks', JSON.stringify(result));
  }

  static updateData(index, value) {
    const data = this.db();
    data[index].descption = value;
    window.localStorage.setItem('tasks', JSON.stringify(data));
  }

  static createElement = (task) => {
    const listItem = document.createElement('li');
    const form = document.createElement('form');
    form.classList.add('current-task');
    listItem.classList.add('dragable');
    const button = document.createElement('p');
    const input = document.createElement('input');
    input.setAttribute('data-task-id', task.index);
    const checkbox = document.createElement('input');
    const p = document.createElement('p');
    p.classList.add('checkmark');
    const label = document.createElement('label');
    if (task.completed) {
      checkbox.setAttribute('checked', true);
      input.classList.add('completed');
    }
    checkbox.type = 'checkbox';
    label.appendChild(checkbox);
    label.appendChild(p);
    input.type = 'text';
    input.classList.add('input', 'disabled');
    button.classList.add('icon', 'drag-and-drop');
    button.setAttribute('data-task-id', task.index);
    input.value = task.descption;
    listItem.appendChild(label);
    form.appendChild(input);
    listItem.appendChild(form);
    listItem.appendChild(button);
    listItem.draggable = true;
    input.addEventListener('focus', () => {
      setEditable(input);
      button.addEventListener('click', () => {
        Tasks.removeBook(button);
      });
    });
    input.addEventListener('blur', () => setNonEditable(input));
    this.list.appendChild(listItem);
  }
}
export default Tasks;