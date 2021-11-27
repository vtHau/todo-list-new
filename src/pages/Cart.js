import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "./../helpers/helpers";
import CartList from "./../components/CartList";

function Cart() {
  const carts = useSelector((state) => state.cartReducer.carts);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Giỏ hàng";
  }, []);

  useEffect(() => {
    let tmpTotal = 0;
    carts.forEach((cart) => {
      tmpTotal += cart.product.price * cart.quantity;
    });

    setTotalPrice(tmpTotal);
  }, [carts]);

  return (
    <div className="app">
      <div className="content gird">
        <h3 className="title-section">Giỏ hàng</h3>
        {carts.length ? (
          <div className="cart-section row">
            <div className="col-12 col-md-12 col-lg-12 col-xl-12">
              <CartList carts={carts} />
            </div>
            <div className="cart-total">
              <div className="total-money-wrapper">
                <h3 className="title-money">Tổng tiền: </h3>
                <p className="total-money">
                  {formatPrice(totalPrice) || formatPrice(0)}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p className="no-item">Chưa có sản phẩm nào trong giỏ hàng.</p>
        )}
      </div>
    </div>
  );
}

export default Cart;
