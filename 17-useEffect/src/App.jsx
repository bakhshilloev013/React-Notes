import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

// function App() {
//     Чтобы сохранить где-то значение которое мы приняли от сервера мы используем хук useState 
//     const [todo, setTodo] = useState(null);
//     console.log('App rendered');
//     fetch работает асинхронно и принимает ответ от сервера после того как компонент App загружается в DOM. 
//     fetch('https://jsonplaceholder.typicode.com/todos/13')
//         .then((response) => response.json())
//         .then((json) => setTodo(json));

//     return <div className="App"></div>;
// }

// function App() {
//     const [todo, setTodo] = useState(null);
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/todos/13')
//         .then((response) => response.json())
//         .then((json) => setTodo(json));
//     }, [])
//     console.log('App rendered');
//     console.log(todo);

//     return <div className="App"></div>;
// }

function App() {
    const [todo, setTodo] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/13')
            .then((response) => response.json())
            .then((json) => setTodo(json));
    }, []);
    console.log('App rendered');
    console.log(todo);

    return <div className="App">{todo && <h1>{todo.title}</h1>}</div>;
}

export default App;
