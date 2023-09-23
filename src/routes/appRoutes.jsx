import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import User from "../pages/admin_dashboard/user/user";
import Item from "../pages/admin_dashboard/item/item";
import ProductList from "../pages/main_page/productList";
import { ProductDetail } from "../pages/main_page/productDetail";

export const AppRoutes = () => {
  const token = Cookies.get("token");

  return (
    <>
      <Routes>
        <Route path="/admin-dashboard/user" element={<User />} />
        <Route path="/admin-dashboard/item" element={<Item />} />
        <Route path="/dashboard/product-list" element={<ProductList/>} />
        <Route path="/dashboard/product-detail" element={<ProductDetail/>} />
        {/* {!token && (
          <>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}

        {token && (
          <>
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </>
        )} */}
      </Routes>
    </>
  );
};