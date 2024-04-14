import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

function Todo({ text, deleteHandler }) {
    return (
        <div onDoubleClick={() => deleteHandler(text)} className={styles.todo}>
            <div className={styles.todoText}>
                <RiTodoFill className={styles.todoIcon} />
                {text}
            </div>
        </div>
    );
}

export default Todo;
