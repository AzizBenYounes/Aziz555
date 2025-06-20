import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // If using React Router

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
  e.preventDefault();

  const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));

  if (
    registeredUser &&
    registeredUser.email === email &&
    registeredUser.password === password
  ) {
    localStorage.setItem('user', JSON.stringify({ email }));
    navigate('/'); // or any other page you want
  } else {
    setError('Invalid email or password');
  }
};
  return (
    <div className="container mt-5" style={{ maxWidth: '400px' }}>
      <h2>Login</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="form-group mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;