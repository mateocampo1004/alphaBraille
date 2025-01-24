import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  
  const handleLogout = () => {
    navigate("/"); 
  };

  
  const handleUserClick = (userName: string) => {
    navigate(`/userDetails/${userName}`); 
  };

  
  const users = ["Juan Perez", "Juan Perez", "Juan Perez", "Juan Perez"];

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Sistema de supervisión - Proyecto AlphaBraille</h1>
        <button className="logout-button" onClick={handleLogout}>
          Cerrar sesión
        </button>
      </header>
      <div className="user-list">
        <h2>Supervisor</h2>
        <h3>José Antonio Vera Montes</h3>
        <p>Usuarios</p>
        <ul>
          {users.map((user) => (
            <li
              key={user}
              className="user-item"
              onClick={() => handleUserClick(user)}
              role="button"
              tabIndex={0}
            >
              {user}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
