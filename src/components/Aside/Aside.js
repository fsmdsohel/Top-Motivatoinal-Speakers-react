import React from "react";
import "./Aside.css";

const Aside = ({ data }) => {
  let total = 0;
  let totalCost = 0;

  for (const motivator of data) {
    total = total + 1;
    totalCost = totalCost + motivator.price;
  }

  return (
    <div className="p-3 shadow aside">
      <h4 className="text-center">Added Summary</h4>
      <h5>Total Added: {total}</h5>
      <h5>Total Cost: {totalCost}</h5>
      {data.map((motivator) => {
        return (
          <div className="aside-cart">
            <img src={motivator.picture} alt="" />
            <h6>{motivator.name}</h6>
          </div>
        );
      })}
    </div>
  );
};

export default Aside;
