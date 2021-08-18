import { SET_PRODUCTS, ADD_ORDER, DELETE_ORDER, REMOVE } from "../actions";
const initialState = {
  products: [],
  orders: [],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case ADD_ORDER:
      let arr = [...state.orders];
      let is_choose = state.orders.findIndex((item) => {
        return item.title === action.obj.title;
      });
      if (is_choose === -1) {
        return {
          ...state,
          orders: [...state.orders, action.obj],
        };
      } else {
        return {
          orders: state.orders.map((el, id) => {
            return arr[is_choose].title === el.title
              ? { ...el, count: el.count + 1, price: el.price }
              : el;
          }),
        };
      }

    case DELETE_ORDER:
      let arr1 = [...state.orders];
      let is_ch1 = state.orders.findIndex((item) => {
        return item.title === action.obj.title;
      });
      if (action.obj.count > 1) {
        return {
          ...state,
          orders: state.orders.map((el, id) => {
            return arr1[is_ch1].title === el.title
              ? {
                  ...el,
                  count: el.count - 1,
                  price: el.price,
                }
              : el;
          }),
          totalCount: parseInt(state.totalCount) - 1,
          totalPrice: parseInt(state.totalPrice) - parseInt(action.obj.price),
        };
      } else {
        return {
          ...state,
          orders: state.orders.filter((_, id) => {
            return id !== action.id;
          }),
          totalCount: state.totalCount - 1,
          totalPrice: parseInt(state.totalPrice) - parseInt(action.obj.price),
        };
      }
    case REMOVE:
      return {
        ...state,
        orders: state.orders.filter((order, id) => id !== action.payload),
      };
    default:
      return state;
  }
};
