import { useState } from 'react';

function Login() {
    const [data, setData] = useState({ username: '', password: '' });

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(data);
    };

    const inputChangeHandler = (e, name) => {
        setData({ ...data, [name]: e.target.value });
    };

    return (
        <>
            <h1>Login form</h1>
            <form onSubmit={submitHandler}>
                <label>
                    Username:
                    <input
                        value={data.username}
                        onChange={(e) => inputChangeHandler(e, e.target.name)}
                        type="text"
                        name="username"
                    />
                </label>
                <label>
                    Password:
                    <input
                        value={data.password}
                        onChange={(e) => inputChangeHandler(e, e.target.name)}
                        type="password"
                        name="password"
                    />
                </label>
                <button>Login</button>
            </form>
        </>
    );
}

export default Login;
