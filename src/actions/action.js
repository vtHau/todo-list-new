export const addTodo = (todo) => {
  return {
    type: "ADD_TODO",
    payload: todo,
  };
};

export const updateTodo = (todo) => {
  return {
    type: "UPDATE_TODO",
    payload: todo,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

export const addCart = (cart) => {
  return {
    type: "ADD_CART",
    payload: cart,
  };
};

export const updateCart = (cart) => {
  return {
    type: "UPDATE_CART",
    payload: cart,
  };
};

export const deleteCart = (cart) => {
  return {
    type: "DELETE_CART",
    payload: cart,
  };
};
