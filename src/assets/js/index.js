import Tasks from '../../Components/Tasks.js';
import {
  refreshPage,
} from '../../Components/domManupulation.js';

import '../css/index.css';

(() => {
  Tasks.load();
  const refresh = document.querySelector('.refrecher');
  refresh.addEventListener('click', () => refreshPage(refresh));
})();