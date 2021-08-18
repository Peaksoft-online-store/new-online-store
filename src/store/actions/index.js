export const SET_PRODUCTS = "SET_PRODUCTS";
export const ADD_ORDER = "ADD_ORDER";
export const DELETE_ORDER = "DELETE_ORDER";
export const REMOVE = "REMOVE";

export const setProduct = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const add_order = (obj) => ({
  type: ADD_ORDER,
  payload: { ...obj, count: 0 },
});

export const delete_order = (obj, id) => ({
  type: DELETE_ORDER,
  id,
  obj,
});

export const remove = (id) => ({
  type: REMOVE,
  payload: id,
});
