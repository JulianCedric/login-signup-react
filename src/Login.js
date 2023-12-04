import React, { useState } from 'react';

function Login() {
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');

    console.log('username:', username);
    console.log('password:', password);

    const handleSubmit = () => {
        console.log('submitted');
    }

    return (
        <form>
            <h2>Login</h2>
            <div>
                <label>
                    <input
                        type='text'
                        value={username}
                        placeholder='Username'
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
            </div>
            <div>
                <label>
                    <input
                        type='text'
                        value={password}
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
            </div>
            <button
                type='submit'
                onSubmit={(e) => handleSubmit()}
            >
                Log in
            </button>
        </form>
    );
};

export default Login;