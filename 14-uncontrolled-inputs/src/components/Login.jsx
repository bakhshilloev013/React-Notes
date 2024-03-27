function Login() {
    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            username: e.target.username.value,
            password: e.target.password.value,
        };
        console.log(data);
    };

    return (
        <>
            <h1>Login form</h1>
            <form onSubmit={submitHandler}>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <button>Login</button>
            </form>
        </>
    );
}

export default Login;
