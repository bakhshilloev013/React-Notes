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

    // создали функцию переключателя выполнения задачи
    const toggleTodoHandler = (id) => {
        // изменяем исходный массив задач с помощью метода map
        setTodos(
            todos.map((todo) => {
                return todo.id === id
                    ? { ...todo, isCompleted: !todo.isCompleted }
                    : { ...todo };
            })
        );
    };

    // Функция которая выявляет количество выполненных задач
    const checkCompleted = () => {
        const len = todos.filter((item) => item.isCompleted).length;
        if (len) {
            return len > 1 ? (
                <h3>You have completed {len} todos</h3>
            ) : (
                <h3>You have completed {len} todo</h3>
            );
        }
    };

    return (
        <div className="App">
            <h1>Todo App</h1>
            <TodoForm addHandler={addHandler} />
            {/* передали новую функцию в компонент всех задач */}
            <TodoList
                todos={todos}
                toggleTodoHandler={toggleTodoHandler}
                deleteHandler={deleteHandler}
            />
            {/* вызов функции кол-ва выполненных задач */}
            {checkCompleted()}
        </div>
    );
}

export default App;
