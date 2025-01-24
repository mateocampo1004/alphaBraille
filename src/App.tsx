import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./components/login";
import SupervisorPage from "./components/dashboard";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<SupervisorPage />} />
    </Routes>
  );
};

export default App;
