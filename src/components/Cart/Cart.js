import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { data, handleHireMe } = props;
  const {name,picture,age,email,gender,price,address} = data;
  
  return (
    <div className="col">
      <div className="card">
        <img style={{height:'250px', objectFit: 'cover'}} src={picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p>Gender: {gender}</p>
          <p>Age: {age}</p>
          <p>Email: {email}</p>
          <p>Hire Rate: {price}</p>
          <p className="card-text">
            Address: {address}
          </p>
          <button className="btn btn-primary" onClick={()=> handleHireMe(data)}>Hire Me</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
