import { NavLink } from 'react-router-dom';
// заменили компоненты Link на компонент NavLink для того чтобы работать с классом active

const Menu = () => {
    return (
        <nav>
            {/* установили свойство end в корневой ссылке для того чтобы она принимала класс active только тогда когда мы находимся на главной странице */}
            <NavLink to="." end>Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contacts">Contacts</NavLink>
        </nav>
    );
};

export default Menu;
