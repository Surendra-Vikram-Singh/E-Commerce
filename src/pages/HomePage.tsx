import React, { useEffect, useState } from "react";
import { getProducts } from "../api/api";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const HomePage: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchProducts = async () => {
      const data = await getProducts();
      setProducts(data);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="home-page">
          <h1 className="text-center py-3 bg-success">Products</h1>
          <div className="d-flex gap-3 my-3 flex-wrap justify-content-center align-item-center">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
