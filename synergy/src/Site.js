import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import './Job.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faFileAlt, faPrint, faCheck } from '@fortawesome/free-solid-svg-icons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


function Site() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('notInspected');
  const { siteId } = useParams();
  const siteDetails = {
    site: 'Penmanshiel',
    siteId: 123,
    customer: 'RES',
    customerId: 456
  };
  const siteTurbineData = [
    { id: 1, name: 'A1', status: 'Operational',lastVisit:"14-08-2023" },
    // ... other job data ...
  ];
const handleRowClick = (siteId) => {
    navigate(`/site/${siteId}`);
};
  const position = [55.8969, -2.3213];
  const customIcon = L.icon({
    iconUrl: '/marker.jpg',
    iconSize: [75, 75],  // Size of the icon
    iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34], 
  });
  return (
    <div className="job">
      <h1>Site Detail Page</h1>
      <p>Site ID: {siteId}</p>
      <p>Site Name: {siteDetails .site}</p>
      <p>
        Customer: 
        <Link className="job-detail-link" to={`/site/${siteDetails .customerId}`}>
          {siteDetails .customer}
        </Link>
      </p>
      <div className="button-row">
        <button className="blue-button">
          <FontAwesomeIcon icon={faPlus} /> Create New
        </button>
        <button className="blue-button">
          <FontAwesomeIcon icon={faFileAlt} /> View Reports
        </button>
        <button className="blue-button">
          <FontAwesomeIcon icon={faPrint} /> Export/Print Reports
        </button>
      </div>
      <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker icon={customIcon} position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      
    </MapContainer>
    <div>
   <h1>Turbines</h1>
      <input type="text" placeholder="Search..." className='search-bar' />
      <button onClick={() => {}}>Create New</button>
      <table>
        <thead>
          <tr>
            <th>Turbine ID</th>
            <th>Name</th>
            <th>Status</th>
            <th>Date of Last Visit</th>
          </tr>
        </thead>
        <tbody>
          {siteTurbineData.map(turbine => (
            <tr key={turbine.id} onClick={() => handleRowClick(turbine.id)}>
              <td>{turbine.id}</td>  
              <td>{turbine.name}</td>  
              <td>{turbine.status}</td>
              <td>{turbine.lastVisit}</td>
            </tr>
          ))}
        </tbody>
        </table>
</div>
</div>
  
  );
}

export default Site;