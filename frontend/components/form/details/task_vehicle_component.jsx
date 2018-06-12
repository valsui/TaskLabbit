import React from 'react';

const TaskVehicle = (props) => {
    let completed = 'non-completed';
    if(!props.errors){
        completed = 'completed';
    }
    return (
        <div className = {`task-details-subform ${completed}`}>
                <div className='vehicle-container'>
                    <div className = 'sub-form-title'>
                        <strong> VEHICLE REQUIREMENTS </strong>
                        {props.renderSubError('need_vehicle')}
                        <i className={`far fa-check-circle ${completed}`}></i>
                    </div>   
                    <div className='radio-buttons'>
                        <div className='vehicle-radio-container-1'>
                            <input type="radio" 
                                    className='vehicle-radio-button' 
                                    value='Not needed for task'
                                    checked={props.need_vehicle === 'Not needed for task'}
                                    onChange = {(e) => props.handleChange('need_vehicle', e)}/>
                            <label className='vehicle-radio-button-label'>Not needed for task</label>
                        </div>
                        <div className='vehicle-radio-container-2'>
                            <input type="radio" 
                                    className='vehicle-radio-button'
                                    value='Task Requires a car'
                                    checked={props.need_vehicle === 'Task Requires a car'}
                                    onChange={(e) => props.handleChange('need_vehicle', e)} />
                            <label className='vehicle-radio-button-label'>Task Requires a car</label>
                        </div>
                        <div className='vehicle-radio-container-3'>
                            <input type="radio" 
                                className='vehicle-radio-button'
                                value='Task Requires a truck'
                                checked={props.need_vehicle === 'Task Requires a truck'}
                                onChange={(e) => props.handleChange('need_vehicle', e)} />
                            <label className='vehicle-radio-button-label'>Task Requires a truck</label>
                        </div>
                    </div>
                        <div className= 'button-container'>
                            <button className= 'continue-button' 
                                    type="submit"
                        onClick={(e) => props.handleErrorSubmit('need_vehicle', '', e)}>
                                    Continue</button>
                        </div>
                </div>
            </div>
        )
    }
    
    export default TaskVehicle;