import React, { useState, useEffect } from 'react'

export const Todo = ({ render, setRender }) => {
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

    var today = curHour + ":" + curMinute + "." + curSeconds + " " + dayOfWeek.substring(0, 3) + " " + curMonth.substring(0, 3) + " " + dayOfMonth + " " + curYear;

    const [data, setData] = useState([]);
    const [Loading, setLoading] = useState(true);

    const handleDelete = (id) => {
        fetch('/.netlify/functions/delete-todo', {
            method: 'post',
            body: JSON.stringify(id)
        })
        setRender(true);
    }

    useEffect(() => {
        fetch('/.netlify/functions/read-todo')
            .then(response => response.json())
            .then(data => {
                setData(data)
                setLoading(false)
            })
            .catch(err => console.log(err));
        setRender(false);
    }, [render])

    const editPopup = (id) => {
        const value = prompt("enter new value");
        if (value !== "") {
            const data = {
                id,
                date: today,
                name: value
            };
            fetch('/.netlify/functions/update-todo', {
                method: 'post',
                body: JSON.stringify(data)
            });
            setRender(true);
        }
        else {
            alert("cannot be empty");
        }
    }

    return (
        <div>
            {
                Loading ?
                    <h1>Loading...</h1>
                    :
                    data &&
                    data.map((Data, index) =>
                        <div className="todo" key={index}>
                            <p style={{ marginLeft: '10px', fontWeight: '700', color: '#4195c7' }}>{Data.data.name}</p>
                            <p style={{ color: 'GrayText' }}>{Data.data.date}</p>
                            <div className="buttonFlex">
                                <form onSubmit={() => editPopup(Data.id)}>
                                    <button type="submit" className="edit-button">edit</button>
                                </form>
                                <form onSubmit={() => handleDelete(Data.id)}>
                                    <button type="submit" className="del-button">del</button>
                                </form>
                            </div>
                        </div>
                    )
            }
        </div>

    )
}
