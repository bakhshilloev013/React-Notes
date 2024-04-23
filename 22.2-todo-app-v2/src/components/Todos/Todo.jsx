// Добавили новые иконки и стили
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';
import styles from './Todo.module.css';

function Todo({ todo, toggleTodoHandler, deleteHandler }) {
    // создали функцию которая проверяет какие задачи выполнены и после добавляет соответсвующий класс для выполненных задач
    const classNames = () => todo.isCompleted ? `${styles.todo} ${styles.completedTodo}` : styles.todo;
    
    return (
        // вместо классов прописывам вызов функции которая проверяет на наличие выполненных задач и устанавливает соответсвующие классы
        <div className={classNames()}>
            <div className={styles.todoText}>
                <div>
                    <RiTodoFill className={styles.todoIcon} />
                    {todo.text}
                </div>
                <div>
                    <RiDeleteBin2Line
                        onClick={() => deleteHandler(todo.id)}
                        className={styles.deleteIcon}
                    />
                    {/* повесили функцию выполнения задачи на иконку "птичка" которая вызывает функцию и передает ей id этой задачи для сравнения */}
                    <FaCheck onClick={() => toggleTodoHandler(todo.id)} className={styles.checkIcon} />
                </div>
            </div>
        </div>
    );
}

export default Todo;
