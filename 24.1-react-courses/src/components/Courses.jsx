import { Link} from 'react-router-dom';
import courses from '../data/courses';

function Courses() {
    return (
        <>
            <h1>Courses</h1>
            {/* Создали блок с ссылками на курсы */}
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
