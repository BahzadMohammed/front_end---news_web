import React, { useState } from 'react';
import { useAuth } from '../Auth/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';

function Login()
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    console.log("1. login")

    const handleSubmit = async (event) =>
    {
        event.preventDefault();
        try
        {
            const response = await login(email, password);
            setMessage(response.Message);
            // history.push('/');
            // history('/news');
            navigate('/admin/news');
        } catch (error)
        {
            console.error(">> error: ", error);
            setMessage('Login failed');
        }
    };

    const handleBack = () => {
        navigate('/'); // This will navigate back to the previous page
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-black transition-colors mb-4"
                    >
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={handleBack}
                        className="w-full bg-gray-300 text-gray-700 py-2 rounded-md hover:bg-gray-400 transition-colors"
                    >
                        Back
                    </button>
                </form>
                {message && <p className="mt-4 text-red-500 text-center">{message}</p>}
            </div>
        </div>
    );
}

export default Login;
