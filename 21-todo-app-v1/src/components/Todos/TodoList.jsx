import Todo from './Todo';

function TodoList({ todos, deleteHandler }) {
    return (
        <div>
            {!todos.length ? (
                <div>Todos is empty</div>
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
