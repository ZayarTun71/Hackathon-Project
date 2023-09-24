import React from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

export const CartCheckout = () => {
  const cartList = Cookies.get("cartList")
    ? JSON.parse(Cookies.get("cartList"))
    : [];

  const total = cartList.reduce((acc, item) => {
    return acc + item.item_price * item.quantity;
  }, 0);

  return (
    <div className="amt">
      <table className="amt-table">
        <tbody>
          <tr>
            <th>CART TOTALS</th>
          </tr>
          <tr>
            <td>Subtotal</td>
            <td>{total}MMK</td>
          </tr>
          <tr>
            <td>Discount</td>
            <td>-</td>
          </tr>
          <tr>
            <td>Total</td>
            <td className="total">{total}MMK</td>
          </tr>
        </tbody>
      </table>
      {!cartList.length == 0 && (
        <div className="c-btn c-btn--checkout">
          <Link to="/main/cart-payment" className="card-link">
            Checkout
          </Link>
        </div>
      )}
    </div>
  );
};
