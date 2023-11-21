import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Jobs from './Jobs';
import Job from './Job';
import Sidebar from './Sidebar';
import Sites from './Sites';
import Site from './Site';
import './App.css';
// ... import other components

function App() {
  return (
    <Router>
      <Sidebar />
      <div className='main-content'>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/job/:jobId" element={<Job />} />
        <Route path='/sites' element={<Sites />} />
        <Route path='/site/:siteId' element={<Site />} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
