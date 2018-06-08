import React from 'react';
import TaskSearch from './task_search_component';
import { connect } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
      tasks: state.entities.tasks
    }
}

export default connect(mapStateToProps, null)(TaskSearch);
