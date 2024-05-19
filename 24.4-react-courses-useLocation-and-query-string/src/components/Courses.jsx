import { Link, useLocation} from 'react-router-dom';
import queryString from 'query-string'; // необходимо установить пакет query-string
import { useState } from 'react';
import courses from '../data/courses';

function Courses() {
    // Создали функцию useLocation чтобы получить объект с нашей данной локацией
    const location = useLocation();
    // Используем функцию queryString и применяем к нему метод parse чтобы из поля search нашей локации заполучить объект с query-string, т.е. строку запроса. 
    const query = queryString.parse(location.search);
    // Создали состояние чтобы сохранить там значение нашего строки запроса где мы ожидаем что строка запроса будет состоять из поля sort а его значение будет состоянии sortKey
    const [sortKey, setSortKey] = useState(query.sort);
    // Создали состояние чтобы сохрнаить там массив с данными
    const [sortedCourses, setSortedCourses] = useState(courses);

    return (
        <>
            <h1>Courses</h1>
            <div>
                {courses.map((item, ) => (
                    <Link key={item.id} className='courseLink' to={item.slug}>
                        {item.title}
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Courses;
