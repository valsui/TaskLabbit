import React from 'react';
import TaskSearch from './task_search_component';
import { connect } from 'react-redux';
import { addTasktoUI } from '../../actions/task_button_action';
import { withRouter } from 'react-router-dom';


const mapStateToProps = (state, ownProps) => {
    return {
      tasks: state.entities.tasks.map((t) => t.toLowerCase())
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTasktoUI: (task) => dispatch(addTasktoUI(task))
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TaskSearch));
