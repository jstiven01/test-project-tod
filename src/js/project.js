import Task from './task'

const Project = ({title, tasks = []}) => {
    
    const addTask = (task) => {
        console.log(task.title);
        tasks.push(task);
        console.log('list: ', tasks);
    }


    return {
        addTask, title, tasks
    }
}

export default Project