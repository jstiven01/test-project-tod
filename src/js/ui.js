import storage from './storage'
import Task from './task'
import Project from './project'
const UI = (() => {

    const btnCreateProject = document.getElementById('create-project');

    const showAllProjects = () => {
        let allProjects = storage.AllNameProjects().sort();
        const parentElement = document.getElementById('projects-user');
        parentElement.innerHTML = '';
        for (let i =0; i < allProjects.length; i+=1){
            console.log(allProjects[i]);
            let div = document.createElement('div');
            div.setAttribute('class', 'card my-1');
            let span = document.createElement('span');
            span.innerHTML = allProjects[i];
            div.appendChild(span);
            parentElement.appendChild(div);
        }
    }
    const createProject = () => {
        const nameProject =  document.getElementById('project-name').value;
        if(nameProject !== '' && !storage.AllNameProjects().includes(nameProject)){
            const newProject = Project({title:nameProject});
            storage.create(newProject.title, newProject);
        }
        showAllProjects();
        console.log('this is the listener', !storage.AllNameProjects().includes(nameProject));
    }

    const loadListeners = ()=>{
        btnCreateProject.addEventListener('click', createProject);
    }

    return {
        loadListeners,
    }

})();

export default UI