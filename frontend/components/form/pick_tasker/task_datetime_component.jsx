import React from 'react';
import SortedByComponent from './sorted_by_component';

const DateTimeComponent = (props) => {
    // debugger
    return (
        <div className = 'datetime-container'>
            <SortedByComponent {...props}/>
            <div className='datetime'>
                <input type="date" className = 'date-selector' 
                    onChange={(e) => {props.handleChange('date', e)}}/>

                <select className='time-selector' 
                    onChange={(e) => {
                        props.handleChange('time', e)}}>

                    <option value="0">I'm Flexible</option>
                    <option value="28800">8:00am</option>
                    <option value="30600">8:30am</option>
                    <option value="32400">9:00am</option>
                    <option value="34200">9:30am</option>
                    <option value="36000">10:00am</option>
                    <option value="37800">10:30am</option>
                    <option value="39600">11:00am</option>
                    <option value="41400">11:30am</option>
                    <option value="43200">12:00pm</option>
                    <option value="45000">12:30pm</option>
                    <option value="46800">1:00pm</option>
                    <option value="48600">1:30pm</option>
                    <option value="50400">2:00pm</option>
                    <option value="52200">2:30pm</option>
                    <option value="54000">3:00pm</option>
                    <option value="55800">3:30pm</option>
                    <option value="57600">4:00pm</option>
                    <option value="59400">4:30pm</option>
                    <option value="61200">5:00pm</option>
                    <option value="63000">5:30pm</option>
                    <option value="64800">6:00pm</option>
                    <option value="66600">6:30pm</option>
                    <option value="68400">7:00pm</option>
                    <option value="70200">7:30pm</option>
                    <option value="72000">8:00pm</option>
                    <option value="73800">8:30pm</option>
                    <option value="75600">9:00pm</option>
                    <option value="77400">9:30pm</option>
                </select>
            </div>
        </div>
    )
}

export default DateTimeComponent;