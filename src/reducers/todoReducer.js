import { ADD_TODO, DELETE_TODO, EDIT_TODO } from '../actions/contants';

const initialState =[
    {
        id: 1,
        task: "Follow-up",
        date: "2021-04-28",
        time: "16:30",
        user: "user",
    }

];

const addTodo = (state, newTodo) => {
    const { id, task, date, time, user } = newTodo;
    const ids = state.map(todo => todo.id);
    const newId = Math.max(...ids) + 1;
    const todo = {
        id: id,
        task: task,
        date: date,
        time: time,
        user: user,
    };
    const newState = [...state, todo]
    return newState
};



const deleteTodo = (state, id) => {
    const newState = state.filter(todo => {
        console.log("test", todo);
        return todo.id !== id
    });
    return newState
}



const editTodo = (state, updateTodo) => {
    const { id, task, date, time, user } = updateTodo;

    const newState = state.map(todo => {
        if (todo.id == updateTodo.id) {
            return {
                id: id,
                task: task,
                date: date,
                time: time,
                user: user,
            };
        }
        return todo;
    });
    return newState;
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: return addTodo(state, action.payload);
        case DELETE_TODO: return deleteTodo(state, action.payload)
        case EDIT_TODO: return editTodo(state, action.payload)
        default: return state;
    }
};


export default todoReducer;