import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";

const CartPage: React.FC = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(cartItems);
  }, []);

  const removeFromCart = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const total = cart.reduce((acc, item) => acc + item.price, 0);
  console.log("Cart is :", cart);

  return (
    <>
      <h1 className="text-center py-3 bg-success">Cart</h1>
      {!cart ? (
        <Loader />
      ) : (
        <div className="d-flex my-3 flex-wrap justify-content-center gap-3 align-items-center">
          {cart.map((item, index) => (
            <div key={index} className="card col-md-4">
              <img
                src={item.image}
                style={{ height: "300px" }}
                className="img-fluid img-thumbnail p-5"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <h5 className="card-title">${item.price}</h5>
                <p className="card-text">{item.description}</p>
                <div className="py-3 text-center">
                  <button
                    className="btn btn-danger "
                    onClick={() => removeFromCart(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="col-md-12 py-5 bg-primary">
          <p className="fs-1 text-center font-lg">
            Total Cost: ${total.toFixed(2)}
          </p>
        </div>
      )}
    </>
  );
};

export default CartPage;
