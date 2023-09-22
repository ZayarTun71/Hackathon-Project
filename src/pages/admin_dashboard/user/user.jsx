import React from "react";
import DataTable from "react-data-table-component";
import { AdminDashboardButton } from "../../../components/admin_dashboard/adminDashboardButton";
import AdminDashboardLayout from "../../../components/admin_dashboard/AdminDashboardLayout";
import { IconEdit, IconTrash } from "@tabler/icons-react";

const User = () => {
  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
    },
    {
      name: "name",
      selector: (row) => row.name,
    },
    {
      name: "phone",
      selector: (row) => row.phone,
    },
    {
      name: "address",
      selector: (row) => row.address,
    },
    {
      name: "Update",
      cell: (row) => <IconEdit color="orange" />,
      width: "100px",
    },
    {
      name: "Delete",
      cell: (row) => <IconTrash color="red" />,
      width: "100px",
    },
  ];

  const data = [
    {
      id: 1,
      name: "John Doe",
      phone: "555-123-4567",
      address: "123 Main St",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "555-987-6543",
      address: "456 Elm St",
    },
    {
      id: 3,
      name: "Bob Johnson",
      phone: "555-555-5555",
      address: "789 Oak St",
    },
    {
      id: 1,
      name: "John Doe",
      phone: "555-123-4567",
      address: "123 Main St",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "555-987-6543",
      address: "456 Elm St",
    },
    {
      id: 3,
      name: "Bob Johnson",
      phone: "555-555-5555",
      address: "789 Oak St",
    },
    {
      id: 1,
      name: "John Doe",
      phone: "555-123-4567",
      address: "123 Main St",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "555-987-6543",
      address: "456 Elm St",
    },
    {
      id: 3,
      name: "Bob Johnson",
      phone: "555-555-5555",
      address: "789 Oak St",
    },
  ];

  const ExpandedComponent = ({ data }) => (
    <div>
      <h3>Detail</h3>
      <p>name:{data.name}</p>
      <p>email:{data.email}</p>
      <p>phone:{data.phone}</p>
      <p>address:{data.address}</p>
    </div>
  );

  return (
    <AdminDashboardLayout
      button={<AdminDashboardButton label="+" type="button" />}
      children={
        <DataTable
          columns={columns}
          data={data}
          pagination
          paginationPerPage={10}
          title="User List"
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          sortActive={undefined}
        />
      }
    />
  );
};

export default User;
