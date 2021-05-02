import React from "react";

const EditTodo = (props) => {
    return (
        <div className="popup-box">
            <div className="box">
                <b>Enter new name</b>
                <br/>
                <input type="text" className="reinput" placeholder="Enter name" />
                <br/>
                <div style={{marginTop: '20px'}}>
                    <button className="add-button button" onClick={props.handleClose}>update</button>
                    <button className="cancel-button button" onClick={props.handleClose}>cancel</button>
                </div>
            </div>
        </div>
    );
};

export default EditTodo;