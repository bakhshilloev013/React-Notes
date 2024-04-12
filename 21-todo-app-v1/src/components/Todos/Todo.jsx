function Todo({ text, deleteHandler }) {
    
    return <div onDoubleClick={() => deleteHandler(text)}>{text}</div>;
}

export default Todo;
