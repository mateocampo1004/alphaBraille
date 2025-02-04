import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Sistema de supervisión - Proyecto AlphaBraille</h1>
        <button className="logout-btn">Cerrar sesión</button>
      </div>
    </header>
  );
};

export default Header;
