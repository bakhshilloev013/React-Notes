import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'; // для этого нужно установить пакет query-string
import courses from '../data/courses';

function Courses() {
    const navigate = useNavigate();
    const location = useLocation();
    const parsed = queryString.parse(location.search); // когда мы получаем "объект" из метода parse на самом деле это не объект
    // По этой причине мы строем новый объект из полученной строки
    const params = Object.assign({}, parsed);
    const sortValue = Object.values(params)[0];
    if (location.search) {
        if (params.hasOwnProperty('sort')) {
            courses.forEach((item) => {
                if (item.hasOwnProperty(sortValue)) {
                    console.log(item);
                } else {
                    navigate('/courses', { relative: 'route' });
                }
            });
        } else {
            navigate('/courses', { relative: 'route' });
        }
    }

    return (
        <>
            <h1>Courses</h1>
            <div>
                {courses.map((item) => (
                    <Link key={item.id} className="courseLink" to={item.slug}>
                        {item.title}
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Courses;
