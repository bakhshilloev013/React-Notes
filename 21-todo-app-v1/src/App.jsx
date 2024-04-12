import TodoForm from './components/Todos/TodoForm';
import './App.css';
import { useState } from 'react';
import TodoList from './components/Todos/TodoList';

function App() {
    const [todos, setTodos] = useState([]);
    
    const addHandler = (text) => {
        setTodos([...todos, text]);
    }

    const deleteHandler = (text) => {
        setTodos(todos.filter(item => item !== text));
    }
    

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm addHandler={addHandler} />
            <TodoList todos={todos} deleteHandler={deleteHandler} />
        </div>
    );
}

export default App;
