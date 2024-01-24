import React from 'react'

const Login = () => {
    return (
        <section>
            <h1>Login</h1>
            <form>
                <label>
                    Gebruikersnaam:
                    <input type="text" required/>
                </label>
                <label>
                    Wachtwoord:
                    <input type="password" required/>
                </label>
                <button type="submit">login</button>
            </form>
        </section>
    )
}

export default Login

