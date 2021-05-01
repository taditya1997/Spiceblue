import { ADD_TODO,  DELETE_TODO, EDIT_TODO } from './contants';

export const addTodo = (newTodo) => ({
  type: ADD_TODO,
  payload: newTodo,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
})


export const editTodo = (todo) => ({
  type: EDIT_TODO,
  payload: todo
})