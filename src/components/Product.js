import React from "react";
import "./style.css";

function Product() {
  //jsx
  return (

   
    <div className="col-sm-3 mr-auto">
    <div className="sp-demo">
      <img className="mx-auto d-block"  src={require("../images/card1.jpg")}
            alt="df" />
      <p className="text-center">Card DDR4</p>
      <span>2.200.000đ</span>
      <strike className="sale-off pl-5">3.000.000đ</strike><br />
      <div className="review mt-3">
        <i className="start fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <i className="fa fa-star" />
        <span>(20 đánh giá)</span>
      </div>
      <div className="overlay">
        <button type="button" className="btn-ct btn btn-primary">Chi Tiết</button>
      </div>
    </div>
  </div>
  

  );
}

export default Product;