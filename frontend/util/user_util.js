//fetchUser
export const fetchUser = (userId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
}

//fetchUsers
export const fetchTaskers = (taskType) => {
    return $.ajax({
        method: 'GET',
        url:'/api/users',
        data: {user: {task_type: taskType}}
    })
}