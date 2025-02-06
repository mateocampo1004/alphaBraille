import React from "react";
import { useNavigate } from "react-router-dom";
import "./people.css";

interface Person {
  name: string;
  age: number;
  id: string;
}

const persons: Person[] = [
  { name: "Juan Perez", age: 40, id: "001" },
  { name: "Mateo Campo", age: 23, id: "002" },
  { name: "Jose Vera", age: 28, id: "003" },
  { name: "Ruben Villa", age: 24, id: "004" },
  { name: "Anonimo", age: 35, id: "005" },
];

export default function Personas() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="persons-container">
      <div className="header-section">
        <h2>Personas</h2>
      </div>
      <div className="persons-list-container">
        <div className="persons-list">
          <table>
            <tbody>
              <tr>
                <td className="centered">Nombre</td>
                <td className="centered">Edad</td>
                <td className="centered">ID</td>
              </tr>
              <tr>
                <td className="centered">
                  {persons.map((person) => (
                    <div key={person.id}>{person.name}</div>
                  ))}
                </td>
                <td className="centered">
                  {persons.map((person) => (
                    <div key={person.id}>{person.age}</div>
                  ))}
                </td>
                <td className="centered">
                  {persons.map((person) => (
                    <div key={person.id}>{person.id}</div>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="go-back-button">
        <button onClick={handleGoBack}>Atrás</button>
      </div>
    </div>
  );
}