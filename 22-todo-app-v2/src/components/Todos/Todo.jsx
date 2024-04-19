import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

function Todo({ todo, deleteHandler }) {
    return (
        // функция deleteHandler возвращает уникальынй идентификатор задачи
        <div onDoubleClick={() => deleteHandler(todo.id)} className={styles.todo}>
            <div className={styles.todoText}>
                <RiTodoFill className={styles.todoIcon} />
                {todo.text}
            </div>
        </div>
    );
}

export default Todo;
