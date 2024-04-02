import { useState, useEffect } from 'react';
import Post from './Post';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //     const posts = await res.json();
    //     setPosts(posts);
    // })

    // useEffect(async () => {
    //     try {
    //         const res = await fetch(
    //             'https://jsonplaceholder.typicode.com/posts'
    //         );
    //         const posts = await res.json();
    //         setPosts(posts);
    //     } catch (error) {
    //         setError(error.message);
    //     }
    // });

    // оборачиваем блок кода в async await надстройку
    useEffect(() => {
        // для более лучшей оптимизации работы useEffect стоит обернуть весь функционал в другую функцию и вызвать её
        async function fetchData() {
            try {
                const res = await fetch(
                    'https://jsonplaceholder.typicode.com/posts'
                );
                const posts = await res.json();
                setPosts(posts);
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        }
        fetchData();
    }, []);

    // JSX код в случае ошибки
    if (error) {
        return <h1>Ошибка: {error}</h1>;
    }

    return (
        <>
            <h1>Posts</h1>
            <hr />
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                posts.map((post, i) => <Post key={i} {...post} />)
            )}
        </>
    );
}

export default Posts;
