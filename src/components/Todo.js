import React from 'react'
import editTodo from './editTodo';

export const Todo = () => {

    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const data = [{ name: 'asd', date: '12:12.4 Feb 12 2020', id: 123 }, { name: 'add', date: '12:12.4 Feb f2 2020', id: 1233 }]

    return (
        <div>
            {
                data.map((Data, index) =>
                    <div className="todo" key={index}>
                        <p style={{ marginLeft: '10px', fontWeight: '700', color: '#4195c7' }}>{Data.name}</p>
                        <p style={{ color: 'GrayText' }}>{Data.date}</p>
                        <div className="buttonFlex">
                            <button className="edit-button" onClick={() => { togglePopup }}>edit</button>
                            <button className="del-button">del</button>
                        </div>
                        {isOpen && <editTodo/>}
                    </div>
                )
            }
        </div>

    )
}
