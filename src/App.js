
import './App.css';
import Form from './components/Form.js';
import List from './components/List.js';
import TodoItem from './components/TodoItem';
import { Provider } from 'react-redux';
import store from './store';
import Task from './components/Task';
import { useState } from 'react';
function App() {
  const [taskButton,setTaskButton]=useState(false);
  return (
    <Provider store={store}>
      <div className="App">
      <div className="container">
      <Form taskButton={taskButton} setTaskButton={setTaskButton} />
      <List taskButton={taskButton} setTaskButton={setTaskButton}/>
     
      </div>
    
      </div>
    </Provider>


  );
}

export default App;
