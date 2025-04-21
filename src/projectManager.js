import { createProject } from './projectFactory';
import { createTodo } from './todoFactory';
import { saveToLocal, loadFromLocal } from './storage';

const ProjectManager = (() => {
  let projects = loadFromLocal() || [createProject('Default')];

  function addProject(name) {
    const newProject = createProject(name);
    projects.push(newProject);
    saveToLocal(projects);
  }

  function getProjects() {
    return projects;
  }

  function getProjectById(id) {
    return projects.find(p => p.id === id);
  }

  function addTodoToProject(projectId, todoData) {
    const todo = createTodo(todoData);
    const project = getProjectById(projectId);
    if (project) {
      project.addTodo(todo);
      saveToLocal(projects);
    }
  }

  function deleteTodoFromProject(projectId, todoId) {
    const project = getProjectById(projectId);
    if (project) {
      project.removeTodo(todoId);
      saveToLocal(projects);
    }
  }

  return {
    addProject,
    getProjects,
    getProjectById,
    addTodoToProject,
    deleteTodoFromProject
  };
})();

export {ProjectManager};
