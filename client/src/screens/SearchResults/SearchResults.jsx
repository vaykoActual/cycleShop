import { useParams, NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./SearchResults.css";
import Layout from "../../components/shared/Layout/Layout";
// import { set } from "mongoose";

function SearchResults(props) {
  const { id } = useParams();
  const [toggle, setToggle] = useState(true);

  function Check() {
    return props.products.map((product) => {
      if (product.name.toLowerCase().includes(id.toLowerCase())) {
        return (
<<<<<<< HEAD
          <div className="search-container">
            <div className="search-name">{product.name}</div>

            <div className="search-img">
              <img src={product.imgURL} alt={product.name} />
            </div>

            <div className="search-price">{product.price}</div>

            <NavLink className="search-manage" to={`/manage/${product._id}`}>
              Manage
            </NavLink>

            <NavLink className="search-sell" to="/sell">
              sell
            </NavLink>
          </div>
        );
      }
    });
  }

  return (
    <div>
      <Layout user={props.user}>
        <div className="search-container-logo">
          <img
            className="search-logo"
            src="https://www.logo.wine/a/logo/Arch_Motorcycle/Arch_Motorcycle-Logo.wine.svg"
            alt={id}
          />
=======
            props.products.map((product, index) => {
                if (product.name.toLowerCase().includes(id.toLowerCase())) {
                    return (
                        <div className="search-container" key={index}>
                            <div className="search-name">{product.name}</div>

                            <div className="search-img">
                                <img src={product.imgURL} alt={product.name} />
                            </div>

                            <div className="search-price">{product.price}</div>

                            <NavLink
                                className="search-manage"
                                to={`/manage/${product._id}`}
                            >
                                Manage
                        </NavLink>

                            <NavLink className="search-sell" to="/sell">
                                sell
                        </NavLink>
                        </div>
                    );
                }
            })

        )
    }

    return (
        <div>
            <Layout user={props.user}>
                <div className="search-container-logo">
                    <h1 className="search-logo"> Search Results</h1>
                </div>
                <div>
                    {Check()}
                </div>
            </Layout>
>>>>>>> 3a24734350bd50a0e1ff15d5d90ddce874b6215e
        </div>
        <div>{Check()}</div>
      </Layout>
    </div>
  );
}

export default SearchResults;
