// SupervisionScreen.tsx
import React from 'react';
import Header from './header';
import Sidebar from './sidebar';
import MainContent from './maincontent';

const SupervisionScreen: React.FC = () => {
  return (
    <div className="supervision-screen">
      <Header />
      <div className="content-wrapper">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
};

export default SupervisionScreen;
