import React, {useState, useEffect} from 'react'
import EditTodo from './editTodo';
import api from "../utils/api";

export const Todo = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);

    const togglePopup = () => {
        setIsOpen(true);
    }

    const handleClose = () => {
        setIsOpen(false);
    }

    useEffect(() => {
        fetch("/.netlify/functions/todos-read-all").then((result) => {
          result.json().then((todo) => {
            setData(todo);
            console.log(todo);
          });
        });
      }, []);
console.log(data);
    return (
        <div>
            {data &&
                data.map((Data, index) =>
                    <div className="todo" key={index}>
                        <p style={{ marginLeft: '10px', fontWeight: '700', color: '#4195c7' }}>{Data.name}</p>
                        <p style={{ color: 'GrayText' }}>{Data.date}</p>
                        <div className="buttonFlex">
                            <button className="edit-button" onClick={togglePopup}>edit</button>
                            <button className="del-button">del</button>
                        </div>
                        {isOpen && <EditTodo handleClose={handleClose}/>}
                    </div>
                )
            }
        </div>

    )
}
