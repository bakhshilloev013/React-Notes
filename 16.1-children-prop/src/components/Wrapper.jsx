function Wrapper({ children, color }) {
    const objectOfStyles = {
        backgroundColor: color,
        margin: '20px auto',
        padding: '20px',
        width: '250px',
    };
    return <div style={objectOfStyles}>{children}</div>;
}

export default Wrapper;
