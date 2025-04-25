import { ProjectManager } from './projectManager';

const content = document.querySelector('#content'); 
const projectList = document.querySelector('#project-list'); 

function renderProjects() {
  const projects = ProjectManager.getProjects();
  projectList.innerHTML = '';

  projects.forEach(project => {
    const li = document.createElement('li');
    li.textContent = project.name;
    li.dataset.projectId = project.id;
    projectList.appendChild(li);
  });
}

function renderTodos(projectId) {
  const project = ProjectManager.getProjectById(projectId);
  if (!project) return;

  content.innerHTML = '';

  project.todos.forEach(todo => {
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    todoDiv.dataset.todoId = todo.id;

    // Add priority color
    todoDiv.classList.add(`priority-${todo.priority}`);

    todoDiv.innerHTML = `
      <h3>${todo.title}</h3>
      <p>Due: ${todo.dueDate || 'No date'}</p>
      <button class="expand-btn">Details</button>
      <button class="delete-btn">Delete</button>
    `;

    content.appendChild(todoDiv);
  });
}

function renderExpandedTodo(todo) {
  const modal = document.getElementById('modal');
  modal.innerHTML = `
    <h2>${todo.title}</h2>
    <p>Description: ${todo.description}</p>
    <p>Due Date: ${todo.dueDate}</p>
    <p>Priority: ${todo.priority}</p>
    <button id="close-modal">Close</button>
  `;
  modal.style.display = 'block';
}


