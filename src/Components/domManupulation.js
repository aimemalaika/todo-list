const setEditable = (element) => {
  element.nextSibling.classList.add('remove-line');
  element.nextSibling.classList.remove('drag-and-drop');
  element.parentElement.classList.add('highlighted');
};

const setNonEditable = (element) => {
  element.nextSibling.classList.remove('remove-line');
  element.nextSibling.classList.add('drag-and-drop');
  element.parentElement.classList.remove('highlighted');
};

const refreshPage = (element) => {
  element.children[0].classList.add('rotate-me');
  setTimeout(() => {
    element.children[0].classList.remove('rotate-me');
  }, 2000);
};

const dragStart = () => {
};

const dragOver = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('dragable')) {
    e.target.classList.add('over');
  }
};

const dropOver = () => {
};

const dragEnter = () => {
};

const dragLeave = (e) => {
  e.target.classList.remove('over');
};

const addEventsListerners = () => {
  const dragables = document.querySelectorAll('dragable');
  const dragablesList = document.querySelectorAll('.dragable-area li');
  dragables.forEach((dragable) => {
    dragable.addEventListener('dragstart', dragStart);
  });
  dragablesList.forEach((item) => {
    item.addEventListener('dragover', dragOver);
    item.addEventListener('drop', dropOver);
    item.addEventListener('dragenter', dragEnter);
    item.addEventListener('dragleave', dragLeave);
  });
};

export {
  setEditable,
  refreshPage,
  addEventsListerners,
  setNonEditable,
};