import React from "react";
import { useDispatch } from "react-redux";
import { formatPrice } from "./../helpers/helpers";
import toast from "../helpers/toast";
import { addCart } from "./../actions/action";

function ProductItem(props) {
  const { product } = props;
  const dispatch = useDispatch();

  const addToCart = () => {
    const cart = { product, quantity: 1 };

    dispatch(addCart(cart));
    toast.success("Thành công", "Thêm vào giỏ hàng thành công");
  };

  return (
    <div className="col-6 col-md-4 col-lg-3 col-xl-3">
      <div className="product">
        <div className="pro-img">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="pro-content">
          <div className="pro-info">
            <p className="pro-detail" onClick={addToCart}>
              Add to cart
            </p>
            <p className="pro-name"> {product.name}</p>
            <div className="pro-price">
              <del className="pro-prev-price">Giảm 10%</del>
              <p className="pro-current-price">{formatPrice(product.price)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
