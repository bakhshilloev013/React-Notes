import { useParams } from 'react-router-dom';

function SingleCourse() {
  const { slug } = useParams();
  return (
    <h1>Course: {slug}</h1>
  )
}

export default SingleCourse