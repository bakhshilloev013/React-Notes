import { Outlet } from 'react-router-dom';
import Menu from './Menu';

const Home = () => {
    return (
        <>
            <Menu />
            <h1>Home</h1>
            {/* Компонент Outlet показывает содержимое остальных компонентов */}
            <Outlet />
        </>
    );
};

export default Home;
