import React from 'react';
import SortedByComponent from './sorted_by_component';

const DateTimeComponent = (props) => {
    let today = new Date();
    today = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    // debugger;
    let timeCompleted = 'non-completed';
    if (!props.errors.time) {
        timeCompleted = 'completed';
    }

    let dateCompleted = 'non-completed';
    if (!props.errors.date) {
        dateCompleted = 'completed';
    }

    return (
        <div className = 'datetime-container'>
            {/* <SortedByComponent {...props}/> */}
            <div className='datetime'>
                <div className='title'>
                    <i className="far fa-clock"></i>
                    Task Date & Time:
                </div>
                <input type="date" className = {`date ${dateCompleted}`}
                    placeholder = 'Please pick a date'
                    onChange={(e) => {props.handleChange('date', e)}}
                    />

                <select className= {`time ${timeCompleted}`}
                    onChange={(e) => {
                        props.handleChange('time', e)}}>

                    <option value="0">I'm Flexible</option>
                    <option value="8:00am">8:00am</option>
                    <option value="8:30am">8:30am</option>
                    <option value="9:00am">9:00am</option>
                    <option value="9:30am">9:30am</option>
                    <option value="10:00am">10:00am</option>
                    <option value="10:30am">10:30am</option>
                    <option value="11:00am">11:00am</option>
                    <option value="11:30am">11:30am</option>
                    <option value="12:00pm">12:00pm</option>
                    <option value="12:30pm">12:30pm</option>
                    <option value="1:00pm">1:00pm</option>
                    <option value="1:30pm">1:30pm</option>
                    <option value="2:00pm">2:00pm</option>
                    <option value="2:30pm">2:30pm</option>
                    <option value="3:00pm">3:00pm</option>
                    <option value="3:30pm">3:30pm</option>
                    <option value="4:00pm">4:00pm</option>
                    <option value="4:30pm">4:30pm</option>
                    <option value="5:00pm">5:00pm</option>
                    <option value="5:30pm">5:30pm</option>
                    <option value="6:00pm">6:00pm</option>
                    <option value="6:30pm">6:30pm</option>
                    <option value="7:00pm">7:00pm</option>
                    <option value="7:30pm">7:30pm</option>
                    <option value="8:00pm">8:00pm</option>
                    <option value="8:30pm">8:30pm</option>
                    <option value="9:00pm">9:00pm</option>
                    <option value="9:30pm">9:30pm</option>
                </select>
            </div>
        </div>
    )
}

export default DateTimeComponent;