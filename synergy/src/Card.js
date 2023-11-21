import React from 'react';
import './Card.css'; // Assuming you will create a separate CSS file for styling

function Card({ title, amount, amountType }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <hr />
      <div className="card-amount">{amount}</div>
      <div className="card-amount-type">{amountType}</div>
    </div>
  );
}

export default Card;