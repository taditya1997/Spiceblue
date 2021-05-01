import React, { useContext, useState } from 'react';
import { editTodo } from '../actions';
import Task from './Task';

const TodoItem = ({ todo, taskButton, setTaskButton }) => {


    const [editTask, setEdit] = useState(false);


    const handleEdit = (event) => {
        event.preventDefault();


        editTask ? setEdit(false) : setEdit(true);

    }

    return (
        <div className="items">
            {!editTask ?
                <div className="Todo-Section">
                    <div className="first">
                        <label>{todo.task}</label>
                        <label>{todo.user}</label>
                    </div>
                    <div className="second">
                        <label>{todo.date}</label>
                        <label>{todo.time}</label>
                    </div>
                    <div className="third">
                        <button onClick={(event) => handleEdit(event)}>Edit</button>
                        <button>Save</button>
                    </div>
                </div> : <Task todo={todo} editTask={editTask} taskButton={taskButton} setTaskButton={setTaskButton} setEdit={setEdit} />}
        </div>
    );
};



export default TodoItem;