import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Sites() {
 const navigate = useNavigate();

  const siteData = [
    { id: 1, site: 'Penmanshiel', Location: 'Grantshouse', lat:'55° 52 16.8"', long:'-2° 21 16.2"', turbine: 14, status: 'Operational' },
    // ... other job data ...
  ];
const handleRowClick = (siteId) => {
    navigate(`/site/${siteId}`);
};
 

  return (
    <div>
   <h1>Sites</h1>
      <input type="text" placeholder="Search..." className='search-bar' />
      <button onClick={() => {}}>Create New</button>

      <table>
        <thead>
          <tr>
            <th>Site ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Lat</th>
            <th>Long</th>
            <th>Turbines</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {siteData.map(site => (
            <tr key={site.id} onClick={() => handleRowClick(site.id)}>
              <td>{site.id}</td>  
              <td>{site.site}</td>  
              <td>{site.Location}</td>
              <td>{site.lat}</td>
            <td>{site.long}</td>
            <td>{site.turbine}</td>
             <td>{site.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sites;