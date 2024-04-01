import { useState, useEffect } from 'react';
import Post from './Post';
import './Posts.css';

function Posts() {
    /* пустой массив потому что мы ожидаем получить от вервера массив */
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((json) => setPosts(json))
            .catch((err) => console.log(err.message));
    }, []);
    console.log(posts);

    return (
        <div className="posts">
            {posts.map((post, i) => (
                <Post key={i} {...post} />
            ))}
        </div>
    );
}

export default Posts;
