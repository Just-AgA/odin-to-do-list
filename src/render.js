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


