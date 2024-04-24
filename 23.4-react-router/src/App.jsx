import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Для начала нужно установить библиотеку react-router-dom
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import NotFound from './components/NotFound';
import MainLayout from './layouts/MainLayout';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {/* Создали отдельный компонент который будет содержать в себе и меню и содержимое всех компонентов */}
                    {/* После того как мы сделали MainLayout корневым компонентом мы сделали его маршрут основным  */}
                    <Route path="/" element={<MainLayout />}>
                        {/* У главной страницы не обязательно указывать маршрут так как этот маршрут указан в корневом компоненте, из-за этого мы указываем у главной страницы свойство индекс чтобы корневой компонент воспринимала данный компонент как главную страницу */}
                        <Route index={true} element={<Home />} />
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
