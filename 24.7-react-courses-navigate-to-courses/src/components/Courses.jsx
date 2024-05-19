import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'; // необходимо установить пакет query-string
import { useEffect, useState } from 'react';
import courses from '../data/courses';

const SORT_KEYS = ['title', 'slug', 'id'];

function sortCourses(courses, key) {
    const sortedCourses = [...courses];
    // Если строка запроса отсутствует или нет нужных свойст то сортировка не произойдет и вернется исходный массив
    if (!key || !SORT_KEYS.includes(key)) {
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
    // Создали функцию для навигации
    const navigate = useNavigate();
    const [sortKey, setSortKey] = useState(query.sort);
    const [sortedCourses, setSortedCourses] = useState(
        sortCourses(courses, sortKey)
    );

    // Создали хук useEffect так как функция navigate должна работать внутри useEffect
    useEffect(() => {
        // Если в строке запроса отсутствует значение из массива SORT_KEYS то происходит перенаправление на страницу с курсами
        if (!SORT_KEYS.includes(sortKey)) {
            // Чтобы избавиться от строки запроса или же чтобы перейти на страницу с курсами можно поставить строку с точкой внутри и при этом необязательно применять объект с relative: 'route' 
            navigate('.', { relative: 'route' });
            // Изменяем значение состояния sortkey чтобы в заглавие не было неправильным
            setSortKey('');
            // В случае отсутствия параметра sort или определённых значений то стоит вернуть неотсортированный исходный массив
            setSortedCourses([...courses]);
        }
    }, [sortKey, navigate]);

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
