import { useState } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    const changeCount = () => {
        setCount(count + 1);
    }

    return (
        <div className="App">
            <Counter count={count} />
            <Button changeCount={changeCount} />
            <Button changeCount={changeCount} />
            <Button changeCount={changeCount} />
            <Button changeCount={changeCount} />
        </div>
    );
}

export default App;
