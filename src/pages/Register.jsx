// src/pages/Register.jsx
import React from 'react';
import '../styles/Login.css'; // reutilizando os estilos

export default function Register() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Registre-se</h2>
        <form>
          <label>
            Nome completo:
            <input type="text" name="nome" required />
          </label>
          <label>
            Email:
            <input type="email" name="email" required />
          </label>
          <label>
            Telefone:
            <input type="tel" name="telefone" required />
          </label>
          <label>
            Senha:
            <input type="password" name="senha" required />
          </label>

          <button type="submit">Registrar-se</button>
        </form>
      </div>
    </div>
  );
}