import Task from './task'

const Project = (title) => {
    let tasks = [];
    const getTitle = () => title;

    const getTasks = () => tasks;
    
    const addTask = (task) => {
        console.log(task.getTitle());
        tasks.push(task);
        console.log('list: ', tasks);
    }


    return {
        getTitle, addTask, getTasks
    }
}

export default Project