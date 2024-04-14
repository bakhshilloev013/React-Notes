import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

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
        <div className={styles.todoFormContainer}>
            <form onSubmit={submitHandler}>
                <input
                    name="input"
                    value={todo}
                    onChange={inputHandler}
                    placeholder="Enter new Todo"
                    type="text"
                />
                <Button>Submit</Button>
            </form>
        </div>
    );
}

export default TodoForm;
