import { Link, useLocation} from 'react-router-dom';
import queryString from 'query-string'; // необходимо установить пакет query-string
import { useState } from 'react';
import courses from '../data/courses';

// Построили функционал сортировки курсов которая принимает оригинальный массив с курсами и ключ по которому сортировать
function sortCourses(courses, key) {
    const sortedCourses = [...courses];
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
    // в состоянии sortedCourses передаем значение полученное из функции сортировки
    const [sortedCourses, setSortedCourses] = useState(sortCourses(courses, sortKey));

    return (
        <>
            <h1>Courses</h1>
            <div>
                {/* изменили courses на отсортированный массив sortedCourses */}
                {sortedCourses.map((item, ) => (
                    <Link key={item.id} className='courseLink' to={item.slug}>
                        {item.title}
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Courses;
