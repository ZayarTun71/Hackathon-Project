import React, { useState } from "react";
import Dashboard from "..";
import {Content} from "../../components/main_page/content";
import Cookies from "js-cookie";
import { paymentRequest } from "../../api/payment";
import { Alert, notify } from "../../components/main_page/alert";

const Payment = () => {
  
  const user_id = Cookies.get("id");
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

    paymentRequest({
      id: user_id,
      data: cartList,
      payment_method: payMethod,
      amount: total,
    })
      .then((res) => {
        if (res.code) {
          Cookies.remove("cartList");
          // window.location.reload();
          notify("payment successfully", "success");
        }
      })
      .catch((err) => {
        notify("payment failed", "error");
        console.log(err);
      });
  };

  const handlePayMethodChange = (event) => {
    const pay_method = event.target.value;
    setPayMethod(pay_method);
  };

  return (
    <>
      <Dashboard
        virsual={
          <>
            <Alert />
            <Content />
          </>
        }
        children={
          <div className="cart cart--payment">
            <div className="cart__inner">
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
                        <td>{item.item_price * item.quantity} MMK</td>
                      </tr>
                    ))}

                    <tr>
                      <td>Discount</td>
                      <td>-</td>
                    </tr>
                    <tr>
                      <td>Total</td>
                      <td className="total">{total} MMK</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        }
      />
    </>
  );
};

export default Payment;
