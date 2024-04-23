import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'; // иконки из react-icons
import Button from '../UI/Button';
import styles from './TodosActions.module.css';

function TodosActions({ todos, setTodos }) {
    // Функция для включения или выключения кнопки удаления всех выполненных задач
    const hasCompletedTodos = () => {
        return todos.filter((todo) => todo.isCompleted === true).length >= 1
            ? false
            : true;
    };

    // Функция удаления выполненных задач
    const clearCompletedTodos = () => {
        const arr = todos.filter((item) => item.isCompleted !== true);
        console.log(arr);
        setTodos(arr);
    };

    return (
        <div className={styles.todosActions}>
            {/* Первая кнопка удаляет все задачи */}
            <Button onClick={() => setTodos([])} title="Delete todos">
                <RiRefreshLine />
            </Button>
            {/* Вторая кнопка удаляет только выполненные задачи */}
            <Button
                onClick={clearCompletedTodos}
                disabled={hasCompletedTodos()}
                title="Clear completed todos"
            >
                <RiDeleteBin2Line />
            </Button>
        </div>
    );
}

export default TodosActions;
