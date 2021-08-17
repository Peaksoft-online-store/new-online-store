import {
	SET_PRODUCTS,
	DELETE_PRODUCT,
	SELECTED_PRODUCT,
	INCREMENT,
	DECREMENT,
} from '../actions'
const initialState = {
	products: [],
	orders: [],
}
// const localStorages = JSON.parse(localStorage.getItem('orders'))
export const productReducer = (
	// localStorages ||
	state = initialState,
	action,
) => {
	switch (action.type) {
		case SET_PRODUCTS:
			return {
				...state,
				products: action.payload,
			}
		case SELECTED_PRODUCT:
			return {
				...state,
				orders: [...state.orders, action.payload],
			}
		case INCREMENT:
			let updatedOrders = state.orders.map((item) => {
				if (item.id === action.payload.id) {
					item.count += 1
				}
				return item
			})
			return { ...state, orders: updatedOrders }
		case DECREMENT:
			let updatedOrder = state.orders.map((item) => {
				if (item.id === action.payload.id) {
					item.count -= 1
					item.sum = item.sum - action.payload.price
				}
				return item
			})
			return { ...state, orders: updatedOrder }
		case DELETE_PRODUCT:
			return {
				...state,
				orders: state.orders.filter(
					(order, id) => id !== action.payload,
				),
			}
		default:
			return state
	}
}
