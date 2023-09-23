import React from "react";

const Content = () => {
  return (
    <section className="l-label">
      <div className="l-label__inner">
        <h2 className="label-title">Items</h2>
        <ul>
          <li>
            <a href="#" className="label-link">
              Home
            </a>
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

export default Content;
