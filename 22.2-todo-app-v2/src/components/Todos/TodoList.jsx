import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, toggleTodoHandler, deleteHandler }) {
    return (
        <div className={styles.todoListContainer}>
            {!todos.length ? (
                <h2>Todos is empty</h2>
            ) : (
                todos.map((todo) => {
                    return (
                        <Todo
                            key={todo.id}
                            todo={todo}
                            // передали новую функцию на саму задачу
                            toggleTodoHandler={toggleTodoHandler}
                            deleteHandler={deleteHandler}
                        />
                    );
                })
            )}
        </div>
    );
}

export default TodoList;
