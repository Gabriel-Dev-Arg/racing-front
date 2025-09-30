import React from 'react'
import './App.css'
import LoginForm from '../components/LoginForm'
import HeroSection from '../components/HeroSection'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import BackgroundImage from '../components/BackgroundImage'

function App() {
  const { token, logout } = useContext(AuthContext);

  const handleLogout = () =>{
    logout();// llama a la funcion de logout del contexto
  };

  return (
    <>
 <div className="flex h-screen overflow-hidden">
      {/* Columna izquierda: LoginForm o HeroSection */}
      <div className="w-1/2 flex items-center justify-center bg-gray-800">
        {!token ? <LoginForm /> : <HeroSection />}
      </div>
      {/* Columna derecha: Imagen o fondo */}
      <div className="w-1/2">
        <BackgroundImage />
        {token && (
          <div className="absolute top-4 right-4">
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </div>
      
    </>
  )
}

export default App
