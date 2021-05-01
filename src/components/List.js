import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from 'react-redux';
const List = ({taskButton, setTaskButton}) => {
    const todos = useSelector(state => state);
    console.log(todos)
    return (<div className="todos_assigned">
        {todos.map((todo) => (<TodoItem todo={todo} taskButton={taskButton} setTaskButton={setTaskButton} /> ))}
        </div>
           
    );
};


export default List;