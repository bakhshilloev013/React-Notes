import { NavLink } from 'react-router-dom';
// заменили компоненты Link на компонент NavLink для того чтобы работать с классом active

const Menu = () => {
    return (
        <nav>
            {/* с применением компонента NavLink нам стали доступны такие свойства как style и className */}
            {/* теперь мы можем создать собственный класс активностей */}
            {/* для этого небходимо создать свойство className который в себе будет содержать функцию с одним белувым значением, если это значение true то мы должны применитьь свой кастомный класс иначе другой неактивный класс */}
            <NavLink
                to="."
                className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
                end
            >
                Home
            </NavLink>
            <NavLink
                to="about"
                className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
            >
                About
            </NavLink>
            <NavLink
                to="contacts"
                className={({ isActive }) => (isActive ? 'activeLink' : 'link')}
            >
                Contacts
            </NavLink>
        </nav>
    );
};

export default Menu;
