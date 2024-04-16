import Todo from './Todo';
import styles from './TodoList.module.css'; 

function TodoList({ todos, deleteHandler }) {
    return (
        <div className={styles.todoListContainer}>
            {!todos.length ? (
                <h2>Todos is empty</h2>
            ) : (
                todos.map((text, i) => {
                    return (
                        <Todo
                            key={i}
                            text={text}
                            deleteHandler={deleteHandler}
                        />
                    );
                })
            )}
        </div>
    );
}

export default TodoList;
