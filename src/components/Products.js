import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Cartcontext } from "../context/Context";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  const Globalstate = useContext(Cartcontext);
  const dispatch = Globalstate.dispatch;



  useEffect(() => {
 
    const getProducts = async () => {
      let componentMounted = true;
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");

      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading ...</>;
  };

  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => {
          product.quantity = 1;
          return (
            <>
              <div className="col-md-4 mb-4">
                <div class="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div class="card-body">
                    <h5 class="card-title mb-0">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p class="card-text lead fw-bold">₱{product.price}</p>
                    <NavLink
                      to={`/products/${product.id}`}
                      className="btn btn-outline-warning m-2"
                    >
                      See Details
                    </NavLink>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() =>
                        dispatch({ type: "AddToCart", payload: product })
                      }
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center fw-bold m-5"> New Arrivals </h1>
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
        {/* <ShowProducts/> */}
      </div>
    </div>
  );
};

export default Products;
