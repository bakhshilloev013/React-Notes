import { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            username,
            password,
        };
        console.log(data);
    };

    return (
        <>
            <h1>Login form</h1>
            <form onSubmit={submitHandler}>
                <label>
                    Username:
                    <input
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        type="text"
                    />
                </label>
                <label>
                    Password:
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                </label>
                <button>Login</button>
            </form>
        </>
    );
}

export default Login;
