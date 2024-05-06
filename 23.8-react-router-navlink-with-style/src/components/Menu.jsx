import { NavLink } from 'react-router-dom';
// заменили компоненты Link на компонент NavLink для того чтобы работать с классом active

const Menu = () => {
    return (
        <nav>
            {/* с применением компонента NavLink нам стали доступны такие свойства как style и className */}
            {/* теперь мы можем применить к этим компонентам свойство style */}
            <NavLink
                to="."
                style={({ isActive }) =>
                    isActive
                        ? { color: 'lightyellow', textDecoration: 'none' }
                        : {}
                }
                end
            >
                Home
            </NavLink>
            <NavLink
                to="about"
                style={({ isActive }) =>
                    isActive
                        ? { color: 'lightyellow', textDecoration: 'none' }
                        : {}
                }
            >
                About
            </NavLink>
            <NavLink
                to="contacts"
                style={({ isActive }) =>
                    isActive
                        ? { color: 'lightyellow', textDecoration: 'none' }
                        : {}
                }
            >
                Contacts
            </NavLink>
        </nav>
    );
};

export default Menu;
