// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Jobs from './ViewJobs';
import ViewJobs from './ViewJobs';
import AddJob from './AddJob';
import Personnel from './Personnel';
import Customers from './Customers';
import Sites from './Sites';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
