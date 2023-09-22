import React from "react";
import { Link } from "react-router-dom";

const AdminDashboardLayout = ({ children, button }) => {
  return (
    <div className="admin-dashboard-container">
      <div className="admin-dashboard-sidebar">
        <ul>
          <li>
            <Link
              to="/admin-dashboard/user"
              className="admin-dashboard-sidebar-link"
            >
              User
            </Link>
          </li>
          <li>
            <Link
              to="/admin-dashboard/item"
              className="admin-dashboard-sidebar-link"
            >
              Item
            </Link>
          </li>
        </ul>
      </div>
      <div className="admin-dashboard-content">
        <div className="content-button">{button}</div>
        <div className="content-table">{children}</div>
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
