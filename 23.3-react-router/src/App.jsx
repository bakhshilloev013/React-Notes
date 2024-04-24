import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Для начала нужно установить библиотеку react-router-dom
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {/* Сделали маршрут(компонент) Home родительским компонентом для остальных компонентов и внесли в него компонент Menu */}
                    <Route path="/" element={<Home />}>
                        <Route path="/about" element={<About />} />
                        <Route path="/contacts" element={<Contacts />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
