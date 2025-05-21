// src/pages/Login.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // 👈 Import do Link
import '../styles/Login.css';

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Senha:
            <input type="password" name="password" required />
          </label>

          {/* Botão de login */}
          <button type="submit">Entrar</button>

          {/* Botão de registro como link */}
          <Link to="/register">
            <button
              type="button"
              style={{
                backgroundColor: '#5271FF',
                color: '#fff',
                padding: '0.75rem',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                width: '100%',
                marginTop: '0.5rem'
              }}
            >
              Registre-se
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}