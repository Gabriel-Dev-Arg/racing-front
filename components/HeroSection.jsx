import React from "react";
import {AuthContext} from '../src/context/AuthContext'
import { useContext } from "react";


function HeroSection() {
  const {user, token} = useContext(AuthContext)

  if (!token) return null; // No se muestra sin autenticación

  return (
<div className="p-6 bg-gray-800 text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold">¡Bienvenido, {user?.email || 'Usuario'}!</h1>
      <p className="mt-4">Esta es tu sección exclusiva.</p>
    </div>
  );
}

export default HeroSection;