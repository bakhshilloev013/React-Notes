import { useState } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import './App.css';

const texts = ['Click me - 1', 'Click me - 2', 'Click me - 3', 'Click me - 4'];

function App() {
    const [count, setCount] = useState(0);

    const changeCount = () => {
        setCount(count + 1);
    };

    return (
        <div className="App">
            <Counter count={count} />
            <Button text={texts[0]} changeCount={changeCount} />
            <Button text={texts[1]} changeCount={changeCount} />
            <Button text={texts[2]} changeCount={changeCount} />
            <Button text={texts[3]} changeCount={changeCount} />
        </div>
    );
}

export default App;
