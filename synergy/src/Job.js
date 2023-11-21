import React, {useState} from 'react';
import { useParams, Link } from 'react-router-dom';
import './Job.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFileAlt, faPrint, faCheck } from '@fortawesome/free-solid-svg-icons';

function Job() {
    const [activeTab, setActiveTab] = useState('notInspected');
  const { jobId } = useParams();
  const jobDetails = {
    site: 'Penmanshiel',
    siteId: 123,
    customer: 'RES',
    customerId: 456
  };

  const notInspectedData = [
    { no: 1, description: 'Item 1', category: 'Category A', location: 'Location A', status: 'Pending', lastReportDate: '2021-01-01' },
    // ... more data ...
  ];
  
  const inspectedData = [
    { no: 2, description: 'Item 2', category: 'Category B', location: 'Location B', status: 'Completed', lastReportDate: '2021-02-01' },
    // ... more data ...
  ];
  
  // Placeholder for job data fetching logic
  // In a real app, you would fetch the job details from a server using this ID

  return (
    <div className="job">
      <h1>Job Detail Page</h1>
      <p>Job ID: {jobId}</p>
      <p>
        Site: 
        <Link className="job-detail-link" to={`/site/${jobDetails .siteId}`}>
          {jobDetails .site}
        </Link>
      </p>
      <p>
        Customer: 
        <Link className="job-detail-link" to={`/site/${jobDetails .customerId}`}>
          {jobDetails .customer}
        </Link>
      </p>
      <div className="button-row">
        <button className="blue-button">
          <FontAwesomeIcon icon={faPlus} /> Create New
        </button>
        <button className="blue-button">
          <FontAwesomeIcon icon={faFileAlt} /> Approve Reports
        </button>
        <button className="blue-button">
          <FontAwesomeIcon icon={faPrint} /> Export/Print
        </button>
        <button className="blue-button">
          <FontAwesomeIcon icon={faCheck} /> Set Complete
        </button>
      </div>
      <div className="tabs">
      <button 
        className={`tab-button ${activeTab === 'notInspected' ? 'active' : ''}`}
        onClick={() => setActiveTab('notInspected')}
      >
        Not Inspected
      </button>
      <button 
        className={`tab-button ${activeTab === 'inspected' ? 'active' : ''}`}
        onClick={() => setActiveTab('inspected')}
      >
        Inspected
      </button>
    </div>
    <div>
    {/* ... tabs ... */}
    <div className="tab-content">
      {activeTab === 'notInspected' && (
       <table>
       <thead>
         <tr>
           <th>Item No</th>
           <th>Description</th>
           <th>Category</th>
           <th>Location</th>
           <th>Status</th>
           <th>Last Report Date</th>
         </tr>
       </thead>
       <tbody>
         {notInspectedData.map(item => (
           <tr key={item.no}>
             <td>{item.no}</td>
             <td>{item.description}</td>
             <td>{item.category}</td>
             <td>{item.location}</td>
             <td>{item.status}</td>
             <td>{item.lastReportDate}</td>
           </tr>
         ))}
       </tbody>
     </table>
      )}
      {activeTab === 'inspected' && (
     <table>
     <thead>
       <tr>
         <th>Item No</th>
         <th>Description</th>
         <th>Category</th>
         <th>Location</th>
         <th>Status</th>
         <th>Last Report Date</th>
       </tr>
     </thead>
     <tbody>
       {inspectedData.map(item => (
         <tr key={item.no}>
           <td>{item.no}</td>
           <td>{item.description}</td>
           <td>{item.category}</td>
           <td>{item.location}</td>
           <td>{item.status}</td>
           <td>{item.lastReportDate}</td>
         </tr>
       ))}
     </tbody>
   </table>
      )}
    </div>
  </div>
</div>
  
  );
}

export default Job;