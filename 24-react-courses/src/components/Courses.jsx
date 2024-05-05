import { NavLink } from 'react-router-dom';

function Courses() {
    return (
        <>
            <h1>Courses</h1>
            <div>
                <NavLink
                    className={({ isActive }) => (isActive ? 'activeLink' : '')}
                    to="singlecourse/:html"
                >
                    HTML
                </NavLink>
                <br />
                <NavLink
                    className={({ isActive }) => (isActive ? 'activeLink' : '')}
                    to="singlecourse/:css"
                >
                    CSS
                </NavLink>
                <br />
                <NavLink
                    className={({ isActive }) => (isActive ? 'activeLink' : '')}
                    to="singlecourse/:javascript"
                >
                    JavaScript
                </NavLink>
                <br />
                <NavLink
                    className={({ isActive }) => (isActive ? 'activeLink' : '')}
                    to="singlecourse/:react"
                >
                    React
                </NavLink>
            </div>
        </>
    );
}

export default Courses;
