import { compareAsc, format } from 'date-fns'
const Task = (title, dueDate) => {

    const getTitle = () => title;

    const getDueDate = () => dueDate;

    return {
        getTitle, getDueDate, title, dueDate,
    }
}

export default Task