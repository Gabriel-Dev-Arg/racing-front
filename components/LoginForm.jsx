import React from "react";
import { useState } from "react";

// los estados son para componentes o botones 
function LoginForm(){
  //estados para los imputs

  const [email, setEmail] = useState("");//inicialmente vacio
  const [password, setPassword] = useState("")//inicia vacio
  const [message, setMessage] = useState();
  const [error,setError ] = useState("")
  const [success, setSuccess] = useState(false); // Nuevo estado para éxito

  const handleLogin = async (e) =>{
   e.preventDefault();
   setMessage('');
   setMessage('');
  setSuccess(false); // Resetea el estado de éxito
   
  
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    setMessage(data.message);

    if (response.ok) {
      localStorage.setItem('token', data.token); // Guarda el token
      setMessage('Inicio de sesión exitoso');
      setSuccess(true); // Marca como éxito
    } else {
      setError(data.message || 'Error al iniciar sesión');
    }
  } catch (error) {
    setMessage('Error en el servidor');
  }
};

//simulacion de login ()

  return (
    <div className="bg-white/10 p-6 rounded-lg shadow-lg max-w-sm w-full">
      <h2 className="text-2xl font-bold mb-6 text-center">Sign in to your account</h2>
      <form className="space-y-6" onSubmit={handleLogin}>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200">
            Email address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
            className="mt-1 block w-full rounded-md bg-white/5 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium text-gray-200">
              Password
            </label>
            <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300">
              Forgot password?
            </a>
          </div>
          <input
            id="password"
            type="password"
            name="password"
            required
            autoComplete="current-password"
            className="mt-1 block w-full rounded-md bg-white/5 px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={password}
            onChange={(e) => setPassword (e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Sign in
        </button>
        <p className="text-sm text-gray-400 text-center mt-4">
          Not a member?{' '}
          <a href="#" className="text-indigo-400 hover:text-indigo-300">
            Start a 14 day free trial
          </a>
        </p>
      </form>
      {message && <p style={{ color: success ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
}

export default LoginForm;