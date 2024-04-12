import { useState } from 'react';

function TodoForm({ addHandler }) {
    const [todo, setTodo] = useState('');
    const inputHandler = (e) => {
        setTodo(e.target.value);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        addHandler(todo);
        setTodo('');
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                name="input"
                value={todo}
                onChange={inputHandler}
                placeholder="Enter new Todo"
                type="text"
            />
            <button>Submit</button>
        </form>
    );
}

export default TodoForm;
