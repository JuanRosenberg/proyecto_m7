import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AlertState from './context/alert/AlertState';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <AlertState>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <AppRoutes />
        </div>
      </Router>
    </AlertState>
  );
}

export default App;