import React from "react";
import { useNavigate } from "react-router-dom";
import "./supervision.css";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    window.location.href = "/";
  };

  const handleNavigate = (url: string) => {
    navigate(url);
  };

  return (
    <div className="dashboard-container">
      
      <div className="dashboard-header">
        <h1 className="dashboard-title">Sistema de supervisión - Proyecto AlphaBraille</h1>
        <button onClick={handleLogout} className="logout-button">
          Cerrar sesión
        </button>
      </div>

      
      <div className="supervisor-card">
        <div className="supervisor-info">
          <img
            src="src/assets/supervisor.jpg"
            alt="Supervisor"
            className="supervisor-image"
          />
          <div>
            <strong>Supervisor</strong>
            <p>José Antonio Vera Montes</p>
          </div>
        </div>
      </div>

      
      <div className="buttons-container">
        <button onClick={() => handleNavigate("/iniciar")} className="nav-button">
          Iniciar
        </button>
        <button onClick={() => handleNavigate("/personas")} className="nav-button">
          Personas
        </button>
        <button onClick={() => handleNavigate("/estadisticas")} className="nav-button">
          Estadísticas
        </button>
      </div>

      
      <div className="info-statistics-container">
        <div className="info-statistics-box">
          <h2>Información y Estadísticas Relevantes</h2>
          <p>
            En el Proyecto AlphaBraille, nos enfocamos en brindar soluciones tecnológicas
            innovadoras para mejorar la accesibilidad y la calidad de vida de las
            personas con discapacidad visual. Nuestras estadísticas muestran un
            crecimiento constante en el número de usuarios atendidos y una
            satisfacción cada vez mayor entre nuestros beneficiarios.
          </p>
          <div className="statistics-summary">
            <div>
              <strong>Usuarios Atendidos</strong>
              <p>5</p>
            </div>
            <div>
              <strong>Dispositivos Entregados</strong>
              <p>1</p>
            </div>
            <div>
              <strong>Satisfacción de Usuarios</strong>
              <p>70%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;