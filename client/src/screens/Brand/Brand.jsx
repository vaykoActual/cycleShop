import { useParams, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Brand.css";

function Brand(props) {
  const { id } = useParams();
  return (
    <div>
      randomText{console.log(id)}
      {props.products.map((product) => {
        return <div>{product.brand}</div>;
      })}
    </div>
  );
}

export default Brand;
