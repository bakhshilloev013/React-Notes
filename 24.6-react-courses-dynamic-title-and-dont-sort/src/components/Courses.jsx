import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string'; // необходимо установить пакет query-string
import { useState } from 'react';
import courses from '../data/courses';

function sortCourses(courses, key) {
    const sortedCourses = [...courses];
    // Если строка запроса отсутствует или нет нужных свойст то сортировка не произойдет и вернется исходный массив
    if (!key) {
        return sortedCourses;
    }
    sortedCourses.sort((a, b) => {
        if (a[key] < b[key]) {
            return -1;
        } else if (a[key] > b[key]) {
            return 1;
        } else {
            return 0;
        }
    });
    return sortedCourses;
}

function Courses() {
    const location = useLocation();
    const query = queryString.parse(location.search);
    const [sortKey, setSortKey] = useState(query.sort);
    const [sortedCourses, setSortedCourses] = useState(
        sortCourses(courses, sortKey)
    );

    return (
        <>
            {/* Изменили заглавие */}
            <h1>{sortKey ? `Courses sorted by ${sortKey}` : 'Courses'}</h1>
            <div>
                {sortedCourses.map((item) => (
                    <Link key={item.id} className="courseLink" to={item.slug}>
                        {item.title}
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Courses;
