import { createProject } from './projectFactory';
import { createTodo } from './todoFactory';

let STORAGE_KEY = 'todoAppData';

function saveToLocal(projects) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

function loadFromLocal() {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return null;

  try {
    const parsed = JSON.parse(data);

    return parsed.map(project => {
      const hydratedProject = createProject(project.name);
      hydratedProject.id = project.id;

      hydratedProject.todos = project.todos.map(todo => {
        const hydratedTodo = createTodo(todo);
        hydratedTodo.id = todo.id;
        hydratedTodo.isCompleted = todo.isCompleted;
        return hydratedTodo;
      });

      return hydratedProject;
    });
  } catch (e) {
    console.error('Failed to parse localStorage data:', e);
    return null;
  }
}

export { saveToLocal, loadFromLocal };
