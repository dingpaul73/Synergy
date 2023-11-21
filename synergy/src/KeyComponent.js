import React from 'react';

function KeyComponent({ chartData }) {
  return (
    <div>
      {chartData.labels.map((label, index) => (
        <div key={label} className="key-item">
          <div className="key-label">{label}</div>
          <div className="key-bar" style={{ width: `${chartData.datasets[0].data[index]}%` }}></div>
        </div>
      ))}
    </div>
  );
}

export default KeyComponent;
