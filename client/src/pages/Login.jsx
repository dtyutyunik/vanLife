import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Login = () => {

    const [loginFormData, setLoginFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginFormData(prevdata => (
            {
                ...prevdata,
                [name]: value
            }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginFormData)
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>

            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    required
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    required
                    value={loginFormData.password}
                />
                <button type="submit" className="login-button">Sign in</button>
            </form>

        </div>
    )
}

export default Login;