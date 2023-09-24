import React, { useState } from "react";
import Dashboard from "..";
import Content from "../../components/main_page/content";
import Cookies from "js-cookie";
import { paymentRequest } from "../../api/payment";

const Payment = () => {
  const cartList = Cookies.get("cartList")
    ? JSON.parse(Cookies.get("cartList"))
    : [];

  const total = cartList.reduce((acc, item) => {
    return acc + item.item_price * item.quantity;
  }, 0);

  const [billInfo, setBillInfo] = useState({
    full_name: "",
    address: "",
    phone: "",
  });

  const [payMethod, setPayMethod] = useState("");

  const handlePayment = (e) => {
    e.preventDefault();
  
      const data = [
        {
          user_id:1,
          item_id: 1,
          type: "some_type",
          quantity: 20,
          buy_date: "2023-09-23",
        },
        {
          user_id:1,
          item_id: 2,
          type: "another_type",
          quantity: 30,
          buy_date: "2023-09-24",
        },
      ]
  

    paymentRequest(data);
  };

  console.log(cartList);
  const handlePayMethodChange = (event) => {
    const pay_method = event.target.value;
    setPayMethod(pay_method);
  };

  return (
    <Dashboard
      virsual={
        <>
          <Content />
        </>
      }
      children={
        <div className="cart">
          <div className="card__inner">
            <div className="bill-info">
              <div className="bill-info__inner">
                <h3 className="title">Bill Information</h3>
                <form
                  action="/"
                  method="get"
                  className="form"
                  onSubmit={handlePayment}
                >
                  <ul>
                    <li>
                      <label htmlFor="fname" className="required">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        onChange={(e) => {
                          setBillInfo({
                            ...billInfo,
                            full_name: e.target.value,
                          });
                        }}
                      />
                    </li>
                    <li>
                      <label htmlFor="fname" className="required">
                        Address
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        onChange={(e) => {
                          setBillInfo({
                            ...setBillInfo,
                            address: e.target.value,
                          });
                        }}
                      />
                    </li>
                    <li>
                      <label htmlFor="fname" className="required">
                        Phone
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        onChange={(e) => {
                          setBillInfo({
                            ...billInfo,
                            phone: e.target.value,
                          });
                        }}
                      />
                    </li>
                  </ul>

                  <div className="payment">
                    <p>Choose Payment Method:</p>
                    <div className="payment__inner">
                      <div className="payment-btn">
                        <input
                          type="radio"
                          id="kpay"
                          name="payment"
                          value="kpay"
                          onChange={handlePayMethodChange}
                        />
                        <label htmlFor="kpay" className="kpay"></label>
                      </div>
                      <div className="payment-btn">
                        <input
                          type="radio"
                          id="wave"
                          name="payment"
                          value="wave"
                          onChange={handlePayMethodChange}
                        />
                        <label htmlFor="wave" className="wave"></label>
                      </div>
                      <div className="payment-btn">
                        <input
                          type="radio"
                          id="cod"
                          name="payment"
                          value="cod"
                          onChange={handlePayMethodChange}
                        />
                        <label htmlFor="cod" className="cod">
                          Cash On Delivery
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="c-btn">
                    <p className="btn">
                      <input type="submit" value="Payment" />
                    </p>
                  </div>
                </form>
              </div>
            </div>
            <div className="amt">
              <table className="amt-table">
                <tbody>
                  <tr>
                    <th>Your Order</th>
                  </tr>
                  <tr>
                    <td>Product</td>
                    <td>Subtotal</td>
                  </tr>
                  {cartList.map((item) => (
                    <tr key={item.item_id}>
                      <td>
                        {item.item_name} x {item.quantity}
                      </td>
                      <td>{item.item_price * item.quantity}MK</td>
                    </tr>
                  ))}

                  <tr>
                    <td>Discount</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td className="total">{total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Payment;
