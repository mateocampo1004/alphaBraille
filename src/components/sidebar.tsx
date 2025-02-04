import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="logo.png" alt="Logo" />
        <div className="supervisor-info">
          <h3>Supervisor</h3>
          <p>José Antonio Vera Montes</p>
        </div>
      </div>
      {/* Agrega aquí los elementos del menú lateral */}
    </div>
  );
};

export default Sidebar;
