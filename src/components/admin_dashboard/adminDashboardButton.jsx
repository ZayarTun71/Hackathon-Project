import React from "react";

export const AdminDashboardButton = ({ label, type,onclick}) => {
  return (
    <div className="admin-button-container">
      <button className="admin-button" type={type} onclick={onclick}>{label}</button>
    </div>
  );
};
