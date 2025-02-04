import React from "react";
import "./dashboard.css"; // Crea estilos para la segunda pantalla

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Sistema de supervisión - Proyecto AlphaBraille</h1>
        <button className="logout-button">Cerrar sesión</button>
      </header>
      <div className="user-list">
        <h2>Supervisor</h2>
        <p>José Antonio Vera Montes</p>
        <h3>Usuarios</h3>
        <ul>
          <li>Juan Perez</li>
          <li>Juan Perez</li>
          <li>Juan Perez</li>
          <li>Juan Perez</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
