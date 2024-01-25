import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [userData, setUserData] = useState({
        username: 'uncinc',
        password: 'letmein'
    });

    const [errorMessages, setErrorMessages] = useState({});

    const handleSubmit = (event) => {
        event.preventDefault();

        const { uname, pass } = event.target;

        if (userData.username === uname.value && userData.password === pass.value) {
        // Successful login
        setUserData({ username: uname.value, password: pass.value });
        // Navigate to '/dashboard'
        window.location.href = '/dashboard';
        } else {
        // Invalid login credentials
        setErrorMessages({
            uname: 'Invalid username',
            pass: 'Invalid password'
        });
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
        );

    return (
        <main>
        <section className='login-container'>
            <h1>Welcome back!</h1>
            <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input type="text" name="uname" placeholder="Enter your username" required/>
                {renderErrorMessage("uname")}
            </label>
            <label>
                Password:
                <input type="password" name="pass" placeholder="Enter your password" required />
                {renderErrorMessage("pass")}
            </label>
            <button type="submit">Login</button>
            {userData.username && userData.password && <Link to="/dashboard">Dashboard</Link>}
            </form>
        </section>
        </main>
    );
};

export default Login;