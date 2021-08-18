export const SET_PRODUCTS = "SET_PRODUCTS";
export const SELECTED_PRODUCT = "SELECTED_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const setProduct = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});
export const selectedProducts = (product, id) => ({
  type: SELECTED_PRODUCT,
  payload: { ...product, count: 1 },
  id,
});
export const deleteProduct = (id) => ({
  type: DELETE_PRODUCT,
  payload: id,
});
export const increment = (id) => ({
  type: INCREMENT,
  payload: { id },
});
export const decrement = (id) => ({
  type: DECREMENT,
  payload: { id },
});
