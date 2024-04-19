import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; 
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);

    const addHandler = (text) => {
        const newTodo = {
            text,
            isCompleted: false,
            id: uuidv4(), 
        };
        setTodos([...todos, newTodo]);
    };

    const deleteHandler = (id) => {
        setTodos(todos.filter((item) => item.id !== id));
    };

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm addHandler={addHandler} />
            <TodoList todos={todos} deleteHandler={deleteHandler} />
        </div>
    );
}

export default App;
