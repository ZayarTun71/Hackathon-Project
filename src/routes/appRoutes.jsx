import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import User from "../pages/admin_dashboard/user/user";
import Item from "../pages/admin_dashboard/item/item";
import ProductList from "../pages/main_page/productList";
import { ProductDetail } from "../pages/main_page/productDetail";
import MainPage from "../pages/main_page/mainPage";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Cart from "../pages/main_page/cart";
import Payment from "../pages/main_page/payment";
import { useCookies } from "react-cookie";

export const AppRoutes = () => {

  const [cookies] = useCookies(["token"]);
  return (
    <>
      <Routes>
        <Route path="/admin-dashboard/user" element={<User />} />
        <Route path="/admin-dashboard/item" element={<Item />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/main/product-list" element={<ProductList />} />
        <Route path="/main/product-detail" element={<ProductDetail />} />
        <Route path="/main/cart" element={<Cart />} />
        <Route path="/main/cart-payment" element={<Payment />} />
        {!cookies.token && (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        )}
      </Routes>
    </>
  );
};
