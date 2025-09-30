import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(localStorage.getItem('token') || null)

useEffect (() =>{
    if (token){
        console.log('Token:', token)
        // Simulación de carga de usuario (en un proyecto real, harías una petición al backend)
        setUser({
            id: '1', email: localStorage.getItem ('email') || 'test@example.com'
        })
    } else {
        setUser(null)
    }
}, [token])

const login = (newToken, email) =>{
    localStorage.setItem('token', newToken);
    localStorage.setItem('email', email) // Guardar email para simulación
    setToken(newToken)
}

const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setToken(null);
    setUser(null)
};

return (
    <AuthContext.Provider value={{user , token , login , logout}}>
        {children}
    </AuthContext.Provider>
)
}
