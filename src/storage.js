import { createProject } from './projectFactory';
import { createTodo } from './todoFactory';

let STORAGE_KEY = 'todoAppData';

function saveToLocal(projects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}


