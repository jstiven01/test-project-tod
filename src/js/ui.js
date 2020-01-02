import storage from './storage'
import Task from './task'
import Project from './project'
import { de } from 'date-fns/locale';
const UI = (() => {

    let chosenProject ;
    const btnCreateProject = document.getElementById('create-project');
    const projectsUser = document.getElementById('projects-user');
    const btnAddTask = document.getElementById('add-task');
    const projectTasks =  document.getElementById('project-tasks');
    

    const showAllProjects = () => {
        let allProjects = storage.AllNameProjects().sort();
        //const projectsUser = document.getElementById('projects-user');
        projectsUser.innerHTML = '';
        for (let i =0; i < allProjects.length; i+=1){
            console.log(allProjects[i]);
            let div = document.createElement('div');
            div.setAttribute('class', 'card my-1');
            let span = document.createElement('span');
            span.innerHTML = allProjects[i];
            div.appendChild(span);
            projectsUser.appendChild(div);
        }
    }

    const showAllTasks = () => {
        projectTasks.innerHTML = '';
        for (let i =0; i < chosenProject.tasks.length; i+=1){
            console.log(chosenProject.tasks[i]);
            let div = document.createElement('div');
            div.setAttribute('class', 'card my-1');
            let span = document.createElement('span');
            span.innerHTML = chosenProject.tasks[i].title;
            div.appendChild(span);
            projectTasks.appendChild(div);
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

    const selectedProject = (e) => {
        const currentProject = document.getElementById('current-project');
        const detailTask = document.getElementById('detail-task');
        currentProject.innerText = e.target.innerText;
        chosenProject = Project(storage.read(e.target.innerText));
        if (chosenProject.tasks.length === 0){
            detailTask.setAttribute('class','d-none')
        }
        showAllTasks();
        console.log(e.target, chosenProject.title);
    }

    const AddTaskToProject = () => {
        const nameTask = document.getElementById('name-task').value;
        if (nameTask !== '') {
            let newTask = Task({title: nameTask})
            chosenProject.addTask(newTask);
            console.log(chosenProject);
            storage.update(chosenProject.title,chosenProject);
        }
        showAllTasks();
    }

    const loadListeners = ()=>{
        showAllProjects();
        btnCreateProject.addEventListener('click', createProject);
        projectsUser.addEventListener('click', selectedProject);
        btnAddTask.addEventListener('click',AddTaskToProject)
    }

    return {
        loadListeners,
    }

})();

export default UI