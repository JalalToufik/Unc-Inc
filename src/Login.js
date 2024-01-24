import React from 'react'

const Login = () => {
    return (
        <section className='login-container'>
            <h1>Welcome</h1>
            <form>
                <label>
                    Gebruikersnaam:
                    <input type="text" required/>
                </label>
                <label>
                    Wachtwoord:
                    <input type="password" required/>
                </label>
                <button type="submit">Confirm</button>
            </form>
        </section>
    )
}

export default Login

