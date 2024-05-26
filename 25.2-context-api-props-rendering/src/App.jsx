import { useState } from 'react';
import User from './components/User';
import UserContext from './context/UserContext'; // импортируем контекст в компонент App
import './App.css';

function App() {
    const [user, setUser] = useState('Tommy');

    return (
        // Обернули наш компонент в компонент Provider чтобы прокинуть контекст всем внутренним компонентам
        <UserContext.Provider value={user}>
            <div className="App">
                <User />
            </div>
        </UserContext.Provider>
    );
}

export default App;
