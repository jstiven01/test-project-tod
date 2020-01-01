import storage from './js/storage'
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

//console.log(project);
//localStorage.setItem('my name', JSON.stringify(project));
console.log(storage.create(project1.name, project1.tasks)); //true
console.log(storage.create(project1.name, project1.tasks)); // false
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
