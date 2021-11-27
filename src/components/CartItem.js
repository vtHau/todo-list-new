import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { Popconfirm, Button } from "antd";
import { deleteCart, updateCart } from "./../actions/action";
import toast from "./../helpers/toast";
import { formatPrice } from "./../helpers/helpers";

function CartItem(props) {
  const { cart, index } = props;
  const { product } = cart;
  const dispatch = useDispatch();
  const typingTimeoutRef = useRef(null);
  const [isPopVisible, setIsPopVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setIsPopVisible(true);
  };

  const handlePopOk = () => {
    setConfirmLoading(true);
    const cart = { product };
    dispatch(deleteCart(cart));

    setTimeout(() => {
      setIsPopVisible(false);
      setConfirmLoading(false);
      toast.success("Thành công", "Xóa sản phẩm thành công");
    }, 300);
  };

  const handlePopCancel = () => {
    setIsPopVisible(false);
  };

  const changeQuantity = (e) => {
    const updateQuantity = () => {
      let { value } = e.target;
      if (value === "" || parseInt(value) === 0 || value < 1 || value > 99)
        value = 1;

      const cart = { product, quantity: parseInt(value) };
      dispatch(updateCart(cart));
      setTimeout(() => {
        toast.success("Thành công", "Cập nhập số lượng thành công");
      }, 300);
    };

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      updateQuantity();
    }, 800);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div className="pro-img">
          <img src={product.image} alt={product.name} />
        </div>
      </td>
      <td>
        <div className="pro-name">{product.name}</div>
      </td>
      <td>
        <input
          type="number"
          className="pro-quantity"
          defaultValue={cart.quantity}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onBlur={(e) => {
            if (e.target.value < 1 || e.target.value > 99) {
              e.target.value = 1;
            }
          }}
          onChange={changeQuantity}
        />
      </td>
      <td>{formatPrice(product.price)}</td>
      <td>{formatPrice(product.price * cart.quantity)}</td>
      <td>
        <Popconfirm
          title="Bạn có thật sự muốn xóa ?"
          visible={isPopVisible}
          onConfirm={handlePopOk}
          okButtonProps={{ loading: confirmLoading }}
          onCancel={handlePopCancel}
          okText="Có chứ"
          cancelText="Không nha"
        >
          <Button type="danger" onClick={showPopconfirm}>
            Xóa
          </Button>
        </Popconfirm>
      </td>
    </tr>
  );
}

export default CartItem;
