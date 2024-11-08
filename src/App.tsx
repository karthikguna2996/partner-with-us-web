// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import OwnerDetailsPage from './Pages/OwnerDetailsPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-100 p-6">
          <Routes>
            {/* Define routes here. Add more routes as needed for additional pages */}
            <Route path="/" element={<OwnerDetailsPage />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
