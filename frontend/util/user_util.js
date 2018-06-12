//fetchUser
export const fetchUser = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
}

//fetchTasker based on task type
export const fetchTaskers = (taskType) => {
    return $.ajax({
        method: 'GET',
        url:'/api/users',
        data: {user: {task_type: taskType}}
    })
}