import React from "react";
import { useNavigate } from "react-router-dom";
import "./statistics.css";

interface PersonStats {
  name: string;
  date: string;
  time: string;
  activity: string;
}

const personStats: PersonStats[] = [
  {
    name: "Juan Perez",
    date: "2025-01-31",
    time: "10:30 AM",
    activity: "A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z",
  },
  {
    name: "Mateo Campo",
    date: "2025-01-31",
    time: "2:45 PM",
    activity: "A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z",
  },
  {
    name: "Jose Vera",
    date: "2025-01-31",
    time: "9:00 AM",
    activity: "A-B-C-D-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z",
  },
  {
    name: "Ruben Villa",
    date: "2025-01-31",
    time: "4:20 PM",
    activity: "A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z",
  },
  {
    name: "Anonimo",
    date: "2025-01-31",
    time: "11:15 AM",
    activity: "A-B-C-D-E-F-G-H-I-J-K-L-M-N-O-P-Q-R-S-T-U-V-W-X-Y-Z",
  },
];

const Estadisticas: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  const [selectedPerson, setSelectedPerson] = React.useState<PersonStats | null>(null);

  const handlePersonClick = (person: PersonStats) => {
    setSelectedPerson(person);
  };

  return (
    <div className="stats-container">
      <div className="header-section">
        <h2>Estadísticas</h2>
      </div>
      <div className="stats-list-container">
        {personStats.map((person) => (
          <div key={person.name} className="person-stats-container">
            <div className="person-stats-header" onClick={() => handlePersonClick(person)}>
              <h3>{person.name}</h3>
            </div>
            {selectedPerson?.name === person.name && (
              <div className="person-stats-details">
                <div>Fecha: {person.date}</div>
                <div>Hora: {person.time}</div>
                <div>Actividad: {person.activity}</div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="go-back-button">
        <button onClick={handleGoBack}>Atrás</button>
      </div>
    </div>
  );
};

export default Estadisticas;