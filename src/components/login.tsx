import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Datos de usuario simulados
  const users = [
    { email: "admin@alphabraille.com", password: "12345" },
    { email: "user@alphabraille.com", password: "password" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar campos vacíos
    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    // Verificar credenciales
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) {
      setError("Credenciales incorrectas. Inténtalo de nuevo.");
      return;
    }

    // Si es correcto, redirigir a la pantalla del supervisor
    navigate("/supervisionScreen");
  };

  return (
    <div className="login-container">
      <div className="image-section">
        <img src="/src/assets/mainimg.jpeg" alt="Louis Braille" className="image" />
      </div>
      <div className="form-section">
        <h1>Bienvenido al sistema de supervisión de:</h1>
        <h2>AlphaBraille</h2>
        <p>Dispositivo electrónico para el aprendizaje de la escritura del Alfabeto Braille</p>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo / Usuario"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submit-button">INICIA SESIÓNe</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
