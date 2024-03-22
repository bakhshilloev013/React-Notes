import { useState } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <Counter count={count} />
            <Button count={count} setCount={setCount} />
            <Button count={count} setCount={setCount} />
            <Button count={count} setCount={setCount} />
            <Button count={count} setCount={setCount} />
        </div>
    );
}

export default App;
