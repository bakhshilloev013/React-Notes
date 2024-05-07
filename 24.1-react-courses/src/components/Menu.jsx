import { NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : ''} to="." end>
                Home
            </NavLink>
            {/* Добавили новый NavLink внутри меню чтобы мы могли перейти к странице courses */}
            <NavLink className={({isActive}) => isActive ? 'activeLink' : ''} to="courses">Courses</NavLink>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : ''} to="about">About</NavLink>
            <NavLink className={({isActive}) => isActive ? 'activeLink' : ''} to="contacts">Contacts</NavLink>
        </nav>
    );
};

export default Menu;
