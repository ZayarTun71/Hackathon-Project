import React from "react";
import DataTable from "react-data-table-component";
import { AdminDashboardButton } from "../../../components/admin_dashboard/adminDashboardButton";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import AdminDashboardLayout from "../../../components/admin_dashboard/AdminDashboardLayout";

const Item = () => {
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
      name: "description",
      selector: (row) => row.description,
    },
    {
      name: "price",
      selector: (row) => row.price,
    },
    {
      name: "category",
      selector: (row) => row.category,
    },
    {
      name: "stock",
      selector: (row) => row.stock,
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
      name: "Item 1",
      description: "Description 1",
      price: "10.99",
      category: "Category 1",
      stock: 100,
    },
    {
      id: 2,
      name: "Item 2",
      description: "Description 2",
      price: "19.99",
      category: "Category 2",
      stock: 50,
    },
    {
      id: 3,
      name: "Item 3",
      description: "Description 3",
      price: "14.99",
      category: "Category 3",
      stock: 75,
    },
    {
      id: 1,
      name: "Item 1",
      description: "Description 1",
      price: "10.99",
      category: "Category 1",
      stock: 100,
    },
    {
      id: 2,
      name: "Item 2",
      description: "Description 2",
      price: "19.99",
      category: "Category 2",
      stock: 50,
    },
    {
      id: 3,
      name: "Item 3",
      description: "Description 3",
      price: "14.99",
      category: "Category 3",
      stock: 75,
    },
    {
      id: 1,
      name: "Item 1",
      description: "Description 1",
      price: "10.99",
      category: "Category 1",
      stock: 100,
    },
    {
      id: 2,
      name: "Item 2",
      description: "Description 2",
      price: "19.99",
      category: "Category 2",
      stock: 50,
    },
    {
      id: 3,
      name: "Item 3",
      description: "Description 3",
      price: "14.99",
      category: "Category 3",
      stock: 75,
    },
  ];

  const ExpandedComponent = ({ data }) => (
    <div>
      <h3>Detail</h3>
      <p>name:{data.name}</p>
      <p>description:{data.description}</p>
      <p>price:{data.price}</p>
      <p>category:{data.category}</p>
      <p>stock:{data.stock}</p>
    </div>
  );

  return (
    <AdminDashboardLayout
      button={<AdminDashboardButton label="+" type="button" />}
      children={
        <div className="admin-dashboard-user">
          <DataTable
            columns={columns}
            data={data}
            pagination
            paginationPerPage={10}
            title="Item List"
            expandableRows
            expandableRowsComponent={ExpandedComponent}
            sortActive={undefined}
          />
        </div>
      }
    />
  );
};

export default Item;
