import { Link, useParams } from "react-router-dom"
import courses from '../data/courses'


function SingleCourse() {
  const { slug } = useParams();
  const course = courses.find(item => item.slug === slug);

  return (
    <>
      <h1>{course.title}</h1>
      <h2>Slug: {course.slug}</h2>
      <h3>ID: {course.id}</h3>
      {/* Вернуться назад вариант: а */}
      {/* <Link to="/courses">All courses</Link> */}
      {/* Вернуться назад вариант: б */}
      {/* Подняться на один уровень выше по отношению этого пути */}
      <Link to=".." relative="path">All courses</Link>
    </>
  )
}

export default SingleCourse