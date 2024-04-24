import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Для начала нужно установить библиотеку react-router-dom
import './App.css';

function App() {
    return (
        // Компонент для управления маршрутами и локацией
        <BrowserRouter>
            {/* Корневой компонент */}
            <div className="App">
                {/* Маршруты */}
                <Routes>
                    {/* Корневой маршрут(компонент) */}
                    <Route path="/" element={<h1>Main</h1>} />
                    {/* Менее специфичный маршрут(компонент) - about */}
                    <Route path="/about" element={<h1>About</h1>} />
                    {/* Менее специфичный маршрут(компонент) - contacts */}
                    <Route path="/contacts" element={<h1>Contacts</h1>} />
                    {/* Менее специфичный маршрут(компонент) - для остальных не существующих маршрутов */}
                    {/* Маршрут по умолчанию указывается через знак "*" */}
                    <Route path="*" element={<h1>Not Found</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
