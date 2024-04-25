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
                    {/* указали на главном компоненте ссылку "/main" чтобы она отображалась по ссылке /main */}
                    <Route path="/main" element={<MainLayout />}>
                        <Route index={true} element={<Home />} />
                        {/* если в свойстве path лежит абсолютная ссылка( /link ) то она напрямую переведёт к этой странице */}
                        {/* а если в свойстве path лежит относительная ссылка( link ) то она переведёт страницу относительно от главной ссылки */}
                        <Route path="about" element={<About />} />
                        <Route path="contacts" element={<Contacts />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
