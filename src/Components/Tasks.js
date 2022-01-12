import {
  setEditable, addEventsListerners, setNonEditable,
} from './domManupulation.js';

class Tasks {
  static list = document.querySelector('ul');

  static db = () => {
    const datas = [{
      descption: 'task 1',
      completed: true,
      index: 1,
    }, {
      descption: 'task 2',
      completed: false,
      index: 2,
    }, {
      descption: 'task 3',
      completed: true,
      index: 3,
    }, {
      descption: 'task 6',
      completed: true,
      index: 6,
    }, {
      descption: 'task 7',
      completed: false,
      index: 7,
    }, {
      descption: 'task 8',
      completed: true,
      index: 8,
    }, {
      descption: 'task 9',
      completed: false,
      index: 9,
    }, {
      descption: 'task 4',
      completed: true,
      index: 4,
    }, {
      descption: 'task 5',
      completed: false,
      index: 5,
    }];
    return datas.sort((a, b) => parseFloat(a.index) - parseFloat(b.index));
  }

  static load = () => {
    this.db().forEach((task) => {
      this.createElement(task);
    });
    this.createFooter();
    addEventsListerners();
  }

  static createElement = (task) => {
    const listItem = document.createElement('li');
    listItem.classList.add('dragable');
    const button = document.createElement('p');
    const input = document.createElement('input');
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
    input.addEventListener('focus', () => setEditable(input));
    input.addEventListener('blur', () => setNonEditable(input));
    button.classList.add('icon', 'drag-and-drop');
    input.value = task.descption;
    listItem.appendChild(label);
    listItem.appendChild(input);
    listItem.appendChild(button);
    listItem.draggable = true;
    this.list.appendChild(listItem);
  }

  static createFooter = () => {
    const listItem = document.createElement('li');
    const button = document.createElement('button');
    button.classList.add('full-width-btn');
    button.innerText = 'Clear All Completed';
    listItem.appendChild(button);
    this.list.appendChild(listItem);
  }
}
export default Tasks;