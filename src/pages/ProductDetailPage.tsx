import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById } from "../api/api";
import Loader from "../components/Loader";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const [btn, setBtn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id!);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart");
    setBtn(true);
  };
  const cartNavigation = () => {
    navigate("/cart");
  };

  //   if (!product) return <p>Loading...</p>;

  return (
    <>
      {!product ? (
        <Loader />
      ) : (
        <div className="card">
          <div className="row d-flex justify-content-evenly">
            <div className="col-md-3 text-center">
              <img
                src={product.image}
                style={{ height: "300px" }}
                className="img-fluid img-thumbnail"
                alt={product.title}
              />
            </div>
            <div className="col-md-7">
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                {/* <h2 className="card-text">{product.description}</h2> */}
                <h5 className="card-text text-success">
                  Price: ${product.price}
                </h5>
                {btn == false ? (
                  <button className="btn btn-primary px-5" onClick={addToCart}>
                    Add to Cart
                  </button>
                ) : (
                  <button
                    className="btn btn-success px-5"
                    onClick={cartNavigation}
                  >
                    Go to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>

    // <div>
    //   <img src={product.image} alt={product.title} />
    //   <h1>{product.title}</h1>
    //   <p>{product.description}</p>
    //   <p>${product.price}</p>
    //   <button onClick={addToCart}>Add to Cart</button>
    // </div>
  );
};

export default ProductDetailPage;
