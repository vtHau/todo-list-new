import React, { useEffect } from "react";
import ProductItem from "./../components/ProductItem";
import { products } from "./../productData";

function Product(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Sản phẩm";
  }, []);

  return (
    <div className="app">
      <div className="content gird">
        <h3 className="title-section">Sản phẩm</h3>
        <div className="product-list row">
          {products.map((product, key) => (
            <ProductItem key={key} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
