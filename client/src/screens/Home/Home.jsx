import React from "react";
import "./Home.css";
import Motorcycles from "../../components/Motorcycles/Motorcycles";
import Layout from "../../components/shared/Layout/Layout.jsx";

const Home = (props) => {
  console.log(props.products);
  return (
    <div>
      <Layout>
      <div>
        {props.products.map((product) => {
          return (
            <Motorcycles
              name={product.name}
              img={product.imgURL}
              price={product.price}
              id={product._id}
            />
          );
        })}
      </div>
      </Layout>
    </div>
  );
};

export default Home;
