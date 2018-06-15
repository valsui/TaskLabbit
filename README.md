
# Task Labbit
![Logo](https://i.imgur.com/ArkWnb9.png)
Live-Demo: [Task-Labbit](https://task-labbit.herokuapp.com/#/)

Task-Labbit is an app for the busy-bee who needs help with common tasks. Users can schedule tasks and hire taskers through this app which is a clone of the popular website, Task Rabbit. The name Task-Labbit was inspired by the rabbit character designed by Kidrobot's Chief Creative Officer, Frank Koziak. It's trademark characteristic is its amazing mustache and its derrier. All images used in this clone belong to their respective owners. 

This project was built in within a two week time frame. It utilizes a Rails/PostgresSQL backend and a React.js/Redux frontend.

##  Features
* Secure frontend to backend authentication using BCrypt
* Ability to create a task based through search or button click
* Fill out task details
* Choose a tasker based on a location filter
* Confirm/Edit a task and view it the user's dashboard
* Ability to delete a task
* Ability to maintain pending task upon refresh

More advanced features such as sorting taskers by ratings and price, billing and payments, and styling upgrades are planned to be implemented in the future.

## Create a task and maintain upon refresh
The process of choosing a task to confirmation was displayed on multiple react routes but depended on the the one local state. One of the challenges that I faced was maintaining the task form information upon refresh. This ability was implemented by storing the task id in the window session storage in my reducer so that the task information could be fetched upon refresh and data would not be lost. This ability also allowed me to style the pages, otherwise, it would have been very difficult to since refreshing would clear always clear the state.
      
```javascript
const taskReducer = (state = {}, action) => {   
        ...
        case RECEIVE_TASK:
            sessionStorage.setItem('id', Object.values(action.payload.task)[0].id);
            return merge({}, state, action.payload.task);
        ...
    }
}
```
## Using redux to redirect user to login and confirmation 
Tasks can be started even when a user is not logged in but confirmation must require a user to be logged in. Redux was implemented to maintain a pending task in the redux state so that a user would be redirected back to the task confirmation page once the user logged in and back to the user's dashboard after confirmation. The pending task would be cleared with a separate action after the task was confirmed. 

```javascript 
// ui state that maintains pending task
    ui: {
      task: { 12: {
                    id: 12,
                    task_type: 'Web Design & Development',
                    tasker_id: 67
                    tasker: {...}
                   }
    },

// in Dashboard Component
    componentWillMount(){
        if(this.props.currentTask){
            this.props.history.push('/task/confirm');
        }
    }

// reducer action to destroy pending task so logged in user can see dashboard
const uiReducer = (state = defaultState, action) => {
    Object.freeze(state);
    switch(action.type){
        ...
        case REMOVE_PENDING_TASK:
            sessionStorage.removeItem('id');
            return {task: ''};
        ...
    }
}
```

# Task Search
A fuzzy search on the frontend was implemented so users to search through a variety of set tasks. This search component was utilized in both the main splash page as well as the user's dashboard.
![Task-Labbit Search](https://i.imgur.com/eKaK0pC.png)


