import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./start.css";

export default function Iniciar() {
  const navigate = useNavigate();
  const [selectedPerson, setSelectedPerson] = useState("");
  const [showTable, setShowTable] = useState(false);

  const handleStartClick = () => {
    if (selectedPerson) {
      setShowTable(true);
    }
  };

  const handleFinishClick = () => {
    setShowTable(false);
    setSelectedPerson("");
  };

  const handlePersonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPerson(event.target.value);
  };

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="start-window-container">
      <div className="header-section">
        <h2>Iniciar</h2>
      </div>
      <div className="info-statistics-container">
        <div className="info-statistics-box">
          <div className="person-selector">
            <label htmlFor="person-select-1">Seleccionar Persona:</label>
            <select
              id="person-select-1"
              value={selectedPerson}
              onChange={handlePersonChange}
            >
              <option value="">Seleccionar</option>
              <option value="person1">Juan Perez</option>
              <option value="person2">Mateo Campo</option>
              <option value="person3">Jose Vera</option>
              <option value="person4">Ruben Villa</option>
              <option value="person5">Anonima</option>
            </select>
            <button id="start-button" onClick={handleStartClick}>
              Comenzar
            </button>
            {showTable && (
              <button id="finish-button" onClick={handleFinishClick}>
                Finalizar
              </button>
            )}
          </div>
          {showTable && (
            <div className="data-table">
              <table>
                <thead>
                  <tr>
                    <th>Letra</th>
                    <th>Tiempo</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: 10 }).map((_, index) => (
                    <tr key={index}>
                      <td className="letter-column">
                        <div className="column-content">
                          
                        </div>
                      </td>
                      <td className="time-column">
                        <div className="column-content">
                          
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      <div className="go-back-button">
        <button onClick={handleGoBack}>Atrás</button>
      </div>
    </div>
  );
}