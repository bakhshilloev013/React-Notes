import { useState, useEffect } from 'react';
import Post from './Post';
import './Posts.css';

function Posts() {
    const [posts, setPosts] = useState([]);
    /* создали ещё одно состояние для этого комопнента которая будет содержать в себе ошибку от сервера */
    const [error, setError] = useState('');
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(json))
            .catch((err) => setError(err.message)); // setError устанавливает новое состояние ошибки
    }, []);
    console.log(posts);

    // возвращаем другой JSX код в случае ошибки
    if (error) {
        return <h1>Ошибка: {error}</h1>;
    }

    return (
        <div className="posts">
            {posts.map((post, i) => (
                <Post key={i} {...post} />
            ))}
        </div>
    );
}

export default Posts;
