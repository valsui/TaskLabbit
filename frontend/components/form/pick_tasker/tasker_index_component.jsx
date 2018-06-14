import React from 'react';
import TaskerIndexItem from './tasker_index_item_component';
import parser from 'parse-address';
import { withRouter } from 'react-router-dom';


class TaskerIndex extends React.Component{
    constructor(props){
        super(props);

        this.goBackTo = this.goBackTo.bind(this);
    }

    goBackTo(path, e){
        e.preventDefault();
        this.props.history.push(path);
    }

    render(){

        // debugger;
        let zipcode = '';
        if (this.props.currentState) {
            zipcode = parser.parseAddress(this.props.currentTask.location).zip;
        }

        const response = (taskers) => {
            const length = taskers.length;
            console.log('taskers found:', taskers);
            if (length < 1) {
                sessionStorage.removeItem('id');
                return <div className='no-found-taskers'>
                    <img className = 'no-found-pic'
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iNzUiIGhlaWdodD0iNjYiIHZpZXdCb3g9IjAgMCA3NSA2NiI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYSIgd2lkdGg9IjU1IiBoZWlnaHQ9IjQ1Ljk2OSIgeT0iMy4wMzEiIHJ4PSIuNSIvPgogICAgICAgIDxwYXRoIGlkPSJiIiBkPSJNLjUgMy4wM2g1NGEuNS41IDAgMCAxIC41LjV2MTQuMTVIMFYzLjUzYS41LjUgMCAwIDEgLjUtLjV6Ii8+CiAgICAgICAgPGVsbGlwc2UgaWQ9ImMiIGN4PSI0Mi45MTciIGN5PSI4LjU4OCIgcng9IjIuMDE4IiByeT0iMi4wMjEiLz4KICAgICAgICA8ZWxsaXBzZSBpZD0iZCIgY3g9IjEyLjA4MyIgY3k9IjguNTg4IiByeD0iMi4wMTgiIHJ5PSIyLjAyMSIvPgogICAgPC9kZWZzPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBzdHJva2U9IiNDQkVEQzAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik03My45NzEgMjEuNDg2YzAgMTEuMzE0LTkuMTcxIDIwLjQ4NS0yMC40ODYgMjAuNDg1QzQyLjE3MiA0MS45NzEgMzMgMzIuOCAzMyAyMS40ODZTNDIuMTcyIDEgNTMuNDg1IDFDNjQuOCAxIDczLjk3MSAxMC4xNzIgNzMuOTcxIDIxLjQ4NnpNNTIuOTIgMi4wMTJ2NC4wNU03My4xNjcgMjEuNzUzaC0zLjU0M00zMy4xOCAyMS43NTNoMy41NDNNMzguNTM5IDguMjU3bDIuMzQ2IDIuMzQ2TTY4LjUwNiA3LjkzN2wtMi4zNDYgMi4zNDZNMzguNTM5IDM1LjYwM2wyLjM0Ni0yLjM0Nk02OC41MDYgMzUuMjgzbC0yLjM0Ni0yLjM0Nk02MS4wMTkgMjEuNzUzaC03LjU5M001My40MjYgMTAuMTExdjExLjEzNiIvPgogICAgICAgIDwvZz4KICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDE2KSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2EiLz4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjU2IiBoZWlnaHQ9IjQ2Ljk2OSIgeD0iLS41IiB5PSIyLjUzMSIgc3Ryb2tlPSIjNDM4RTI5IiByeD0iLjUiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0NCRURDMCIgZD0iTTAgMTcuNjhoNS4wNDZWNDlILjVhLjUuNSAwIDAgMS0uNS0uNVYxNy42OHoiLz4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjUuMDQ2IiBoZWlnaHQ9IjUuMDUyIiB4PSI4LjU4NyIgeT0iMjIuMjI3IiBmaWxsPSIjRkZGIiBzdHJva2U9IiM0MzhFMjkiIHJ4PSIuNSIvPgogICAgICAgICAgICA8cmVjdCB3aWR0aD0iNS4wNDYiIGhlaWdodD0iNS4wNTIiIHg9IjguNTg3IiB5PSIzMC44MTQiIGZpbGw9IiNGRkYiIHN0cm9rZT0iIzQzOEUyOSIgcng9Ii41Ii8+CiAgICAgICAgICAgIDxyZWN0IHdpZHRoPSI1LjA0NiIgaGVpZ2h0PSI1LjA1MiIgeD0iOC41ODciIHk9IjM5LjQwMiIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjNDM4RTI5IiByeD0iLjUiLz4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjUuMDQ2IiBoZWlnaHQ9IjUuMDUyIiB4PSIxNy4xNjUiIHk9IjIyLjIyNyIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjNDM4RTI5IiByeD0iLjUiLz4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjUuMDQ2IiBoZWlnaHQ9IjUuMDUyIiB4PSIxNy4xNjUiIHk9IjMwLjgxNCIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjNDM4RTI5IiByeD0iLjUiLz4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjUuMDQ2IiBoZWlnaHQ9IjUuMDUyIiB4PSIxNy4xNjUiIHk9IjM5LjQwMiIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjNDM4RTI5IiByeD0iLjUiLz4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjUuMDQ2IiBoZWlnaHQ9IjUuMDUyIiB4PSIyNS43NDMiIHk9IjIyLjIyNyIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjNDM4RTI5IiByeD0iLjUiLz4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjUuMDQ2IiBoZWlnaHQ9IjUuMDUyIiB4PSIyNS43NDMiIHk9IjMwLjgxNCIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjNDM4RTI5IiByeD0iLjUiLz4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjUuMDQ2IiBoZWlnaHQ9IjUuMDUyIiB4PSIyNS43NDMiIHk9IjM5LjQwMiIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjNDM4RTI5IiByeD0iLjUiLz4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjUuMDQ2IiBoZWlnaHQ9IjUuMDUyIiB4PSIzNC4zMjEiIHk9IjIyLjIyNyIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjNDM4RTI5IiByeD0iLjUiLz4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjUuMDQ2IiBoZWlnaHQ9IjUuMDUyIiB4PSIzNC4zMjEiIHk9IjMwLjgxNCIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjNDM4RTI5IiByeD0iLjUiLz4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjUuMDQ2IiBoZWlnaHQ9IjUuMDUyIiB4PSIzNC4zMjEiIHk9IjM5LjQwMiIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjNDM4RTI5IiByeD0iLjUiLz4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjUuMDQ2IiBoZWlnaHQ9IjUuMDUyIiB4PSI0Mi44OTkiIHk9IjIyLjIyNyIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjNDM4RTI5IiByeD0iLjUiLz4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjUuMDQ2IiBoZWlnaHQ9IjUuMDUyIiB4PSI0Mi44OTkiIHk9IjMwLjgxNCIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjNDM4RTI5IiByeD0iLjUiLz4KICAgICAgICAgICAgPHJlY3Qgd2lkdGg9IjUuMDQ2IiBoZWlnaHQ9IjUuMDUyIiB4PSI0Mi44OTkiIHk9IjM5LjQwMiIgZmlsbD0iI0ZGRiIgc3Ryb2tlPSIjNDM4RTI5IiByeD0iLjUiLz4KICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cGF0aCBzdHJva2U9IiM0MzhFMjkiIGQ9Ik0uNSAyLjUzaDU0YTEgMSAwIDAgMSAxIDF2MTQuNjVoLTU2VjMuNTNhMSAxIDAgMCAxIDEtMXoiLz4KICAgICAgICAgICAgPHBhdGggZmlsbD0iI0NCRURDMCIgZD0iTTAgM2g1NXYxNC42NUguNWEuNS41IDAgMCAxLS41LS41VjN6Ii8+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2MiLz4KICAgICAgICAgICAgPGVsbGlwc2UgY3g9IjQyLjkxNyIgY3k9IjguNTg4IiBzdHJva2U9IiM0MzhFMjkiIHJ4PSIyLjUxOCIgcnk9IjIuNTIxIi8+CiAgICAgICAgICAgIDxnPgogICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRkZGIiB4bGluazpocmVmPSIjZCIvPgogICAgICAgICAgICAgICAgPGVsbGlwc2UgY3g9IjEyLjA4MyIgY3k9IjguNTg4IiBzdHJva2U9IiM0MzhFMjkiIHJ4PSIyLjUxOCIgcnk9IjIuNTIxIi8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPHBhdGggc3Ryb2tlPSIjNDM4RTI5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIGQ9Ik0xMi4wODMgNS44MVYwTTQyLjkxNyA1LjgxVjAiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo=" />
                    <div> {`Sorry, there are no tasker labbits currently available in your area for your task. Please select a new task or move to a different address and try again.`} </div>
                    <div className='button-navs'>
                    <button className = 'bottom-button' onClick = {(e) => this.goBackTo('/', e)}> Back To Main </button>
                    </div>
                </div>
            } else {
                return <div className='found-taskers'>{`Good news! We found ${length} labbits available in your area for your task`}</div>
            }
        }

        return (
            <div className = 'task-index-container'>
                {response(this.props.taskers)}
                <ul className = 'taskers-list'>
                    {this.props.taskers.map((tasker) => {
                        return <TaskerIndexItem key={tasker.id}
                            info={tasker}
                            handleChange={this.props.handleChange}
                            errors = {this.props.errors} 
                            renderSubError={this.props.renderSubError}/>
                    })}
                </ul>
            </div>
        )
    }
}

export default withRouter(TaskerIndex);