import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Jobs() {
 const navigate = useNavigate();

  const jobData = [
    { id: 1, customer: 'RES', site: 'Penmanshiel', status: 'Pending', technician: 'Tech A' },
    // ... other job data ...
  ];
const handleRowClick = (jobId) => {
    navigate(`/job/${jobId}`);
};
 

  return (
    <div>
   <h1>Jobs</h1>
      <input type="text" placeholder="Search..." className='search-bar' />
      <button onClick={() => {}}>Create New</button>

      <table>
        <thead>
          <tr>
            <th>Job ID</th>
            <th>Customer</th>
            <th>Site</th>
            <th>Status</th>
            <th>Technician</th>
          </tr>
        </thead>
        <tbody>
          {jobData.map(job => (
            <tr key={job.id} onClick={() => handleRowClick(job.id)}>
              <td>{job.id}</td>  
              <td>{job.customer}</td>
              <td>{job.site}</td>
              <td>{job.status}</td>
              <td>{job.technician}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Jobs;
