import React from 'react';

// t.string "first_name", null: false
// t.string "last_name", null: false
// t.string "email", null: false
// t.string "password_digest", null: false
// t.string "session_token", null: false
// t.datetime "created_at", null: false
// t.datetime "updated_at", null: false
// t.integer "zipcode", null: false
// t.boolean "is_tasker", default: false, null: false
// t.string "task_type"
// t.boolean "has_vehicle", default: false
// t.integer "num_completed_tasks"
// t.integer "num_reviews", default: 0
// t.integer "rating", default: 100
// t.float "price_per_hour"
// t.string "user_description"

const TaskerIndexItem = (props) => {

    const tasker = props.info;

    let completed = 'non-completed';
    if (!props.errors) {
        completed = 'completed';
    }

    return (
        <li className = {`tasker ${completed}`}>
            <div className='left-view-task-index'>
                <img src={tasker.image_url}/>
                <div className='button-profile'>
                    <div>Reviews & Profile</div>
                    <button className ='bottom-button' onClick = {() => props.handleChange('tasker_id','/task/confirm', tasker.id)}>Select & Continue</button>
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