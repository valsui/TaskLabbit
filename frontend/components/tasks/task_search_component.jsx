import React from 'react';

class TaskSearch extends React.Component{
    constructor(props){
        super(props);
        this.state = {
                search: '',
                foundTasks: ['Minor Home Repairs', 'Mounting & Installation', 'Furniture Assembly', 'Moving & Packing'] 
            };
        this.displayList = this.displayList.bind(this);
        this.chooseTask = this.chooseTask.bind(this);
        // debugger;
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
        return matches;
    }

    handleChange(){
        return (e) => this.setState({search: e.target.value.toLowerCase()})
    }

    //handler on click displays the found tasks
    displayList(){

    }

    //handles the action to set global ui state , only should work when clicking on li
    chooseTask(e){
        const task = e.currentTarget.innerText;

        if(task){
            this.setState({search: this.capitalize(task)});
            this.props.addTasktoUI(this.capitalize(task));
            this.props.history.push('/task/new');
        }
    }

    capitalize(string){
        let search = string.split(" ");
        return search.map((s) => `${s[0].toUpperCase()}${s.slice(1).toLowerCase()}`).join("");
    }

    render(){
        const results = this.findMatches().map((t) => {
            return (<li key={t}
                className='search-task-result'
                onClick={() => this.chooseTask(t)}>
                {t}
            </li>)
        })

        return (
            <div>
                <i className="fas fa-search"></i>
                <input 
                    className='search' 
                    type='text' value = {this.state.search} 
                    placeholder='Search Task' 
                    onChange = {this.handleChange()}
                    onClick={this.displayList} />
                <ul className='search-list-items'>
                    {results}
                </ul>
            </div>
        )
    }
}

export default TaskSearch;