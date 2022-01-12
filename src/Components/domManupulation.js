const setEditable = (element) => {
  // document.querySelectorAll('li').forEach((li) => li.classList.remove('highlighted'));
  element.parentElement.classList.add('highlighted');
};

const setNonEditable = (element) => {
  element.parentElement.classList.remove('highlighted');
  // document.querySelectorAll('li').forEach((li) => li.classList.remove('highlighted'));
};

const refreshPage = (element) => {
  element.children[0].classList.add('rotate-me');
  setTimeout(() => {
    element.children[0].classList.remove('rotate-me');
  }, 2000);
};

const dragStart = () => {
  // console.log('object start');
};

const dragOver = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('dragable')) {
    e.target.classList.add('over');
  }
};

const dropOver = () => {
  // console.log('object over');
};

const dragEnter = (e) => {
  console.log(e);
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