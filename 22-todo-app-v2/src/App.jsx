import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'; // устанавливаем внешнюю функцию генерации уникальных идентификаторов и импортируем эту функцию на наш проект 
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import './App.css';

function App() {
    const [todos, setTodos] = useState([]);

    // заменяем массив строк на массив объектов
    // преимущества массива объектов: в объекте будет уникальный идентификатор, свойство которое сообщает о выполнении задачи и сам текст задачи
    const addHandler = (text) => {
        const newTodo = {
            text,
            isCompleted: false,
            id: uuidv4(), // вызов функции который возвращает уникальный идентификатор
        };
        setTodos([...todos, newTodo]);
    };

    // при удалении задачи фильтруем по уникальному идентификатору который получает эта функция
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
