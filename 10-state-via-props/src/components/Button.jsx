function Button({count, setCount}) {
    return <button onClick={() => setCount(count + 1)}>Click me!</button>;
}

export default Button;
