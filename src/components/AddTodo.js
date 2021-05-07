import React, { useState} from 'react';
import './components.css';

export const AddTodo = () => {

    const [title, setTitle] = useState("");

    var objToday = new Date(),
	weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
	dayOfWeek = weekday[objToday.getDay()],
	dayOfMonth = objToday.getDate(),
	months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear(),
    curHour = objToday.getHours() > 12 ? objToday.getHours() - 12 : (objToday.getHours() < 10 ? "0" + objToday.getHours() : objToday.getHours()),
	curMinute = objToday.getMinutes() < 10 ? "0" + objToday.getMinutes() : objToday.getMinutes(),
	curSeconds = objToday.getSeconds() < 10 ? "0" + objToday.getSeconds() : objToday.getSeconds()
	
    var today = curHour + ":" + curMinute + "." + curSeconds + " " + dayOfWeek.substring(0,3) + " " + curMonth.substring(0,3) + " " + dayOfMonth + " " + curYear;

    const Todo = {
        name: title,
        date: today,
        id: Math.floor(Math.random() * 100000000) + 1
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        setTitle('');
    }
    
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter name" name="Enter name" value={title} className="input" onChange={(e) => { setTitle(e.target.value) }} required />
                <button type="submit" className="add-button button">Create Todo</button>
            </form>
        </div>
    )
}
