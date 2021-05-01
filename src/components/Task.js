import React, { useContext, useEffect, useState } from 'react';

import { addTodo, deleteTodo, editTodo } from '../actions';
import { useDispatch } from 'react-redux';

const Task = ({ taskButton, setTaskButton, todo, editTask, setEdit }) => {


    console.log(todo);
    const [id, setId] = useState(todo ? todo.id : "")
    const [task, setTask] = useState(todo ? todo.task : "");
    const [date, setDate] = useState(todo ? todo.date : "");
    const [time, setTime] = useState(todo ? todo.time : "");
    const [user, setUser] = useState(todo ? todo.user : "");
    

    const dispatch = useDispatch();
    // const { todos } = useContext(GlobalContext);
    //const { deleteTodo } = useContext(GlobalContext)




    // console.log(task)
    // console.log(date);
    // console.log(time);



    const handleSubmit = () => {
        //.preventDefault();

        // if (todo) {
        //     const newTodo =
        //     {
        //         id: id,
        //         task: task,
        //         date: date,
        //         time: time,
        //         user: user,
        //     }
        //     dispatch(editTodo(newTodo));


        //     handleButton.bind();
        //     handleEdittask.bind();
        //     return ()=>{

        //         handleButton.unbind_all();
        //         handleEdittask.unbind_all();
        //     }
        // }



        const newTodo =
        {
            id: Math.random(),
            task: task,
            date: date,
            time: time,
            user: user,
        }
        console.log(newTodo)

        dispatch(addTodo(newTodo));

        setUser("");
        setTask("");
        setId("");
        setTime("");
        setDate("");


       handleButton();

       //handleEdittask();

        // return () => {

        //     handleButton.unbind_all();
        //     handleEdittask.unbind_all();
        // }




        // if (todo) {


        // }
        // else {
        //     handleButton();
        //     return () => {

        //         handleEdittask.unbind_all();

        //     }
        // }



    }

    const  handleButton = () =>{

        setTaskButton(taskButton?false:false);
   }
    const handleEdittask = () =>{

        setEdit(false);
           
    }
    const handleDelete=()=>{
       

        if (todo) {
            dispatch(deleteTodo(todo.id));
            handleEdittask();
            return () => {

                handleButton.unbind_all();
               
            }


        }
        handleButton(taskButton);
       

        return () => {

            handleButton.unbind_all();
           
        }


    }
    const handleCancel = (event) => {
        event.preventDefault();


        if (todo) {
            handleButton();
            //  return ()=>{
            //      handleButton.unbind_all();
            //  }

        }



    }
    const handleEdit =()=>{

        

        const newTodo =
        {
            id: id,
            task: task,
            date: date,
            time: time,
            user: user,
        }
        dispatch(editTodo(newTodo));


        handleButton();
        handleEdittask();

        

        // return ()=>{

        //     handleEdittask.unbind_all();
        //     handleButton.unbind_all();

        // }

    }
    // if (editTask) {
    //     return (
    //         <div className=" " >
    //             <div className="description">
    //                 <label>Task Description</label>
    //                 <input type="text" value={task} placeholder="Description" onChange={(event) => { setTask(event.target.value) }} />
    //             </div>
    //             <div className="date">
    //                 <label>Date</label>
    //                 <input type="date" value={date} onChange={(event) => { setDate(event.target.value) }} />
    //             </div>
    //             <div className="time">
    //                 <label>Time</label>
    //                 <input type="time" value={time} onChange={(event) => { setTime(event.target.value) }} />
    //             </div>
    //             <div className="assignuser">
    //                 <label>Assign User</label>
    //                 <input type="text" placeholder="Assign User" value={user} onChange={(event) => { setUser(event.target.value) }} />

    //             </div>
    //             <div>
    //                 <button className="delete-button" onClick={(event) => handleDelete(event)}>Delete</button>
    //             </div>
    //             <div className="buttons">
    //                 <button onClick={(event) => { handleCancel(event) }}>Cancel</button>
    //                 <button onClick={(event) => handleSubmit(event)}>Submit</button>
    //             </div>
    //         </div>
    //     )
    // }

    if (editTask ||taskButton) {
        return (
            <div className="task ">
                <div className="description">
                    <label>Task Description</label>
                    <input type="text" value={task} placeholder="Description" onChange={(event) => { setTask(event.target.value) }} />
                </div>
                <div className='date-time'>
                <div className="date">
                    <label>Date</label>
                    <input type="date" value={date} onChange={(event)=>{setDate(event.target.value) }} />
                </div>
                <div className="time">
                    <label>Time</label>
                    <input type="time" value={time} onChange={(event)=>{setTime(event.target.value) }} />
                </div>
                </div>
                <div className="assignuser">
                    <label>Assign User</label>
                    <input type="text" placeholder="Assign User" value={user} onChange={(event) => { setUser(event.target.value) }} />

                </div>
                <div className="allbuttons">
                <div>
                    <button className="delete-button" onClick={() => handleDelete()}>Delete</button>
                </div>
                <div className="buttons">
                    <button onClick={(event) => handleCancel(event)}>Cancel</button>
                    <button onClick={() =>{taskButton?handleSubmit():handleEdit()} }>Submit</button>
                </div>
                </div>
            </div>
        )
    }
    // if (taskButton) {
    //     return (
    //         <>
    //         <div className="task">
    //             <div className="description">
    //                 <label>Task Description</label>
    //                 <input type="text" value={task} placeholder="Description" onChange={(event)=>{setTask(event.target.value) }} />
    //             </div>
    //             <div className="date">
    //                 <label>Date</label>
    //                 <input type="date" value={date} onChange={(event)=>{ setDate(event.target.value) }} />
    //             </div>
    //             <div className="time">
    //                 <label>Time</label>
    //                 <input type="time" value={time} onChange={(event)=>{ setTime(event.target.value) }} />
    //             </div>
    //             <div className="assignuser">
    //                 <label>Assign User</label>
    //                 <input type="text" placeholder="Assign User" value={user} onChange={(event)=>{ setUser(event.target.value) }} />

    //             </div>
    //             <div>
    //                 <button className="delete-button" onClick={(event)=>handleDelete(event)}>Delete</button>
    //             </div>
    //             <div className="buttons">
    //                 <button onClick={(event)=>handleCancel(event)}>Cancel</button>
    //                 <button onClick={()=>handleSubmit()}>Submit</button>
    //             </div>
    //         </div>
    //         </>
    //     )
    // }
    return (
        null
    )


};


export default Task;