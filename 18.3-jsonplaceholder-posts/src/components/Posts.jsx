import { useState, useEffect } from 'react';
import Post from './Post';
import './Posts.css';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(json))
            .catch((err) => setError(err.message))
            .finally(() => setIsLoading(false));
    }, []);
    console.log(posts);

    // JSX код в случае ошибки
    if (error) {
        return <h1>Ошибка: {error}</h1>;
    }

    return (
        <>
            {/* добавили заглавие и черту снизу */}
            <h1>Posts</h1>
            <hr />
            {/* если идёт загрузка мы выводим сообщение загрузки но как только загрузка закончится и состояние загрузки изменится мы выводим посты */}
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                posts.map((post, i) => <Post key={i} {...post} />)
            )}
        </>
    );
}

export default Posts;
