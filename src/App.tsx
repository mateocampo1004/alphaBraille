import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/login";
import SupervisorPage from "./components/supervisionScreen";
import Start from "./components/start";
import People from "./components/people";
import Statistics from "./components/statistics";



const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/supervisionScreen" element={<SupervisorPage />} />
      <Route path="/iniciar" element={<Start />} />
      <Route path="/personas" element={<People />} />
      <Route path="/estadisticas" element={<Statistics />} />
    </Routes>
  );
};

export default App;
