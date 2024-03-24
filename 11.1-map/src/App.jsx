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
            {texts.map((text,i) => {
                return <Button key={i} changeCount={changeCount} text={text} />
            })}
        </div>
    );
}

export default App;
