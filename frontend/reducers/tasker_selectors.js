import merge from 'lodash/merge';
import parser from 'parse-address';

//get all taskers from users slice of state
export const getTaskers = (state) => {
    let taskers = merge({}, state.entities.users);
    // debugger;
    if(state.session.currentUser){
        delete taskers[state.session.currentUser.id]
    }
    return Object.values(taskers);
} 

//this might not have many results
export const getByCurrentLocation = (state) => {
    const currentTask = Object.values(state.ui.task)[0];
    // debugger;
    if(typeof(currentTask) === 'object'){
        // debugger;
        const address = parser.parseAddress(currentTask.location);
        const zipcode = parser.parseAddress(currentTask.location).zip;
        const taskers = getTaskers(state);
        let result = [];
        taskers.forEach((x) => {
            if(parseInt(x.zipcode) === parseInt(zipcode)){
                result.push(x);
            }
        })
        return result;
    }else{
        return [];
    }
}

//sort by price per hour
export const sortByPrice = (store) => {
    const taskers = Object.values(state.entities.users);
    return taskers.sort((a,b) => a.price_per_hour - b.price_per_hour);
}

//sort by rating
export const sortByRating = (store) => {
    const taskers = Object.values(state.entities.users);
    return taskers.sort((a, b) => a.rating - b.rating);
}

//sort by number of reviews

export const sortByReviews = (store) => {
    const taskers = Object.values(state.entities.users);
    return taskers.sort((a, b) => a.reviews - b.reviews);
}