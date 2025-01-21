import React from "react";
import "./login.css";

const LoginPage: React.FC = () => {
  return (
    <div className="login-container">
      <div className="image-section">
        <img
          src="src/assets/mainimg.jpeg" // Ajusta esta ruta según tu proyecto
          alt="Louis Braille"
          className="image"
        />
      </div>
      <div className="form-section">
        <h1>Bienvenido al sistema de supervisión de:</h1>
        <h2>AlphaBraille</h2>
        <p>Dispositivo electrónico para el aprendizaje de la escritura del Alfabeto Braille</p>
        <form>
          <input type="email" placeholder="Correo / Usuario" className="input-field" />
          <input type="password" placeholder="Contraseña" className="input-field" />
          <button type="submit" className="submit-button">INICIA SESIÓN</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
