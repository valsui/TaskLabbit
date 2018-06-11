//to create a task
export const createTask = (task) => {
    return $.ajax({
        method: 'POST',
        url: '/api/tasks',
        data: task
    })
}

//to update a task
export const updateTask = (task) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/tasks/${task.id}`,
        data: task
    })
}


//to delete a task 
export const deleteTask = (taskId) => {
    return $.ajax({
        method: 'DELETE',
        url: `/api/tasks/${taskId}`
    })
}

//retrieve task 
export const fetchTask = (taskId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/tasks/${taskId}`
    })
}

//retrieve tasks
export const fetchTasks = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/tasks'
    })
}