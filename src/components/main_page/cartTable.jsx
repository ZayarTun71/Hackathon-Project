import React, { useState } from "react";
import Cookies from "js-cookie";

const CartTable = () => {
  const initialCartList = Cookies.get("cartList")
    ? JSON.parse(Cookies.get("cartList"))
    : [];

  const [cartList, setCartList] = useState(initialCartList);

  const handleDelete = (id) => {
    const updatedCartList = cartList.filter((item) => item.item_id !== id);
    setCartList(updatedCartList);
    Cookies.set("cartList", JSON.stringify(updatedCartList));
    window.location.reload();
  };
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
            <td className="del" onClick={() => handleDelete(item.item_id)}></td>
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
