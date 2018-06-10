import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class TaskSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                search: '',
                foundTasks: ['Minor Home Repairs', 'Mounting & Installation', 'Furniture Assembly', 'Moving & Packing'] //default
            };
        
        this.chooseTask = this.chooseTask.bind(this);
    }

    fuzzySearch(string, query){
        if (query.length === 0) return true;
        const index = string.indexOf(query[0]);
        if (index === -1) return false;
        return this.fuzzySearch(string.slice(index+1), query.slice(1));
    }

    findMatches(){
        let matches = [];
        if (this.state.search.length === 0){
            matches = this.state.foundTasks;
        }else{
            let query = this.state.search;
            this.props.tasks.forEach((t) => {
                if(this.fuzzySearch(t, query)){
                    matches.push(t);
                }
            })
        }
        if (matches.length > 6){
            matches = matches.slice(0,6);
        }
        return matches;
    }

    handleChange(){
        return (e) => this.setState({search: e.target.value.toLowerCase()})
    }

    //handles the action to set global ui state , only should work when clicking on li
    chooseTask(e){
        const task = e.target.innerText;
        // debugger;
        if(task){
            this.setState({search: this.capitalize(task)});
            this.props.addTasktoUI(this.capitalize(task));
            this.props.history.push('/task/new');
        }
    }

    capitalize(string){
        let search = string.split(" ");
        return search.map((s) => `${s[0].toUpperCase()}${s.slice(1).toLowerCase()}`).join(" ");
    }

    render(){
        const results = this.findMatches().map((t) => {
            return (<li key={t}
                className='search-task-result'
                onClick={(e) => this.chooseTask(e)}>
                <img className='search-task-img' src= 'https://images-na.ssl-images-amazon.com/images/I/31-26Ts4UVL.jpg' />
                <span>{this.capitalize(t)}</span>
            </li>)
        })

        return (
            <div className='main-search-container'>
                <div className = 'search-box' >
                <i className="fas fa-search"></i>
                <input 
                    className='search-box-input' 
                    type='text' value = {this.state.search} 
                    placeholder='Need Something Different?' 
                    onChange = {this.handleChange()}
                    />
                </div>
                <ul className='search-list-items'>
                    <ReactCSSTransitionGroup
                        transitionName='auto'
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={500}>
                        {results}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        )
    }
}

export default TaskSearch;