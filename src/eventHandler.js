import { ProjectManager } from './projectManager';
import { renderProjects, renderTodos, renderExpandedTodo, clearModal } from './render';

function setupEventListeners() {
  const projectList = document.querySelector('#project-list');
  const content = document.querySelector('#content');

  // Switch project view
  projectList.addEventListener('click', e => {
    const projectId = e.target.dataset.projectId;
    if (projectId) {
      // Remove previously selected
      document.querySelectorAll('#project-list [data-project-id]')
        .forEach(el => el.removeAttribute('data-project-id-selected'));
  
      // Mark this one as selected
      e.target.setAttribute('data-project-id-selected', 'true');
      e.target.classList.add('selected');
  
      // Update the hidden input with the new project ID
      const hiddenInput = document.querySelector('#add-todo-form [name="project-id"]');
      if (hiddenInput) {
        hiddenInput.value = projectId;
      }
  
      // Render the todos for the selected project
      renderTodos(projectId);
    }
  });

  // Add new project
  document.getElementById('add-project-form').addEventListener('submit', e => {
    e.preventDefault();
    const projectName = e.target.elements['project-name'].value;
    ProjectManager.addProject(projectName);
    renderProjects();
    e.target.reset();
  });

  // Add new todo
  document.getElementById('add-todo-form').addEventListener('submit', e => {
    e.preventDefault();
    const data = {
      title: e.target.elements['todo-title'].value,
      description: e.target.elements['todo-desc'].value,
      dueDate: e.target.elements['todo-due'].value,
      priority: e.target.elements['todo-priority'].value,
    };
    const projectId = e.target.elements['project-id'].value;

    ProjectManager.addTodoToProject(projectId, data);
    renderTodos(projectId);
    e.target.reset();
  });

  // Handle todo actions (expand/delete)
  content.addEventListener('click', e => {
    const todoId = e.target.closest('.todo')?.dataset.todoId;
    const projectId = document.querySelector('[data-project-id-selected]')?.dataset.projectId;

    if (e.target.classList.contains('expand-btn')) {
      const project = ProjectManager.getProjectById(projectId);
      const todo = project.todos.find(t => t.id === todoId);
      renderExpandedTodo(todo);
    }

    if (e.target.classList.contains('delete-btn')) {
      ProjectManager.deleteTodoFromProject(projectId, todoId);
      renderTodos(projectId);
    }
  });

  // Close modal
  document.addEventListener('click', e => {
    if (e.target.id === 'close-modal') {
      clearModal();
    }
  });
}

export { setupEventListeners };
