import React from "react";
import Cookies from "js-cookie";

const CartTable = () => {
  const cartList = Cookies.get("cartList")
    ? JSON.parse(Cookies.get("cartList"))
    : [];

    console.log(cartList);
  return (
    <table className="item-table">
      <thead>
        <tr>
          <th colSpan="3">PRODUCT</th>
          <th>PRICE</th>
          <th>QUANTITY</th>
          <th>SUBTOTAL</th>
        </tr>
      </thead>
      <tbody>
      {cartList.map((item) => (
          <tr key={item.item_id}>
            <td className="del"></td>
            <td>
              <img src={item.image} alt="Product" />
            </td>
            <td>{item.item_name}</td>
            <td>{item.item_price} MMK</td>
            <td>{item.quantity}</td>
            <td>{item.item_price * item.quantity} MMK</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default CartTable;
