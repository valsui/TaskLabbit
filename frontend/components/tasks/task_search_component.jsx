import React from 'react';

class TaskSearch extends React.Component{
    constructor(props){
        super(props);
    }
    
    render(){
        return (
            <div>
                <i className="fas fa-search"></i>
                <input className='search' type='text' placeholder='Search Task' />
            </div>
        )
    }
}

export default TaskSearch;