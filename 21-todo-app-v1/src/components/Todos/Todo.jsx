// устанавливаем react-icons и импортируем из библиотеки react-icons/ri иконку
import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

function Todo({ text, deleteHandler }) {
    return (
        <div onDoubleClick={() => deleteHandler(text)} className={styles.todo}>
            <div className={styles.todoText}>
                {/* используем иконку из библиотеки react-icons */}
                <RiTodoFill className={styles.todoIcon} />
                {text}
            </div>
        </div>
    );
}

export default Todo;
