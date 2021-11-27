import React from "react";
import CartItem from "./CartItem";

function CartList(props) {
  const { carts } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th>Hình ảnh</th>
          <th>Tên sản phẩm</th>
          <th>Số lượng</th>
          <th>Giá</th>
          <th>Tổng tiền</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        {carts.map((cart, index) => (
          <CartItem key={index} index={index} cart={cart} />
        ))}
      </tbody>
    </table>
  );
}

export default CartList;
