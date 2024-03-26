import { useState } from 'react';
import Button from './components/Button';
import Counter from './components/Counter';
import './App.css';

function App() {
    const [count, setCount] = useState(0);

    const changeCount = () => {
        setCount(count + 1);
    };

    const resetCount = () => {
        setCount(0);
    };

    // return (
    //     <div className="App">
    //         <Counter count={count} />
    //         <Button changeCount={changeCount} />
    //         <Button changeCount={changeCount} />
    //         <Button changeCount={changeCount} />
    //         <Button changeCount={changeCount} />
    //         {count ? (
    //             <div>
    //                 <button onClick={resetCount}>Reset</button>
    //             </div>
    //         ) : null}
    //     </div>
    // );

    return (
        <div className="App">
            <Counter count={count} />
            <Button changeCount={changeCount} />
            <Button changeCount={changeCount} />
            <Button changeCount={changeCount} />
            <Button changeCount={changeCount} />
            {count > 0 && (
                <div>
                    <button onClick={resetCount}>Reset</button>
                </div>
            )}
            {/* {!!count && (
                <div>
                    <button onClick={resetCount}>Reset</button>
                </div>
            )} */}
        </div>
    );
}

export default App;
