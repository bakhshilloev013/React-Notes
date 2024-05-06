import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : ''} to="." end>
                Home
            </NavLink>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : ''} to="about">About</NavLink>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : ''} to="contacts">Contacts</NavLink>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : ''} to="courses">Courses</NavLink>
        </nav>
    );
};

export default Menu;
