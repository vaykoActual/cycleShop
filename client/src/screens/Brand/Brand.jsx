import { useParams, Link, NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./Brand.css";
import Layout from "../../components/shared/Layout/Layout";

function Brand(props) {
  const { id } = useParams();
  const [img, setImg] = useState('')
  console.log(id)

  useEffect(() => {
    const brandImg = () => {
      id === 'Arch' && setImg('https://www.archmotorcycle.com/assets/images/logo.png')
      id === 'Harley Davidson' && setImg('https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Harley-Davidson_logo.svg/1200px-Harley-Davidson_logo.svg.png')
      id === 'Yamaha' && setImg('https://www.archmotorcycle.com/assets/images/logo.png')
      id === 'Ducati' && setImg('https://www.archmotorcycle.com/assets/images/logo.png')
      id === 'BMW' && setImg('https://www.archmotorcycle.com/assets/images/logo.png')
    }
    brandImg()
  }, [])
  console.log(props.products)
  return (
    <div>
      <Layout user={props.user}>
        <div>
          <img src={img} alt={id} />
        </div>
        <div>
          {props.products.map((product) => {
            if (product.brand === id) {
              return (
                <div className="brand-container">

                  <div>
                    {product.name}
                  </div>

                  <div>
                    <img src={product.imgURL} alt={product.name} />
                  </div>

                  {/* <div>
                    {product.description}
                  </div> */}

                  <div>
                    {product.price}
                  </div>

                  <div>
                    <NavLink to={`/manage/${product._id}`} > Manage</NavLink>
                  </div>

                  <div>
                  <NavLink to="/sell"> sell</NavLink>
                  </div>

                </div>
              )
            }
          })}
        </div>
      </Layout>
    </div>
  );
}

export default Brand;
