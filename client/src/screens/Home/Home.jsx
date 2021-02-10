import React from 'react';
import './Home.css';
import Motorcycles from "../../components/Motorcycles/Motorcycles";

const Home = (props) => {
console.log(props.products)
  return (
     <div> 
     {props.products.map((product) => {
       return(
       <Motorcycles name={product.name} img={product.imgURL} price={product.price} id={product._id}/>
       )
     })}
    </div>
  )
}

export default Home