import { Link, useNavigate, useParams } from 'react-router-dom';
import courses from '../data/courses';
// import NotFound from './NotFound';
import { useEffect } from 'react';

function SingleCourse() {
    const { slug } = useParams();
    const course = courses.find((item) => item.slug === slug);
    // Функция useNavigate возвращает другую функцию с помощью которой мы можем перенаправить пользователя на другую страницу
    const navigate = useNavigate();
    // прописываем функционал useNavigate внутри хука useEffect и в массиве относительностей передаём course, чтобы каждый раз при изменении значения переменной course выполнялась это функция. Ешё по требованию react мы должны занести в массив относительностей саму функцию navigate
    useEffect(() => {
        // если course это undefined(т.е. курс с определённым slug не найден) то пользователь будет переведен на страницу со всеми курсами
        if (!course) {
            // функция navigate перенаправляет пользователя на одну страницу вверх по отношению этого пути(т.е. на страницу со всеми курсами)
            navigate('..', { relative: 'path' });
            // ниже приведен пример перевода пользователя на страницу notFound, но такой способ не рекомендуется применять так как пользователь не поймёт в чём дело
            // navigate('../notFound', { relative: 'route' });
        }
    }, [course, navigate]);

    // Обыкновенный способ вывода страницы NotFound
    // if (!course) {
    //   return <NotFound />
    // }

    return (
        // применили ниже оператор optional chaining чтобы React не пытался читать содержимое undefined 
        <>
            <h1>{course?.title}</h1>
            <h2>Slug: {course?.slug}</h2>
            <h3>ID: {course?.id}</h3>
            <Link to=".." relative="path">
                All courses
            </Link>
        </>
    );
}

export default SingleCourse;
