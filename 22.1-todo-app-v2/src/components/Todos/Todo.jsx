// Добавили новые иконки и стили
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo({ todo, deleteHandler }) {
    
    return (
        <div className={styles.todo}>
            <div className={styles.todoText}>
                {/* обернули часть текста и предыдущей иконку в один див */}
                <div>
                    <RiTodoFill className={styles.todoIcon} />
                    {todo.text}
                </div>
                {/* обернули две новые иконки тоже в отдельный див */}
                <div>
                    <RiDeleteBin2Line
                        // повесили функцию удаления на иконку удаления
                        onClick={() => deleteHandler(todo.id)}
                        className={styles.deleteIcon}
                    />
                    <FaCheck className={styles.checkIcon} />
                </div>
            </div>
        </div>
    );
}

export default Todo;
