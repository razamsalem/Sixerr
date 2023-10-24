import React from 'react';

const DashboardCard = ({ title, amount, icon }) => {
  return (
    <div className="dashboard-card">
      <div className="card-icon">
        <img src={icon} alt="card Icon" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-amount">{amount}</p>
      </div>
    </div>
  )
}

export default DashboardCard