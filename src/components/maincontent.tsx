// MainContent.tsx
import React from 'react';

const MainContent: React.FC = () => {
  return (
    <div className="main-content">
      <div className="section">
        <button className="action-btn">Iniciar</button>
        <div className="dropdown">
          <input type="text" placeholder="Buscar usuarios" />
          <ul className="user-list">
            <li>Usuario 1</li>
            <li>Usuario 2</li>
            <li>Usuario 3</li>
          </ul>
          <button className="start-btn">Empezar</button>
        </div>
      </div>
      <div className="section">
        <button className="action-btn">Estadísticas</button>
      </div>
      <div className="section">
        <button className="action-btn">Personas</button>
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>Letra</th>
            <th>Tiempo</th>
          </tr>
        </thead>
        <tbody>
          {/* Aquí se generarán los datos de la tabla */}
        </tbody>
      </table>
    </div>
  );
};

export default MainContent;
