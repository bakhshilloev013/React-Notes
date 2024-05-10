import { Link, useParams } from "react-router-dom"
import courses from '../data/courses'
import NotFound from "./NotFound";


function SingleCourse() {
  const { slug } = useParams();
  const course = courses.find(item => item.slug === slug);
  // Если результат поиска выдаёт undefined то мы выводим на экран содержимое компонента NotFound
  if (!course) {
    return <NotFound />
  }

  return (
    <>
      <h1>{course.title}</h1>
      <h2>Slug: {course.slug}</h2>
      <h3>ID: {course.id}</h3>
      <Link to=".." relative="path">All courses</Link>
    </>
  )
}

export default SingleCourse