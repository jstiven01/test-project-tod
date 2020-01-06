import storage from './storage'
import Task from './task'
import Project from './project'
const UI = (() => {

    let chosenProject ;
    let chosenTask;
    const btnCreateProject = document.getElementById('create-project');
    const projectsUser = document.getElementById('projects-user');
    const btnAddTask = document.getElementById('add-task');
    const projectTasks =  document.getElementById('project-tasks');
    const detailTask = document.getElementById('detail-task');
    const btnEditTask = document.getElementById('edit-task');
    const inputDueDate = document.getElementById('due-date');
    const inputNote = document.getElementById('note');

    

    const showAllProjects = () => {
        let allProjects = storage.AllNameProjects().sort();
        projectsUser.innerHTML = '';
        for (let i =0; i < allProjects.length; i+=1){
            console.log(allProjects[i]);
            let div = document.createElement('div');
            div.setAttribute('class', 'item my-1');
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
            let divCheck = document.createElement('div');
            divCheck.setAttribute('class', 'form-check form-check-inline');
            let checkIsDone = document.createElement('input');
            checkIsDone.type ='checkbox';
            checkIsDone.setAttribute('class','form-check-input');
            divCheck.appendChild(checkIsDone);
            div.setAttribute('class', 'item my-1 d-flex');
            let span = document.createElement('span');
            span.innerHTML = chosenProject.tasks[i].title;
            div.appendChild(divCheck);
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
        currentProject.innerText = e.target.innerText;
        chosenProject = Project(storage.read(e.target.innerText));
        detailTask.setAttribute('class','d-none')
        showAllTasks();
        console.log(e.target, chosenProject.title);
    }

    const selectedTask = (e) => {
        const currentTask = document.getElementById('current-task');
        currentTask.innerText = e.target.innerText;
        let pickedTask = chosenProject.tasks.filter(task => task.title === e.target.innerText );
        console.log('picked', pickedTask, pickedTask[0]);
        chosenTask = Task(pickedTask[0]);
        inputDueDate.value = chosenTask.dueDate;
        inputNote.value = chosenTask.note;
        detailTask.classList.remove('d-none')
        console.log(e.target, chosenProject);
    }

    const editTask = () => {
        console.log('edit Task')
        chosenTask.dueDate = inputDueDate.value;
        chosenTask.note = inputNote.value;
        console.log('chosenProject before', chosenProject, chosenTask);
        for(let i=0; i< chosenProject.tasks.length; i+=1) {
            if (chosenProject.tasks[i].title === chosenTask.title) {
                chosenProject.tasks[i] = chosenTask;
                storage.update(chosenProject.title, chosenProject);
                return
            }
        }        
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
        btnAddTask.addEventListener('click',AddTaskToProject);
        projectTasks.addEventListener('click',selectedTask);
        btnEditTask.addEventListener('click', editTask);

    }

    return {
        loadListeners,
    }

})();

export default UI