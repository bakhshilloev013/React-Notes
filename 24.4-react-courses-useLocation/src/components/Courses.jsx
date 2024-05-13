import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'; // для этого нужно установить пакет query-string
import courses from '../data/courses';

function Courses() {
    const [data, setData] = useState([...courses]);
    const navigate = useNavigate();
    const location = useLocation();
    const parsed = queryString.parse(location.search); // когда мы получаем "объект" из метода parse на самом деле это не объект
    // По этой причине мы строем новый объект из полученной строки
    const params = Object.assign({}, parsed);
    const sortValue = Object.values(params)[0];
    useEffect(() => {
        if (params.hasOwnProperty('sort')) {
            if (data.every((item) => item.hasOwnProperty(sortValue))) {
                data.sort((a, b) => {
                    if (a[sortValue] > b[sortValue]) {
                        return -1;
                    } else if (a[sortValue] < b[sortValue]) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
                setData([...data]);
            } else {
                navigate('/courses', { relative: 'route' });
            }
        } else {
            navigate('/courses', { relative: 'route' });
        }
    }, [location.search, navigate]);

    return (
        <>
            {location.search ? (
                <h1>Courses sorted by {sortValue}</h1>
            ) : (
                <h1>Courses</h1>
            )}
            <div>
                {data.map((item) => (
                    <Link key={item.id} className="courseLink" to={item.slug}>
                        {item.title}
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Courses;
