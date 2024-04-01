import './Post.css';

function Post({ title, id, body, userId }) {
    return (
        <div className="post">
            <div>{id}</div>
            <h2>{title}</h2>
            <div>{body}</div>
            <h3>UserID: {userId}</h3>
        </div>
    );
}

export default Post;
