import React, { useState } from 'react';
import './App.css';
import Card from './Card.js';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('summary');
  const pieChartData = {
    labels: ['Fail', 'Pass', 'Not Seen', 'No Status'],
    datasets: [{
      data: [20, 50, 10, 20]
    }]
  };
  console.log(pieChartData); // Add this line to inspect chartData
  return (
    <div>
      <h1>Dashboard</h1>
      <input type="text" placeholder="Search..." className='search-bar' />
      {/* Tab buttons */}
      <div>
        <button className={`tab-button ${activeTab === 'summary' ? 'active' : ''}`} onClick={() => setActiveTab('summary')}>Summary</button>
        <button className={`tab-button ${activeTab === 'openJobs' ? 'active' : ''}`} onClick={() => setActiveTab('openJobs')}>Open Jobs</button>
        <button className={`tab-button ${activeTab === 'siteReports' ? 'active' : ''}`} onClick={() => setActiveTab('siteReports')}>Site Reports</button>
        <button className={`tab-button ${activeTab === 'rejectedReports' ? 'active' : ''}`} onClick={() => setActiveTab('rejectedReports')}>Rejected Reports</button>
        <button className={`tab-button ${activeTab === 'reportsApproval' ? 'active' : ''}`} onClick={() => setActiveTab('reportsApproval')}>Reports Needing Approval</button>
      </div>
      {/* Tab content */}
      <div className="tab-content">
      {activeTab === 'summary' && <div><h2>Reports Awaiting Approval</h2>
          <div className="card-container">
          <Card title="Items under Management" amount="5" amountType="Total Items" />
          <Card title="Jobs This Month" amount="10" amountType="Jobs" />
            <Card title="Jobs Next Month" amount="10" amountType="Jobs" />
            <Card title="Overdue" amount="5" amountType="Total Items" />
          </div>
          </div>}
      {activeTab === 'openJobs' && <div>Open Jobs Content</div>}
      {activeTab === 'siteReports' && <div>Site Reports Content</div>}
      {activeTab === 'rejectedReports' && <div>Rejected Reports Content</div>}
      {activeTab === 'reportsApproval' && <div>Reports Needing Approval Content</div>}
      <hr/>
      <div>
    
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
