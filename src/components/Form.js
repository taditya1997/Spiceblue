import React, { useState } from 'react';
import Task from './Task.js';
import List from './List.js'
import {useSelector} from "react-redux";
const Form = ( {taskButton, setTaskButton}) => {

    const[add,setAdd]=useState(false);
     const todos =useSelector(state=>state)
    const handleAdd=(event)=>
    {
     event.preventDefault();
     taskButton?setTaskButton(false):setTaskButton(true) ;
    }
    console.log(todos);
    return (
        
        
        <div className="heading">
        <div className="Taskcount">{`Task ${todos.length}`}</div>
        <button onClick={(event)=>{handleAdd(event)}}>+</button>
        <Task taskButton={taskButton} setTaskButton={setTaskButton} />
        </div>
        
    );
};


export default Form;