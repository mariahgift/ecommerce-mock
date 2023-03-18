import React, { useContext } from "react";
import { Cartcontext } from "../context/Context";
import "../index.css";
const Cart = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  const dispatch = Globalstate.dispatch;

  const total = state.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <div>
      <h1 className="text-center m-5">Cart</h1>
      <div className="cart">
        {state.map((product, index) => {
          return (
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <img
                      className="img-thumbnail"
                      src={product.image}
                      alt={product.title}
                    />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>
                    <button
                      className="btn btn-info m-2"
                      onClick={() =>
                        dispatch({ type: "IncreaseCart", payload: product })
                      }
                    >
                      +
                    </button>
                    {product.quantity}
                    <button
                      className="btn btn-info m-2"
                      onClick={() => {
                        if (product.quantity > 1) {
                          dispatch({ type: "DecreaseCart", payload: product });
                        } else {
                          dispatch({ type: "RemoveToCart", payload: product });
                        }
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>{product.price * product.quantity}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() =>
                        dispatch({ type: "RemoveToCart", payload: product })
                      }
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          );
        })}

        {state.length > 0 && (
          <div className="total d-flex flex-row justify-content-end">
            <p className=" fw-bold h2">Total: {total.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
