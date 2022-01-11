const setEditable = (element) => {
  document.querySelectorAll('li').forEach((li) => li.classList.remove('highlighted'));
  document.querySelectorAll('.input').forEach((li) => li.classList.remove('highlighted'));
  element.classList.remove('disabled');
  element.classList.add('highlighted');
  element.parentElement.classList.add('highlighted');
};

export default setEditable;