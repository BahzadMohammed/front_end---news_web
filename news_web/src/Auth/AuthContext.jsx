import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext()

export const useAuth = () =>
{
    return useContext(AuthContext);
};



export const AuthProvider = ({ children }) =>
{
    const [user, setUser] = useState(null);

    //   useEffect(() => {
    //     // Fetch user data if authenticated
    //     axios.get('http://localhost:5094/api/User', { withCredentials: true })
    //       .then(response => setUser(response.data))
    //       .catch(() => setUser(null));
    //   }, []);

    const login = async (email, password) =>
    {
        const response = await axios.post('http://localhost:5094/api/auth/login', {
            email,
            passwordHash: password
        }, { withCredentials: true });

        setUser(response.data.User);
        return response.data;
    };

    const logout = async () =>
    {
        await axios.post('http://localhost:5094/api/auth/logout', {}, { withCredentials: true });
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
