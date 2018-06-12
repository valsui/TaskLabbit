import React from 'react';
// import PlacesAutocomplete from 'react-places-autocomplete';
// import { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete'

const TaskLocation = (props) => {
    let completed = 'non-completed';
    if (!props.errors) {
        completed = 'completed';
    }
    return (
        <div className={`task-details-subform ${completed}`}>
            <form className='task-location-text-form'>
                <div className='sub-form-title'>
                    <strong> YOUR TASK LOCATION </strong> 
                    {props.renderSubError('location')}
                    <i className={`far fa-check-circle ${completed}`}></i>
                </div>
                <input className='task-location-text-input' type="text" placeholder='Enter street address' onChange = {(e) => props.handleChange('location', e)}/>
                <div className='button-container'>
                    <button className='continue-button'
                        onClick={(e) => props.handleErrorSubmit('location', '', e)}>
                            Continue</button>
                </div>
            </form>
        </div>
    )
}

export default TaskLocation;