import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./styles.css"; // Asegúrate de que los estilos sean los correctos

const UserDetails: React.FC = () => {
  const { userName } = useParams<{ userName: string }>();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/"); // Redirige al Dashboard
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Sistema de supervisión - Proyecto AlphaBraille</h1>
        <button className="logout-btn" onClick={() => navigate("/")}>
          Cerrar sesión
        </button>
      </header>

      <div className="user-details">
        <h2>Detalles del usuario</h2>
        <p>Nombre: {userName}, Edad: 32</p>

        <label htmlFor="usage-time">Tiempo de uso registrado:</label>
        <input type="text" id="usage-time" placeholder="Ingrese el tiempo..." />

        <label htmlFor="input-characters">Caracteres ingresados:</label>
        <textarea
          id="input-characters"
          placeholder="Ingrese los caracteres..."
          rows={5}
        ></textarea>

        <button onClick={handleBackClick} className="back-btn">
          Volver
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
