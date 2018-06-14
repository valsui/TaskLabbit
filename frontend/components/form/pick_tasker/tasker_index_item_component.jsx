import React from 'react';

const TaskerIndexItem = (props) => {

    const tasker = props.info;

    let completed = 'non-completed';
    if (!props.errors) {
        completed = 'completed';
    }
    return (
        <li className = {`tasker ${completed}`}>
            <div className='left-view-task-index'>
                <img src={tasker.image_url} />
                <div className='button-profile'>
                    <div>Reviews & Profile</div>
                    <button className='bottom-button' onClick={() => {
                            props.handleChange('tasker_id', '/task/confirm', tasker.id);
                        }} >
                        Select & Continue
                        </button>
            </div>
            {props.renderSubError()}
            </div>
            <div className = 'right-view-task-index'>
                <div className = 'right-top'>
                    <div className='tasker-name-price'>
                        <div className='name'>{`${tasker.first_name} ${tasker.last_name}`}</div>
                        <div className='price'>{`$ ${tasker.price_per_hour} /hr`}</div>
                    </div>
                    <div className='ratings'>
                        <div className = 'completed-tasks'>
                            <i className="far fa-check-square"></i>
                            <span>{`${tasker.num_completed_tasks} Completed Tasks`}</span>
                        </div>
                        <div className = 'reviews'>
                            <i className="far fa-thumbs-up"></i>
                            <span>{`${tasker.num_reviews} Reviews: ${tasker.rating}% Positive`}</span>
                        </div>
                    </div>
                </div>
                <div className = 'right-bottom'>
                    <div className='help-1'>How I can help:</div>
                    <div className = 'help'>{tasker.user_description}</div>
                </div>
            </div>
        </li>
    )
};

export default TaskerIndexItem;