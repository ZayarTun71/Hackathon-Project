import React from "react";
import { Link } from "react-router-dom";

export const Content = () => {
  return (
    <section className="l-label">
      <div className="l-label__inner">
        <h2 className="label-title">Items</h2>
        <ul>
          <li>
            <Link to="/" href="#" className="label-link">
              Home
            </Link>
          </li>
          <li>
            <a href="#" className="label-link active">
              Items
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export const ContentDetail = ({ name }) => {
  return (
    <section className="l-content-area">
      <div className="l-content">
        <section className="l-label">
          <div className="l-label__inner">
            <h2 className="label-title">{name}</h2>
            <ul>
              <li>
                <Link to="/" href="#" className="label-link">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="label-link">
                  Product List
                </a>
              </li>
              <li>
                <a href="#" className="label-link active">
                  {name}
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
};

export const ContentCart = () => {
  return (
    <section className="l-content-area">
      <div className="l-content">
        <section className="l-label">
          <div className="l-label__inner">
            <h2 className="label-title">Cart</h2>
            <ul>
              <li>
                <Link to="/" href="#" className="label-link">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="label-link">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
};

export const ContentPayment = () => {
  return (
    <section className="l-content-area">
      <div className="l-content">
        <section className="l-label">
          <div className="l-label__inner">
            <h2 className="label-title">Payment</h2>
            <ul>
              <li>
                <Link to="/" href="#" className="label-link">
                  Home
                </Link>
              </li>
              <li>
                <a href="#" className="label-link">
                  Payment
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
};
