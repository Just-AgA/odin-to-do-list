import './styles.css';
import { setupEventListeners } from './eventHandler';
import { renderProjects, renderTodos } from './render';
import { ProjectManager } from './projectManager';

document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
  
  // Auto-select the first project if available
  const projects = ProjectManager.getProjects();
  if (projects.length > 0) {
    const firstProjectId = projects[0].id;
    const firstProjectEl = document.querySelector(`[data-project-id="${firstProjectId}"]`);

    if (firstProjectEl) {
      firstProjectEl.setAttribute('data-project-id-selected', 'true');
      firstProjectEl.classList.add('selected');
    }

    renderTodos(firstProjectId);

    // Set the hidden input in the add-todo form
    const hiddenInput = document.querySelector('#add-todo-form [name="project-id"]');
    if (hiddenInput) {
      hiddenInput.value = firstProjectId;
    }
  }

  setupEventListeners();
});

