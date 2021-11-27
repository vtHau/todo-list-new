import { carts } from "./../cartData";
const data = JSON.parse(localStorage.getItem("CART")) || carts;

const initialState = {
  carts: data,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CART": {
      let index = -1;
      const carts = [...state.carts];
      const { product, quantity } = action.payload;

      index = findProductInCart(carts, product);

      if (index !== -1) {
        carts[index].quantity += quantity;
      } else {
        carts.push({ product, quantity });
      }

      localStorage.setItem("CART", JSON.stringify(carts));
      return { carts };
    }

    case "UPDATE_CART": {
      let index = -1;
      const carts = [...state.carts];
      const { product, quantity } = action.payload;

      index = findProductInCart(carts, product);
      if (index !== -1) {
        carts[index].quantity = quantity;
      }

      localStorage.setItem("CART", JSON.stringify(carts));
      return { carts };
    }

    case "DELETE_CART": {
      let index = -1;
      const carts = [...state.carts];
      const { product } = action.payload;

      index = findProductInCart(carts, product);

      if (index !== -1) {
        carts.splice(index, 1);
      }

      localStorage.setItem("CART", JSON.stringify(carts));
      return { carts };
    }

    default:
      return state;
  }
};

const findProductInCart = (cart, product) => {
  let index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};

export default cartReducer;
