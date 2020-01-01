import storage from './js/storage'
import Task from './js/task'
import Project from './js/project'
console.log('Hey 2020');

const project1 = {
    name: 'My test Project',
    tasks:[
        {
            name: 'task number 1',
            description: 'this is desc number 1',
        },
        {
            name: 'task number 2',
            description: 'this is desc number 2',
        },
        {
            name: 'task number 3',
            description: 'this is desc number 3',
        },

    ]
}
const project2 = {
    name: 'My test Project 2',
    tasks:[
        {
            name: 'task number 1',
            description: 'this is desc number 1',
        },
        {
            name: 'task number 2',
            description: 'this is desc number 2',
        },
        {
            name: 'task number 3',
            description: 'this is desc number 3',
        },

    ]
}
const project3 = {
    name: 'My test Project 3',
    tasks:[
        {
            name: 'task number 1',
            description: 'this is desc number 1',
        },
        {
            name: 'task number 2',
            description: 'this is desc number 2',
        },
        {
            name: 'task number 3',
            description: 'this is desc number 3',
        },

    ]
}
/*
//console.log(project);
//localStorage.setItem('my name', JSON.stringify(project));
console.log(storage.create(project1.name, project1.tasks)); //true
console.log(storage.create(project2.name, project2.tasks)); // false
console.log(storage.create(project3.name, project3.tasks)); // false
//console.log(storage.read(project1.name)); // data array tasks
const data = storage.read(project1.name); // store in data
// console.log(data); //check data
data[0].name = 'task number 1 UPDATED';
console.log(storage.update(project1.name, data)); //update localstorage
console.log(storage.read(project1.name)); // check new update data
console.log(storage.remove(project1.name));
/*
console.log('updated',data); //update data
*/

const newTask = Task('Task 2020','');
const newPrj = Project('New Project 1');
console.log(newTask.getTitle());
const submit = document.getElementById('save');
submit.addEventListener('click', ()=>{
    const dueDate = document.getElementById('date1');
    newTask.dueDate = dueDate.value;
    console.log('This is the date', newTask.getDueDate());
    newPrj.addTask(newTask);
    storage.create(newPrj.getTitle(), newPrj.getTasks());
});
