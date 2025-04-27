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


}

export { setupEventListeners };
