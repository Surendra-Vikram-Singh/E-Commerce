import React from "react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
}) => (
  <div className="col-md-3">
    <Link to={`/product/${id}`}>
      <div className="card">
        <img
          src={image}
          style={{ height: "300px" }}
          className="img-fluid img-thumbnail p-5"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h5 className="card-title">${price}</h5>
        </div>
      </div>
    </Link>
  </div>
);

export default ProductCard;
