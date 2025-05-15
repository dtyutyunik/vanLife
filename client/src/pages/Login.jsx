import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { loginUser } from "../api";

const Login = () => {

    const [status, setStatus] = useState('idle')
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from || '/host';

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
        setStatus('submitting');

        loginUser(loginFormData).then((data) => {
            localStorage.setItem('isLoggedIn', true)
            navigate(from, {
                replace: true
            })
            setError(null)
        }).catch((err) => {

            setError(err)
        }).finally(() => {
            setStatus('idle')
        })

    }

    return (
        <div className="login-container">
            {
                location.state?.message &&
                <h3 className="login-error">{location.state.message}</h3>
            }
            <h1>Sign in to your account</h1>
            {error?.message && <p className="login-error">{error.message}</p>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    // required
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    // required
                    value={loginFormData.password}
                />
                <button type="submit" disabled={status === 'submitting'} className="login-button">Log in</button>
            </form>

        </div>
    )
}

export default Login;