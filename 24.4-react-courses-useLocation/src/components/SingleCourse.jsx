import { Link, useNavigate, useParams } from 'react-router-dom';
import courses from '../data/courses';
import { useEffect } from 'react';

function SingleCourse() {
    const { slug } = useParams();
    const course = courses.find((item) => item.slug === slug);
    const navigate = useNavigate();
    useEffect(() => {
        if (!course) {
            navigate('..', { relative: 'path' });
        }
    }, [course, navigate]);

    return (
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
