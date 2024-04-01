import { useState, useEffect } from 'react';
import Post from './Post';
import './Posts.css';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    // ещё одно состояние чтобы отслеживать загрузку и отображать процесс загрузки на интерфейс пользователя
    const [isLoading, setIsLoading] =
        useState(true); /* пока загружается true, после завершения false */
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(json))
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false)); // после загрузки данных состояние загрузки завершается на false
    }, []);
    console.log(posts);

    // Вывод этого JSX если состояние загрузки true. Напоминаем что это состояние изменится на false после завершения работы fetch
    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    // JSX код в случае ошибки
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
