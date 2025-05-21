import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  // Verifica se está na página de login
  const isLoginPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {/* Header com fundo cinza */}
      <header style={{ padding: '1rem', background: '#D9D9D9' }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {/* Lado esquerdo: título */}
          <div>
            <h1 style={{ margin: '0' }}>💄 Cursos de Beleza e Estética</h1>
          </div>

          {/* Lado direito: navegação e login */}
          <nav style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center'
          }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>Início</Link>
            <Link to="/courses" style={{ textDecoration: 'none', color: '#000' }}>Cursos</Link>
            <Link to="/login" style={{
              textDecoration: 'none',
              color: '#000',
              fontWeight: 'bold'
            }}>
              👤 Login
            </Link>
          </nav>
        </div>
      </header>

      {/* Mostrar banner apenas se NÃO for a página de login */}
      {!isLoginPage && (
        <div>
          <img
            src="https://via.placeholder.com/1200x300?text=Banner+de+Beleza"
            alt="Banner de beleza"
            style={{ width: '100%', display: 'block' }}
          />
        </div>
      )}
    </>
  );
}

